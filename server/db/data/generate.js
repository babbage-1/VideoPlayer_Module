const fs = require('fs');
const faker = require('faker');
const videoData = require('./videos.js');


//Generates videos csv file

var writeVideosData = function(i) {
  var data = '';
  if (i === 0) {
    data = 'name|url\n';
  }
  var name, randomVideoIndex, randomVideoId, url;

  for (var j = 1; j < 100001; j++) {
    name = faker.lorem.words(2);
    randomVideoIndex = faker.random.number({"min": 0, "max": 499});
    randomVideoId = videoData.videos[randomVideoIndex].contentDetails.videoId;
    url = `https://www.youtube.com/watch?v=${randomVideoId}`;
    data += `${name}|${url}\n`;
  }
  if (i === 0) {
    fs.writeFile(`./VideosData.csv`, data, function(err) {
      if (err) throw err;
      data = '';
      console.log('going into 1');
      writeVideosData(i + 1);
    });
  } else if (i < 99) {
    fs.appendFile(`./VideosData.csv`, data, function(err) {
      if (err) throw err;
      data = '';
      console.log('going into', (i + 1));
      writeVideosData(i + 1);
    });
  } else {
    console.log('finishing');
    fs.appendFile(`./VideosData.csv`, data, function(err) {
      if (err) throw err;
      data = '';
    });
  }
}


//Generates associated videos csv file

var writeAssociatedData = function(i) {
  var data = '';
  if (i === 0) {
    data = 'id|associatedId\n';
  }
  var id, randomInt, associatedId;

  for (var j = 1; j < 100001; j++) {
    randomInt = faker.random.number({"min": 2, "max": 5});
    for (var k = 0; k < randomInt; k++) {
      id = i * 100000 + j;
      if (k === 0) {
        associatedId = id;
      } else {
        associatedId = faker.random.number({"min": 1, "max": 10000000});
      }
      data += `${id}|${associatedId}\n`;
    }
  }
  if (i === 0) {
    fs.writeFile(`./AssociatedData.csv`, data, function(err) {
      if (err) throw err;
      data = '';
      console.log('going into 1');
      writeAssociatedData(i + 1);
    });
  } else if (i < 99) {
    fs.appendFile(`./AssociatedData.csv`, data, function(err) {
      if (err) throw err;
      data = '';
      console.log('going into', (i + 1));
      writeAssociatedData(i + 1);
    });
  } else {
    console.log('finishing');
    fs.appendFile(`./AssociatedData.csv`, data, function(err) {
      if (err) throw err;
      data = '';
    });
  }
}

writeVideosData(0);
writeAssociatedData(0);


/////////////////////////////////////
//////CASSANDRA/////////////////////

//Generates videos csv file

// var writeVideosData = function(i) {
//   var data = '';
//   if (i === 0) {
//     data = 'movieId|name|url\n';
//   }
//   var name, randomVideoIndex, randomVideoId, url;

//   for (var j = 1; j < 100001; j++) {
//     movieId = i * 100000 + j;
//     name = faker.lorem.words(2);
//     randomVideoIndex = faker.random.number({"min": 0, "max": 499});
//     randomVideoId = videoData.videos[randomVideoIndex].contentDetails.videoId;
//     url = `https://www.youtube.com/watch?v=${randomVideoId}`;
//     data += `${movieId}|${name}|${url}\n`;
//   }
//   if (i === 0) {
//     fs.writeFile(`./VideosData.csv`, data, function(err) {
//       if (err) throw err;
//       data = '';
//       console.log('going into 1');
//       writeVideosData(i + 1);
//     });
//   } else if (i < 99) {
//     fs.appendFile(`./VideosData.csv`, data, function(err) {
//       if (err) throw err;
//       data = '';
//       console.log('going into', (i + 1));
//       writeVideosData(i + 1);
//     });
//   } else {
//     console.log('finishing');
//     fs.appendFile(`./VideosData.csv`, data, function(err) {
//       if (err) throw err;
//       data = '';
//     });
//   }
// }


// //Generates associated videos csv file

// var writeAssociatedData = function(i) {
//   var data = '';
//   if (i === 0) {
//     data = 'id|movieId|associatedId\n';
//   }
//   var id, movieId, counter, randomInt, associatedId;

//   counter = 1;

//   for (var j = 1; j < 100001; j++) {
//     randomInt = faker.random.number({"min": 2, "max": 5});
//     for (var k = 0; k < randomInt; k++) {
//       id = counter++;
//       movieId = i * 100000 + j;
//       if (k === 0) {
//         associatedId = movieId;
//       } else {
//         associatedId = faker.random.number({"min": 1, "max": 10000000});
//       }
//       data += `${id}|${movieId}|${associatedId}\n`;
//     }
//   }
//   if (i === 0) {
//     fs.writeFile(`./AssociatedData.csv`, data, function(err) {
//       if (err) throw err;
//       data = '';
//       console.log('going into 1');
//       writeAssociatedData(i + 1);
//     });
//   } else if (i < 99) {
//     fs.appendFile(`./AssociatedData.csv`, data, function(err) {
//       if (err) throw err;
//       data = '';
//       console.log('going into', (i + 1));
//       writeAssociatedData(i + 1);
//     });
//   } else {
//     console.log('finishing');
//     fs.appendFile(`./AssociatedData.csv`, data, function(err) {
//       if (err) throw err;
//       data = '';
//     });
//   }
// }

// writeVideosData(0);
// writeAssociatedData(0);




