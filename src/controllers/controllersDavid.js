const pool = require('../database')





///////////// CONTROLADORES PARA TABLA DE COMISIONES 
//Mostrar los estatus
const getAllComisiones = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "comisiones" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getComisiones = async (req, res, next) =>{
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "comisiones" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

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
const createComisiones = async (req, res, next) =>{
    const {nombre, porcentaje} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "comisiones" (nombre, porcentaje, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, '0', '0', NOW() , NOW() ) RETURNING *`,
        [nombre, porcentaje]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableComisiones = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "comisiones" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateComisiones = async (req, res, next) =>{
    const { id } = req.params;
    const { nombre, porcentaje, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "comisiones" SET "nombre" = $1, porcentaje = $2, "creationUpdate" = CURRENT_DATE WHERE id = $3 RETURNING *',
        [nombre, porcentaje, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE COMISIONES




///////////// CONTROLADORES PARA TABLA DE VENDEDORES 
//Mostrar los estatus
const getAllVendedor = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "vendedores" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getVendedor = async (req, res, next) =>{
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "vendedores" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

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
const createVendedor = async (req, res, next) =>{
    const {imagen, nombre, telefono, sucursal, fechaAlta, referenciaWeb, clientes} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "vendedores" (imagen, nombre, telefono, sucursal, "fechaAlta", "referenciaWeb", clientes, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, '0', '0', NOW() , NOW() ) RETURNING *`,
        [imagen, nombre, telefono, sucursal, fechaAlta, referenciaWeb, clientes]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableVendedor = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "vendedores" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateVendedor = async (req, res, next) =>{
    const { id } = req.params;
    const { imagen, nombre, telefono, sucursal, fechaAlta, referenciaWeb, clientes, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "vendedores" SET "imagen" = $1, nombre = $2, telefono = $3, sucursal = $4, "fechaAlta" = $5, "referenciaWeb" = $6, clientes = $7, "creationUpdate" = CURRENT_DATE WHERE id = $3 RETURNING *',
        [imagen, nombre, telefono, sucursal, fechaAlta, referenciaWeb, clientes, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE VENDEDORES




///////////////////////////////////////// CONTROLADORES SIN UBICAR //////////////////////////////////////////////


///////////// CONTROLADORES PARA TABLA DE ESTATUS 
//Mostrar los estatus
const getAllStatus = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "estatus" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getStatus = async (req, res, next) =>{
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "estatus" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

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
        `UPDATE "estatus" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
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
    getAllVendedor, getVendedor, createVendedor, disableVendedor, updateVendedor,
    getAllComisiones, getComisiones, createComisiones, disableComisiones, updateComisiones
    
}