const express = require('express');
const app = (express());
const PORT = 3001;
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/index');

app.use(bodyParser());

app.use(cors());

app.use('/:id', express.static(__dirname + '/../public/'));

app.get('/videos/:id', (req, res) => {
  let id = req.params.id;
  db.getMovieData(id, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('db query successful! results: ', results);
      res.statusCode = 200;
      res.json(results);
    }
  })
})


app.use('/client/dist/bundle.js', (express.static(__dirname + '/../client/dist/bundle.js')))
app.use('/*', express.static(__dirname + '/../public/'));

app.listen(PORT, () => {
  console.log(`Server active! Listening on port ${PORT}.`)
})