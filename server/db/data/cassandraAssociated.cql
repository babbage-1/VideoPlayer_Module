CREATE KEYSPACE IF NOT EXISTS videoplayer WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};

USE videoplayer;


DROP TABLE IF EXISTS associatedVideos;

CREATE TABLE IF NOT EXISTS associatedVideos(
  id int,
  movieId int,
  associatedId int,
  PRIMARY KEY((movieId), id)
);


COPY associatedVideos(id, movieId, associatedId) FROM '/Users/aysun/Documents/hr/video-player-and-carousel/AssociatedData.csv' WITH DELIMITER = '|' AND HEADER = TRUE AND NUMPROCESSES = 4 AND CHUNKSIZE = 1000 AND MAXBATCHSIZE = 20;