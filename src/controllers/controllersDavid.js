const pool = require('../database')





///////////////////////////////////////// CONTROLADORES SIN UBICAR //////////////////////////////////////////////


///////////// CONTROLADORES PARA TABLA DE ESTATUS 
//Mostrar los estatus
const getAllStatus = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "estatus" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getStatus = async (req, res, next) =>{
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "estatus" WHERE id = $1 AND "isDelete" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: error.message
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createStatus = async (req, res, next) =>{
    const {  estatus} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "estatus" (estatus, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, '0', '0', NOW() , NOW() ) RETURNING *`,
        [estatus]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableStatus = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "estatus" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateStatus = async (req, res, next) =>{
    const { id } = req.params;
    const { estatus, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "estatus" SET "estatus" = $1, "creationUpdate" = CURRENT_DATE WHERE id = $3 RETURNING *',
        [estatus, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE ESTATUS


///////////////////////////////////////// FIN DE LOS CONTROLADORES SIN UBICAR //////////////////////////////////////////////







module.exports = {

    



    

    getAllStatus, getStatus, createStatus, disableStatus, updateStatus, 
    
}