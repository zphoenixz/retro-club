const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'retro_club_db',
    password: 'ramiro29'
});

module.exports = pool.promise();