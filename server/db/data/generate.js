const fs = require('fs');
const faker = require('faker');
const videoData = require('./videos.js');


var writeData = function(i) {
  var header = 'name|url|associatedVideos\n';
  var data = header;
  var csvString;
  for (var j = 1; j < 1000001; j++) {
    var name = faker.lorem.words(2);
    var randomVideoIndex = faker.random.number({"min": 0, "max": 499});
    var randomVideoId = videoData.videos[randomVideoIndex].contentDetails.videoId;
    var url = `https://www.youtube.com/watch?v=${randomVideoId}`;
    var associated1 = faker.random.number({"min": 1, "max": 10000000});
    var associated2 = faker.random.number({"min": 1, "max": 10000000});
    var associated3 = faker.random.number({"min": 1, "max": 10000000});
    var associated4 = faker.random.number({"min": 1, "max": 10000000});
    var associated5 = faker.random.number({"min": 1, "max": 10000000});
    var associatedVideosArray = `{${associated1}, ${associated2}, ${associated3}, ${associated4}, ${associated5}}`;
    csvString = `${name}|${url}|${associatedVideosArray}\n`
    data += csvString;
  }
  fs.writeFileSync(`./data${i}.csv`, data);
  console.log(`data${i}.csv completed`);
}

for (var i = 1; i <= 10; i++){
  writeData(i);
}

//This function generates random movie names, random urls (these random urls are selected from randomly from 500 youtube movie trailer urls) and an associated videos array which is array of five random numbers between 1 and 10M.