const fs = require('fs');
const faker = require('faker');
const videoData = require('./videos.js');


//Generates 1 csv file.

var writeData = function(i) {
  var data = '';
  if (i === 0) {
    data = 'movieId|name|url|associatedVideos\n';
  }
  var movieId, name, randomVideoIndex, randomVideoId, url, associated1, associated2, associated3, associated4, associated5, associatedVideosArray;

  for (var j = 1; j < 100001; j++) {
    movieId = (i) * 100000 + j;
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
    data += `${movieId}|${name}|${url}|${associatedVideosArray}\n`;
  }
  if (i === 0) {
    fs.writeFile(`./data.csv`, data, function(err) {
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
      data = '';
    });
  }
}

writeData(0);



//Generates 10 csv files.

// var writeData = function(i) {
//   var header = 'movieId|name|url|associatedVideos\n';
//   var data = header;
//   var csvString;
//   for (var j = 1; j < 1000001; j++) {
//     var movieId = (i - 1) * 1000000 + j;
//     var name = faker.lorem.words(2);
//     var randomVideoIndex = faker.random.number({"min": 0, "max": 499});
//     var randomVideoId = videoData.videos[randomVideoIndex].contentDetails.videoId;
//     var url = `https://www.youtube.com/watch?v=${randomVideoId}`;
//     var associated1 = faker.random.number({"min": 1, "max": 10000000});
//     var associated2 = faker.random.number({"min": 1, "max": 10000000});
//     var associated3 = faker.random.number({"min": 1, "max": 10000000});
//     var associated4 = faker.random.number({"min": 1, "max": 10000000});
//     var associated5 = faker.random.number({"min": 1, "max": 10000000});
//     var associatedVideosArray = `{${associated1}, ${associated2}, ${associated3}, ${associated4}, ${associated5}}`;
//     csvString = `${movieId}|${name}|${url}|${associatedVideosArray}\n`
//     data += csvString;
//   }
//   fs.writeFileSync(`./data${i}.csv`, data);
//   console.log(`data${i}.csv completed`);
// }

// for (var i = 1; i <= 10; i++) {
//   writeData(i);
// }


