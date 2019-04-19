\c videoplayer

CREATE TABLE videos (
  name varchar(50),
  url varchar(100),
  associatedVideos int []
);

//TODO: add auto incremented id

\copy videos FROM 'server/db/data/csv/data1.csv' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
\copy videos FROM 'server/db/data/csv/data2.csv' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
\copy videos FROM 'server/db/data/csv/data3.csv' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
\copy videos FROM 'server/db/data/csv/data4.csv' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
\copy videos FROM 'server/db/data/csv/data5.csv' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
\copy videos FROM 'server/db/data/csv/data6.csv' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
\copy videos FROM 'server/db/data/csv/data7.csv' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
\copy videos FROM 'server/db/data/csv/data8.csv' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
\copy videos FROM 'server/db/data/csv/data9.csv' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
\copy videos FROM 'server/db/data/csv/data10.csv' WITH (FORMAT CSV, HEADER, DELIMITER('|'));

