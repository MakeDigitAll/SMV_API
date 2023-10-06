const { Pool } = require("pg");
const { db } = require("./config");

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '246819',
    database: db.database,
    port: '5432',
});

module.exports = pool;