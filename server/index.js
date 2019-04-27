require('newrelic');
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
  const {id} = req.params;
  db.getVideos(id, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('GET successful! results: ', results.rows);
      var result = {};
      result.id = id;
      result.name = results.rows[0].name;
      result.associatedVideos = [];
      for (var i = 0; i < results.rows.length; i++) {
        result.associatedVideos[i] = {title: results.rows[i].name, url: results.rows[i].url}
      }
      res.status(200).json([result]);
    }
  });
});

app.post('/videos/add', (req, res) => {
  let {name, url} = req.body;
  db.createVideo(name, url, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('POST successful! results: ', results);
      res.status(200).json(results);
    }
  });
});

//Execution tim eof this API call is too much.

// app.post('/videos/add', async (req, res) => {
//   try {
//     const {name, url} = req.body;
//     const query = await db.createVideoAndAssociation(name, url);
//     res.status(200).json(query);
//   } catch (e) {
//     res.sendStatus(500);
//   }
// });



app.put('/videos/update', (req, res) => {
  const {name, url, id} = req.body;
  db.updateVideo(name, url, id, (err, results) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('PUT successful! results: ', results);
      res.status(200).json(results);
    }
  });
});

app.delete('/videos/delete', (req, res) => {
  const {id, associatedId} = req.body;
  db.deleteAssociation(id, associatedId, (err, results) => {
    if(err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log('DELETE successful! results: ', results);
      res.status(200).json(results);
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server active! Listening on port ${PORT}.`)
});