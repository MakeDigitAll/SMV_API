const { Pool } = require("pg");
const { db } = require("./config");

const pool = new Pool({
    host: 'localhost',
    user: "postgres",
    password: "13200",
    database: "SMV_DEV",
    port: '5432',
});

pool.connect((err, client, done) => {
    if (err) {
        console.log("Error al conectar con la base de datos");
    } else {
        console.log("Conexión exitosa con la base de datos");
    }
});

module.exports = pool;