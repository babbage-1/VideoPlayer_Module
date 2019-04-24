const fs = require('fs');
const faker = require('faker');
const videoData = require('./videos.js');


//Generates 1 csv file

var writeData = function(i) {
  var data = '';
  if (i === 0) {
    data = 'name|url|associatedVideos\n';
  }
  var name, randomVideoIndex, randomVideoId, url, associated1, associated2, associated3, associated4, associated5, associatedVideosArray;

  for (var j = 1; j < 100001; j++) {
    // movieId = (i) * 100000 + j;
    name = faker.lorem.words(2);
    randomVideoIndex = faker.random.number({"min": 0, "max": 499});
    randomVideoId = videoData.videos[randomVideoIndex].contentDetails.videoId;
    url = `https://www.youtube.com/watch?v=${randomVideoId}`;
    associated1 = faker.random.number({"min": 1, "max": 10000000});
    associated2 = faker.random.number({"min": 1, "max": 10000000});
    associated3 = faker.random.number({"min": 1, "max": 10000000});
    associated4 = faker.random.number({"min": 1, "max": 10000000});
    associated5 = faker.random.number({"min": 1, "max": 10000000});
    associatedVideosArray = `{${associated1}, ${associated2}, ${associated3}, ${associated4}, ${associated5}}`;
    data += `${name}|${url}|${associatedVideosArray}\n`;
  }
  if (i === 0) {
    fs.writeFile(`./data.csv`, data, function(err) {
      if (err) throw err;
      data = '';
      console.log('going into 1');
      writeData(i + 1);
    });
  } else if (i < 99) {
    fs.appendFile(`./data.csv`, data, function(err) {
      if (err) throw err;
      data = '';
      console.log('going into', (i + 1));
      writeData(i + 1);
    });
  } else {
    console.log('finishing');
    fs.appendFile(`./data.csv`, data, function(err) {
      if (err) throw err;
      data = '';
    });
  }
}

writeData(0);


