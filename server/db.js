const { createPool } = require('mysql2');
const pool = createPool({
  host     : 'pirul.conafor.gob.mx',
  user     : 'participacionsocial',
  password : 'w%n6%O63eq40',
  database : 'participacionsocial',
  port: 3306
});

module.exports = pool 