CREATE KEYSPACE IF NOT EXISTS videoplayer WITH replication = {'class': 'NetworkTopology', 'replication_factor': 3};

USE videoplayer;

DROP TABLE IF EXISTS videos;

CREATE TABLE IF NOT EXISTS videos(
  movieId int,
  name varchar,
  url varchar,
  PRIMARY KEY(movieId)
);

COPY videos(movieId, name, url) FROM '/Users/aysun/Documents/hr/video-player-and-carousel/VideosData.csv' WITH DELIMITER = '|' AND HEADER = TRUE AND NUMPROCESSES = 4 AND CHUNKSIZE = 1000 AND MAXBATCHSIZE = 20;