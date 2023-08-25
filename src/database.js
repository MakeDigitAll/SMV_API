const { Pool } = require("pg");
const { db } = require("./config");

const pool = new Pool({
    host: db.host,
    user: "postgres",
    password: "246819",
    database: "SMV_DEV",
    port: db.port,
});

module.exports = pool;