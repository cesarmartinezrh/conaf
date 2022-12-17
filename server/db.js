const { createPool } = require('mysql2');
const pool = createPool({
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  database : process.env.DATABASE,
  port: process.env.DATABASEPORT 
});

module.exports = pool; 