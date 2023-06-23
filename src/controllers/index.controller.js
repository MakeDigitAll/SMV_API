const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: "246819",
    database: 'prueba',
    port: "5432",
});

const getUsers = async (req, res) =>{
    const response = await pool.query('select * from users');
    //console.log(response.rows);
    //para mostrar en el servidor
    res.status(200).json(response.rows);
}

module.exports = {
    getUsers
}