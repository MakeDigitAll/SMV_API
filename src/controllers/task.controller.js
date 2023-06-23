const pool = require('../database')

//mostrar tareas
const getAllTask = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM users');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar una tarea
const getTask = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona :("
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear una tarea
const createTask = async (req, res, next) =>{
    const { nombre, correo } = req.body

    try {
    const result = await pool.query(
        'INSERT INTO users (nombre, correo) VALUES ($1, $2) RETURNING *',
        [nombre, correo,]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar una tarea
const deleteTask = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query("DELETE FROM users WHERE id = $1", [id]);

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo eliminar not found"
    });

    return res.sendStatus(204);
    } catch (error){
        next(error);
    }
};

//actualizar una tarea
const updateTask = async (req, res, next) =>{
    const { id } = req.params;
    const { nombre, correo } = req.body;

    const result = await pool.query(
        "UPDATE users SET nombre = $1, correo = $2, WHERE id = $3 RETURNING *",
        [nombre, correo, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

module.exports = {
    getAllTask,
    getTask,
    createTask,
    deleteTask,
    updateTask
}