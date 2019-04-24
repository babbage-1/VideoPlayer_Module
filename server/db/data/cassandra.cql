CREATE KEYSPACE IF NOT EXISTS videoplayer WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};

USE videoplayer;

CREATE TABLE IF NOT EXISTS videos(
  movieId int,
  name varchar,
  url varchar,
  associatedVideos set <int>,
  PRIMARY KEY(movieId)
);


COPY videos(movieId, name, url, associatedVideos) FROM '/Users/aysun/Documents/hr/video-player-and-carousel/server/db/data/csv/data.csv' WITH DELIMITER = '|' AND HEADER = TRUE AND NUMPROCESSES = 4 AND CHUNKSIZE = 1000 AND MAXBATCHSIZE = 20;