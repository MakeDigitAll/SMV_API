const pool = require('../database')



/////////////////////////////////////// CONTROLADORES PARA TABLA DE ESTATUS ////////////////////////////////////////

//mostrar los estatus
const getAllStatus = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM public."estatus";');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getStatus = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM estatus WHERE id = $1', [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona :("
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createStatus = async (req, res, next) =>{
    const { id , estatus } = req.body

    try {
    const result = await pool.query(
        'INSERT INTO estatus (id, estatus) VALUES ($1, $2) RETURNING *',
        [id, estatus]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar un estatus
const deleteStatus = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query("DELETE FROM estatus WHERE id = $1", [id]);

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo eliminar not found"
    });

    return res.sendStatus(204);
    } catch (error){
        next(error);
    }
};

//actualizar un estatus
const updateStatus = async (req, res, next) =>{
    const { id } = req.params;
    const { estatus } = req.body;

    const result = await pool.query(
        "UPDATE estatus SET estatus = $1 WHERE id = $2 RETURNING *",
        [estatus, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE ESTATUS ////////////////////////////////////////

const getAllOrcFoliosSur = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM nueva_orden_de_compra_folios_de_surtido');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getOrcFoliosSur = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM nueva_orden_de_compra_folios_de_surtido WHERE id = $1', [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona :("
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createOrcFoliosSur = async (req, res, next) =>{
    const { id , fecha, almacen, producto, cantidad } = req.body

    try {
    const result = await pool.query(
        'INSERT INTO nueva_orden_de_compra_folios_de_surtido (id, fecha, almacen, producto, cantidad) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [id, fecha, almacen, producto, cantidad]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar un estatus
const deleteOrcFoliosSur = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query("DELETE FROM nueva_orden_de_compra_folios_de_surtido WHERE id = $1", [id]);

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo eliminar not found"
    });

    return res.sendStatus(204);
    } catch (error){
        next(error);
    }
};

//actualizar un folio para la nueva orden de compra
const updateOrcFoliosSur = async (req, res, next) =>{
    const { id } = req.params;
    const { fecha, almacen, producto, cantidad } = req.body;

    const result = await pool.query(
        "UPDATE nueva_orden_de_compra_folios_de_surtido SET fecha = $1, almacen = $2, producto = $3, cantidad = $4 WHERE id = $5 RETURNING *",
        [fecha, almacen, producto, cantidad, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};


module.exports = {
    getAllStatus, getStatus, createStatus, deleteStatus, updateStatus, 
    getAllOrcFoliosSur, getOrcFoliosSur, createOrcFoliosSur, deleteOrcFoliosSur, updateOrcFoliosSur
}