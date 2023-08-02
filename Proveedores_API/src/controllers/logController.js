const pool = require('../database');

const getLog = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM "providersLog"');
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json({ error: 'Error en el servidor' });
    }
}

const getLogById = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await pool.query('SELECT * FROM "providersLog" WHERE id = $1', [id]);
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json({ error: 'Error en el servidor' });
    }
}


module.exports = {
    getLog,
    getLogById
}