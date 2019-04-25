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
