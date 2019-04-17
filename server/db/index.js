const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fandangit', {useNewUrlParser: true})

const movieSchema = mongoose.Schema({
  id: Number,
  name: String,
  associatedVideos: Array
})

let Movie = mongoose.model('Movie', movieSchema)

let getMovieData = (id, callback) => {
  let query = Movie.find({id: id});

  query.exec((err, docs) => {
    if (err) {
      console.log('error querying mongodb: ', err);
      callback(err, null);
    } else {
      console.log('mongodb query successful!');
      callback(null, docs);
    }
  })
}

module.exports.getMovieData = getMovieData;

