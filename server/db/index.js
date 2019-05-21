const { Pool } = require('pg');
const { config } = require('./postgres.config.js');
const pool = new Pool(config);

const getVideos = function(id, callback) {
  pool.query(`SELECT name, url from videos WHERE id IN (SELECT associatedid FROM associatedVideos WHERE id=$1)`, [id], function(err, results) {
    callback(err, results);
  })
}

const createVideo = function(name, url, callback) {
  pool.query(`INSERT INTO videos (name, url) VALUES ($1, $2)`, [name, url], function(err, results) {
    callback(err, results);
  })
}


const createVideoAndAssociation = async(name, url) => {
  const client =await pool.connect();
  try {
    await client.query('BEGIN');
    const firstQuery = await client.query(`INSERT INTO videos (name, url) VALUES ($1, $2)`, [name, url]);
    const secondQuery = await client.query(`SELECT id FROM videos WHERE name=$1 AND url=$2`,  [name, url]);
    const id = secondQuery.rows[0].id;
    const thirdQuery = await client.query(`INSERT INTO associatedVideos (id, associatedId) VALUES ($1, $2)`, [id, id]);
    console.log("query ends");
    await client.query('COMMIT');
    return thirdQuery.command;
  } catch(e) {
    await client.query('ROLLBACK');
    throw e;
  } finally {
    client.release();
  }
};

const updateVideo = function(name, url, id, callback) {
  pool.query(`UPDATE videos SET name=$1, url=$2 WHERE id=$3`, [name, url, id], function(err, results) {
    callback(err, results);
  })
}

const deleteAssociation = function(id, associatedId, callback) {
  pool.query(`DELETE FROM associatedVideos WHERE id=$1 AND associatedId=$2`, [id, associatedId], function(err, results) {
    callback(err, results);
  })
}


module.exports = {
  getVideos,
  createVideo,
  createVideoAndAssociation,
  updateVideo,
  deleteAssociation
}
