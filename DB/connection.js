const mysql = require('mysql');

require('dotenv/config');

const connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATABASE
});

module.exports = connection;