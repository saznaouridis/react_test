const {Pool} = require('pg');

const pool = new Pool({
  user: 'sokratis2',
  host: 'localhost',
  database: 'postgres',
  password: 'vladislav666',
  port: 5432,
});

module.exports = pool;