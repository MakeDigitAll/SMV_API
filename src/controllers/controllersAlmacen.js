const pool = require('../database')



///////////// CONTROLADORES PARA TABLA DE COTENEDORES 
//Mostrar los estatus
const getAllContenedores = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "contenedores" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getContenedores = async (req, res, next) =>{
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "contenedores" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

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
const createContenedores = async (req, res, next) =>{
    const {activo, nombre, inicio, fin} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "contenedores" (activo, nombre, inicio, fin, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, '0', '0', NOW() , NOW() ) RETURNING *`,
        [activo, nombre, inicio, fin]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableContenedores = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "contenedores" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateContenedores = async (req, res, next) =>{
    const { id } = req.params;
    const { activo, nombre, inicio, fin} = req.body;

    const result = await pool.query(
        'UPDATE "contenedores" SET "activo" = $1, nombre = $2, inicio = $3, fin = $4, "creationUpdate" = CURRENT_DATE WHERE id = $5 RETURNING *',
        [activo, nombre, inicio, fin, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE CONTENEDORES



///////////// CONTROLADORES PARA TABLA DE COSTOS DE ENVIO 
//Mostrar los estatus
const getAllCostosEnvios = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "costosEnvio" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getCostosEnvios = async (req, res, next) =>{
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "costosEnvio" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

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
const createCostosEnvios = async (req, res, next) =>{
    const {activo, nombre, estado, global, contenedor, costo} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "costosEnvio" (activo, nombre, estado, global, contenedor, costo, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4,, $5, $6, '0', '0', NOW() , NOW() ) RETURNING *`,
        [activo, nombre, estado, global, contenedor, costo]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableCostosEnvios = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "costosEnvio" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateCostosEnvios = async (req, res, next) =>{
    const { id } = req.params;
    const { activo, nombre, estado, global, contenedor, costo} = req.body;

    const result = await pool.query(
        'UPDATE "costosEnvio" SET "activo" = $1, nombre = $2, estado = $3, global = $4, contenedor = $5, costo = $6, "creationUpdate" = CURRENT_DATE WHERE id = $7 RETURNING *',
        [activo, nombre, estado, global, contenedor, costo, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE COSTOS DE ENVIOS



///////////// CONTROLADORES PARA TABLA DE ALMACENES
//Mostrar los estatus
const getAllAlmacenes = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "almacenSucursal" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getAlmacenes = async (req, res, next) =>{
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "almacenSucursal" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

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
const createAlmacenes = async (req, res, next) =>{
    const {nombre, tipo} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "almacenSucursal" (nombre, tipo, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, '0', '0', NOW() , NOW() ) RETURNING *`,
        [nombre, tipo]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableAlmacenes = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "almacenSucursal" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateAlmacenes = async (req, res, next) =>{
    const { id } = req.params;
    const { nombre, tipo} = req.body;

    const result = await pool.query(
        'UPDATE "almacenSucursal" SET "nombre" = $1, tipo = $2, "creationUpdate" = CURRENT_DATE WHERE id = $3 RETURNING *',
        [nombre, tipo, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE ALMACENES



///////////// CONTROLADORES PARA TABLA DE GASTOS DE ENVIOS
//Mostrar los estatus
const getAllGastosEnvios = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "tiposEnvioGastosEnvio" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getGastosEnvios = async (req, res, next) =>{
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "tiposEnvioGastosEnvio" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

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
const createGastosEnvios = async (req, res, next) =>{
    const {activo, costo1, costo2, costo3} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "tiposEnvioGastosEnvio" (activo, costo1, costo2, costo3, tipoEnvio, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, '0', '0', NOW() , NOW() ) RETURNING *`,
        [activo, costo1, costo2, costo3]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableGastosEnvios = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "tiposEnvioGastosEnvio" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateGastosEnvios = async (req, res, next) =>{
    const { id } = req.params;
    const { activo, costo1, costo2, costo3} = req.body;

    const result = await pool.query(
        'UPDATE "tiposEnvioGastosEnvio" SET "activo" = $1, costo1 = $2, costo2 = $3, costo3 = $4, "tipoEnvio" = $5, "creationUpdate" = CURRENT_DATE WHERE id = $6 RETURNING *',
        [activo, costo1, costo2, costo3, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE GASTOS DE ENVIOS




module.exports = {

    getAllContenedores, getContenedores, createContenedores, disableContenedores, updateContenedores,
    getAllCostosEnvios, getCostosEnvios, createCostosEnvios, disableCostosEnvios, updateCostosEnvios,
    getAllAlmacenes, getAlmacenes, createAlmacenes, disableAlmacenes, updateAlmacenes,
    getAllGastosEnvios, getGastosEnvios, createGastosEnvios, disableGastosEnvios, updateGastosEnvios,

}