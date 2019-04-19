const fs = require('fs');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
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
    var associated1 = faker.random.number({"min": 0, "max": 499});
    var associated2 = faker.random.number({"min": 0, "max": 499});
    var associated3 = faker.random.number({"min": 0, "max": 499});
    var associated4 = faker.random.number({"min": 0, "max": 499});
    var associated5 = faker.random.number({"min": 0, "max": 499});
    var associatedVideosArray = `[${associated1}, ${associated2}, ${associated3}, ${associated4}, ${associated5}]`;
    csvString = `${name}|${url}|${associatedVideosArray}\n`
    data += csvString;
  }
  fs.writeFileSync(`./data${i}.csv`, data);
}

for (var i = 1; i <= 10; i++){
  writeData(i);
}


// var writeData = function(i) {
//   var header = 'name|url|associatedVideos\n';
//   var data = header;
//   var csvString;
//   for (var j = 1; j < 1000001; j++) {
//     var name = faker.lorem.words(2);
//     var videoId = j;
//     var url = `https://www.youtube.com/watch?v=${videoId}`;
//     var associated1 = faker.random.number({"min": 1, "max": 10000000});
//     var associated2 = faker.random.number({"min": 1, "max": 10000000});
//     var associated3 = faker.random.number({"min": 1, "max": 10000000});
//     var associated4 = faker.random.number({"min": 1, "max": 10000000});
//     var associated5 = faker.random.number({"min": 1, "max": 10000000});
//     var associatedVideosArray = `[${associated1}, ${associated2}, ${associated3}, ${associated4}, ${associated5}]`;
//     csvString = `${name}|${url}|${associatedVideosArray}\n`
//     data += csvString;
//   }
//   fs.writeFileSync(`./data${i}.csv`, data);
// }

// for (var i = 1; i <= 10; i++){
//   writeData(i);
// }


// for (var i = 1; i <= 10; i++){
//   var writeData = function(i) {
//     writer.pipe(fs.createWriteStream(`data${i}.csv`));

//     for (var j = 1; j < 1000001; j++) {
//       var name = faker.lorem.words(2);
//       var videoId = j;
//       var url = `https://www.youtube.com/watch?v=${videoId}`;
//       var associated1 = faker.random.number({"min": 1, "max": 10000000});
//       var associated2 = faker.random.number({"min": 1, "max": 10000000});
//       var associated3 = faker.random.number({"min": 1, "max": 10000000});
//       var associated4 = faker.random.number({"min": 1, "max": 10000000});
//       var associated5 = faker.random.number({"min": 1, "max": 10000000});
//       var associatedVideosArray = `[${associated1}, ${associated2}, ${associated3}, ${associated4}, ${associated5}]`;
//       writer.write({
//         name: name,
//         url: url,
//         associatedVideos: associatedVideosArray
//       })
//     }

//     console.log(`data${i}.csv completed`);
//   }
//   writeData(i);
// }
// writer.end();











