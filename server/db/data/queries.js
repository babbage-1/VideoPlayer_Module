const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'mydb',
  password: '',
  port: 5432,
});

const connection = pool.connect();

var getMainVideo = function(id, callback) {
  connection.query(`select * from videos where id=${id}`, function(err, results) {
    callback(err, results);
  })
}

var getAssociatedVideosInfo = function(associated1, associated2, associated3, associated4, associated5, callback) {
  connection.query(`select * from videos where id in (${associated1}, ${associated2}, ${associated3}, ${associated4}, ${associated5})`, function(err, results) {
    callback(err, results);
  })
}



module.exports = {
  getMainVideo,
  getAssociatedVideosInfo
}
