const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'mydb',
  password: '',
  port: 5432,
});


(async () => {

  const client = await pool.connect()

  try {
    console.time('timing seed');

    await client.query('BEGIN');
    await client.query(`
      CREATE TABLE IF NOT EXISTS videos(
        name VARCHAR(50) NOT NULL,
        url VARCHAR(100) NOT NULL,
        associatedVideos INT [] NOT NULL
        );
    `);

    console.log('writing to database!');

    const path1 = '/Users/aysun/Documents/hr/video-player-and-carousel/server/db/data/csv/data1.csv';
    const path2 = '/Users/aysun/Documents/hr/video-player-and-carousel/server/db/data/csv/data2.csv';
    const path3 = '/Users/aysun/Documents/hr/video-player-and-carousel/server/db/data/csv/data3.csv';
    const path4 = '/Users/aysun/Documents/hr/video-player-and-carousel/server/db/data/csv/data4.csv';
    const path5 = '/Users/aysun/Documents/hr/video-player-and-carousel/server/db/data/csv/data5.csv';
    const path6 = '/Users/aysun/Documents/hr/video-player-and-carousel/server/db/data/csv/data6.csv';
    const path7 = '/Users/aysun/Documents/hr/video-player-and-carousel/server/db/data/csv/data7.csv';
    const path8 = '/Users/aysun/Documents/hr/video-player-and-carousel/server/db/data/csv/data8.csv';
    const path9 = '/Users/aysun/Documents/hr/video-player-and-carousel/server/db/data/csv/data9.csv';
    const path10 = '/Users/aysun/Documents/hr/video-player-and-carousel/server/db/data/csv/data10.csv';

    await client.query(`
    COPY videos FROM '${path1}' WITH (FORMAT CSV, HEADER, DELIMITER('|'))
    `);

    await client.query(`
      COPY videos FROM '${path2}' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
    `);

    await client.query(`
      COPY videos FROM '${path3}' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
    `);

    await client.query(`
      COPY videos FROM '${path4}' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
    `);

    await client.query(`
      COPY videos FROM '${path5}' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
    `);

    await client.query(`
      COPY videos FROM '${path6}' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
    `);

    await client.query(`
      COPY videos FROM '${path7}' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
    `);
    await client.query(`
      COPY videos FROM '${path8}' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
    `);

    await client.query(`
      COPY videos FROM '${path9}' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
    `);

    await client.query(`
      COPY videos FROM '${path10}' WITH (FORMAT CSV, HEADER, DELIMITER('|'));
    `);

    await client.query(`
      ALTER TABLE videos ADD COLUMN id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY;
    `);

    await client.query('COMMIT');

    console.timeEnd('timing seed');

  } catch (e) {
    await client.query('ROLLBACK');
    console.log('error!');
    throw e;
  } finally {
    client.release();
  }
})().catch(e => console.error(e.stack));







