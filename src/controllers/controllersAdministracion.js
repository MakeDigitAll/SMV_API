const pool = require('../database')


/////////////////////////////////////////////////////////NOTAS DE CREDITO
const getAllNotasCredito = async (req, res, next)=> {
    console.log("prueba")
    try{
    const allTasks = await pool.query(`SELECT * FROM public."notasCredito" `);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message); 
    }
}
//mostrar un estatus
const getNotasCredito = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "notasCredito" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

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
const createNotasCredito = async (req, res, next) =>{
    const {serie, folio, fecha, clientes, detalles, formasPago, relacion, tipo, motivo, sucursal, impuesto, iva, total } = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "notasCredito" ( serie, folio, fecha, clientes, detalles, "formasPago", relacion, tipo, motivo, sucursal, impuesto, iva, total, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, '0', '0', NOW() , NOW() ) RETURNING *`,
        [serie, folio, fecha, clientes, detalles, formasPago, relacion, tipo, motivo, sucursal, impuesto, iva, total]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableNotasCredito = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "notasCredito" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateNotasCredito = async (req, res, next) =>{
    const { id } = req.params;
    const { serie, folio, fecha, clientes, detalles, formasPago, relacion, tipo, motivo, sucursal, impuesto, iva, total} = req.body;

    const result = await pool.query(
        'UPDATE "notasCredito" SET "nombre" = $1, tipo = $2, "creationUpdate" = CURRENT_DATE WHERE id = $3 RETURNING *',
        [serie, folio, fecha, clientes, detalles, formasPago, relacion, tipo, motivo, sucursal, impuesto, iva, total, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE NOTAS DE CREDITO



/////////////////////////////////////////////////////////NOTAS DE CREDITO
const getAllEstadosCuenta = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM public."estadosCuenta" `);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message); 
    }
}
//mostrar un estatus
const getEstadosCuenta = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "estadosCuenta" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

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
const createEstadosCuenta = async (req, res, next) =>{
    const {nombre, tipo} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "estadosCuenta" (nombre, tipo, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, '0', '0', NOW() , NOW() ) RETURNING *`,
        [nombre, tipo]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableEstadosCuenta = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "estadosCuenta" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateEstadosCuenta = async (req, res, next) =>{
    const { id } = req.params;
    const { nombre, tipo} = req.body;

    const result = await pool.query(
        'UPDATE "estadosCuenta" SET "nombre" = $1, tipo = $2, "creationUpdate" = CURRENT_DATE WHERE id = $3 RETURNING *',
        [nombre, tipo, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE NOTAS DE CREDITO



/////////////////////////////////////////////////////////MARGEN DE VENTAS
const getAllMargenVentas = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM public."margenVentasReporteUtilidadesVentas" `);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message); 
    }
}
//mostrar un estatus
const getMargenVentas = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "margenVentasReporteUtilidadesVentas" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

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
const createMargenVentas = async (req, res, next) =>{
    const {nombre, tipo} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "margenVentasReporteUtilidadesVentas" (nombre, tipo, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, '0', '0', NOW() , NOW() ) RETURNING *`,
        [nombre, tipo]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableMargenVentas = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "margenVentasReporteUtilidadesVentas" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateMargenVentas = async (req, res, next) =>{
    const { id } = req.params;
    const { nombre, tipo} = req.body;

    const result = await pool.query(
        'UPDATE "margenVentasReporteUtilidadesVentas" SET "nombre" = $1, tipo = $2, "creationUpdate" = CURRENT_DATE WHERE id = $3 RETURNING *',
        [nombre, tipo, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE MARGEN DE VENTAS



/////////////////////////////////////////////////////////REPORTE DE VENTAS
const getAllReporteVentas = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM public."reporteVentas" `);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message); 
    }
}
//mostrar un estatus
const getReporteVentas = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "reporteVentas" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

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
const createReporteVentas = async (req, res, next) =>{
    const {nombre, tipo} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "reporteVentas" (nombre, tipo, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, '0', '0', NOW() , NOW() ) RETURNING *`,
        [nombre, tipo]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableReporteVentas = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "reporteVentas" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateReporteVentas = async (req, res, next) =>{
    const { id } = req.params;
    const { nombre, tipo} = req.body;

    const result = await pool.query(
        'UPDATE "reporteVentas" SET "nombre" = $1, tipo = $2, "creationUpdate" = CURRENT_DATE WHERE id = $3 RETURNING *',
        [nombre, tipo, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE REPORTE DE VENTAS



///////////////////////////////////////////////////////// COMISIONES
const getAllComisiones = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM public."comisiones" `);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message); 
    }
}
//mostrar un estatus
const getComisiones = async (req, res, next) =>{
    try {
        const { id } = req.params;
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
    const {nombre, tipo} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "comisiones" (nombre, tipo, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, '0', '0', NOW() , NOW() ) RETURNING *`,
        [nombre, tipo]
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
        [ id]
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
    const { nombre, tipo} = req.body;

    const result = await pool.query(
        'UPDATE "comisiones" SET "nombre" = $1, tipo = $2, "creationUpdate" = CURRENT_DATE WHERE id = $3 RETURNING *',
        [nombre, tipo, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE COMISIONES


module.exports = {

    getAllNotasCredito, getNotasCredito, createNotasCredito, disableNotasCredito, updateNotasCredito,
    getAllEstadosCuenta, getEstadosCuenta, createEstadosCuenta, disableEstadosCuenta, updateEstadosCuenta,
    getAllMargenVentas, getMargenVentas, createMargenVentas, disableMargenVentas, updateMargenVentas,
    getAllReporteVentas, getReporteVentas, createReporteVentas, disableReporteVentas, updateReporteVentas,
    getAllComisiones, getComisiones, createComisiones, disableComisiones, updateComisiones,

}