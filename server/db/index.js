// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fandangit', {useNewUrlParser: true})

// const movieSchema = mongoose.Schema({
//   id: Number,
//   name: String,
//   associatedVideos: Array
// })

// let Movie = mongoose.model('Movie', movieSchema)

// let getMovieData = (id, callback) => {
//   let query = Movie.find({id: id});

//   query.exec((err, docs) => {
//     if (err) {
//       console.log('error querying mongodb: ', err);
//       callback(err, null);
//     } else {
//       console.log('mongodb query successful!');
//       callback(null, docs);
//     }
//   })
// }

// module.exports.getMovieData = getMovieData;

const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'mydb',
  password: '',
  port: 5432,
});
//TODO: factor config to out.

var getVideos = function(id, callback) {
  pool.query(`SELECT * from videos WHERE id IN (SELECT associatedid FROM associatedVideos WHERE id=$1)`, [id], function(err, results) {
    callback(err, results);
  })
}

var createVideo = function(name, url, callback) {
  pool.query(`INSERT INTO videos (name, url) VALUES ($1, $2)`, [name, url], function(err, results) {
    callback(err, results);
  })
}

var updateVideo = function(name, url, id, callback) {
  pool.query(`UPDATE videos SET name=$1, url=$2 WHERE id=$3`, [name, url, id], function(err, results) {
    callback(err, results);
  })
}

var deleteAssociation = function(id, associatedId, callback) {
  pool.query(`DELETE FROM associatedVideos WHERE id=$1 AND associatedId=$2`, [id, associatedId], function(err, results) {
    callback(err, results);
  })
}


module.exports = {
  getVideos,
  createVideo,
  updateVideo,
  deleteAssociation
}
