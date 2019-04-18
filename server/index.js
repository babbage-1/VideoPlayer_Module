const express = require('express');
const app = (express());
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/index');
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded( { extended: true } ))
app.use(bodyParser.json())
app.use(cors());

app.use('/carousel/:id', express.static(__dirname + '/../client/dist'));

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

// app.use('/client/dist/bundle.js', (express.static(__dirname + '/../client/dist/bundle.js')))
// app.use('/*', express.static(__dirname + '/../client/dist/index.html'));

app.listen(PORT, () => {
  console.log(`Server active! Listening on port ${PORT}.`)
})