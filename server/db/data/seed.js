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

    //const path = '/Users/aysun/Documents/hr/video-player-and-carousel/server/db/data/csv/data.csv';
    const path = '/Users/aysun/Documents/hr/video-player-and-carousel/data.csv';

    await client.query(`
      COPY videos FROM '${path}' WITH (FORMAT CSV, HEADER, DELIMITER('|'))
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







