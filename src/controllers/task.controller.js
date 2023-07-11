const pool = require('../database')



///////////////////////////////////////////////  MICROSERVICIO DE COMPRAS  //////////////////////////////////////////////////////

/////////////// CONTROLADORES PARA TABLA DE NUEVA ORDEN DE COMPRA FOLIOS DE SURTIDO 
//Mostrar los folios
const getAllOrcFoliosSur = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "nuevaOrdenCompraFoliosSurtido"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getOrcFoliosSur = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "nuevaOrdenCompraFoliosSurtido" WHERE id = $1', [id]);

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
    const { id , fecha, almacen, producto, cantidad, isUpdate, isDelete, creationDate, creationUpdate } = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "nuevaOrdenCompraFoliosSurtido" (id, fecha, almacen, producto, cantidad, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [id, fecha, almacen, producto, cantidad, isUpdate, isDelete, creationDate, creationUpdate]
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

    const result = await pool.query('DELETE FROM "nuevaOrdenCompraFoliosSurtido" WHERE id = $1', [id]);

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
    const { fecha, almacen, producto, cantidad, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "nuevaOrdenCompraFoliosSurtido" SET fecha = $1, almacen = $2, producto = $3, cantidad = $4, "isUpdate"= $5, "isDelete" = $6, "creationDate" = $7, "creationUpdate" = $8 WHERE id = $9 RETURNING *',
        [fecha, almacen, producto, cantidad, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
///////////////////// FIN DE CONTROLADORES PARA TABLA DE NUEVA ORDEN DE COMPRA FOLIOS DE SURTIDO


////////////////////////// CONTROLADORES PARA TABLA DE NUEVA ORDEN DE COMPRA - ARCHIVOS ADJUNTOS 
//Mostrar los folios
const getAllOrcArchvivosAdj = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "nuevasOrdenesCompraArchivosAdjuntos"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getOrcArchvivosAdj = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "nuevasOrdenesCompraArchivosAdjuntos" WHERE id = $1', [id]);

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
const createOrcArchvivosAdj = async (req, res, next) =>{
    const { id , numero, archivo, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "nuevasOrdenesCompraArchivosAdjuntos" (id, numero, archivo,"isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [id, numero, archivo, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar un estatus
const deleteOrcArchvivosAdj = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query('DELETE FROM "nuevasOrdenesCompraArchivosAdjuntos" WHERE id = $1', [id]);

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
const updateOrcArchvivosAdj = async (req, res, next) =>{
    const { id } = req.params;
    const { numero, archivo, isUpdate, isDelete, creationDate, creationUpdate } = req.body;

    const result = await pool.query(
        'UPDATE "nuevasOrdenesCompraArchivosAdjuntos" SET numero = $1, archivo = $2, "isUpdate" = $3, "isDelete" = $4, "creationDate" = $5, "creationUpdate" = $6 WHERE id = $7 RETURNING *',
        [numero, archivo, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE NUEVA ORDEN DE COMPRA - ARCHIVOS ADJUNTOS




///////////////////////////////////// CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - ARCHIVOS ADJUNTOS 
//Mostrar los folios
const getAllOrdenArchivosAdjuntos = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "ordenCompraArchivosAdjuntos"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getOrdenArchvivosAdj = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "ordenCompraArchivosAdjuntos" WHERE id = $1', [id]);

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
const createOrdenArchivosAdjuntos = async (req, res, next) =>{
    const { id , numero, archivo, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "ordenCompraArchivosAdjuntos" (id, numero, archivo, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [id, numero, archivo, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar un estatus
const deleteOrdenArchivosAdjuntos = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query('DELETE FROM "ordenCompraArchivosAdjuntos" WHERE id = $1', [id]);

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
const updateOrdenArchivosAdjuntos = async (req, res, next) =>{
    const { id } = req.params;
    const { numero, archivo, isUpdate, isDelete, creationDate, creationUpdate } = req.body;

    const result = await pool.query(
        'UPDATE "ordenCompraArchivosAdjuntos" SET numero = $1, archivo = $2, "isUpdate" = $3, "isDelete" = $4, "creationDate" = $5, "creationUpdate" = $6 WHERE id = $7 RETURNING *',
        [numero, archivo, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - ARCHIVOS ADJUNTOS




///////////////////////////// CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - FOLIOS DE SURTIDO 
//Mostrar los folios
const getAllOrdenFoliosSurtidos = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "ordenCompraFoliosSurtido"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getOrdenFoliosSurtidos = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "ordenCompraFoliosSurtido" WHERE id = $1', [id]);

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
const createOrdenFoliosSurtidos = async (req, res, next) =>{
    const { id , numero, fecha, almacen, producto, cantidad, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "ordenCompraFoliosSurtido" (id, numero, fecha, almacen, producto, cantidad, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
        [id, numero, fecha, almacen, producto, cantidad, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar un estatus
const deleteOrdenFoliosSurtidos = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query('DELETE FROM "ordenCompraFoliosSurtido" WHERE id = $1', [id]);

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
const updateOrdenFoliosSurtidos = async (req, res, next) =>{
    const { id } = req.params;
    const { fecha, numero, almacen, producto, cantidad, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "ordenCompraFoliosSurtido" SET fecha = $1, numero = $2, almacen = $3, producto = $4, cantidad = $5, "isUpdate" = $6, "isDelete" = $7, "creationDate" = $8, "creationUpdate" = $9 WHERE id = $10 RETURNING *',
        [fecha, numero, almacen, producto, cantidad, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - FOLIOS DE SURTIDO



/////////////////////////// CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - LISTADO DE ENTRADAS 
//Mostrar los folios
const getAllOrdenListadoEntrada = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "ordenesCompraListadoEntradas"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getOrdenListadoEntrada = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "ordenesCompraListadoEntradas" WHERE id = $1', [id]);

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
const createOrdenListadoEntrada = async (req, res, next) =>{
    const { id , numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "ordenesCompraListadoEntradas" (id, numero, "fechaRegistrada", "fechaCompra", "fechaEntrega", provedor, vendedor, referencia, estatus, total, productos, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *',
        [id, numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar un estatus
const deleteOrdenListadoEntrada = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query('DELETE FROM "ordenesCompraListadoEntradas" WHERE id = $1', [id]);

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
const updateOrdenListadoEntrada = async (req, res, next) =>{
    const { id } = req.params;
    const { numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "ordenesCompraListadoEntradas" SET numero = $1, fechaRegistrada = $2, fechaCompra = $3, fechaEntrega = $4, provedor = $5, vendedor = $6, referencia= $7, estatus = $8, total = $9, productos = $10, "isUpdate" = $11, "isDelete" = $12, "creationDate" = $13, "creationUpdate" = $14 WHERE id = $15 RETURNING *',
        [numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos, isUpdate, isDelete, creationDate, creationUpdate, id]
    );sur

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
///////////////////////////// FIN DE CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - LISTADO DE ENTRADAS





//////////////// CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - PRODUCTOS EN LA ORDEN DE COMPRA 
//Mostrar los folios
const getAllProductosOrdenCompra = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "productosLaOrdenCompra"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getProductosOrdenCompra = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "productosLaOrdenCompra" WHERE id = $1', [id]);

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
const createProductosOrdenCompra = async (req, res, next) =>{
    const { id , imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "productosLaOrdenCompra" (id, imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
        [id, imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar un estatus
const deleteProductosOrdenCompra = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query('DELETE FROM "productosLaOrdenCompra" WHERE id = $1', [id]);

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
const updateProductosOrdenCompra = async (req, res, next) =>{
    const { id } = req.params;
    const {imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "productosLaOrdenCompra" SET imagen = $1, codigo = $2, producto = $3, cantidad = $4, costo = $5, descuento = $6, total = $7, subtotal = $8, impuestos = $9,  "isUpdate" = $10, "isDelete" = $11, "creationDate" = $12, "creationUpdate" = $13 WHERE id = $14 RETURNING *',
        [imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////// FIN DE CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - PRODUCTOS EN LA ORDEN DE COMPRA 



/////////////////////////////////////// CONTROLADORES PARA TABLA DE LISTADO DE PRODUCTOS 
//Mostrar los productos
const getAllListadoProduct = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "listadoProductos"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getListadoProduct = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "listadoProductos" WHERE id = $1', [id]);

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
const createListadoProduct = async (req, res, next) =>{
    const { imagen , id, codigoFabricante, codigoEmpresa, nombre, marca, categoria, codigoSat, actualizado, activo, web, pos, venta, precio, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "listadoProductos" (imagen, id, "codigoFabricante", "codigoEmpresa", nombre, marca, categoria, "codigoSat", actualizado, activo, web, pos, venta, precio, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *',
        [imagen, id, codigoFabricante, codigoEmpresa, nombre, marca, categoria, codigoSat, actualizado, activo, web, pos, venta, precio, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar un estatus
const deleteListadoProduct = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query('DELETE FROM "listadoProductos" WHERE id = $1', [id]);

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo eliminar not found"
    });

    return res.sendStatus(204);
    } catch (error){
        next(error);
    }
};

//actualizar un folio para la orden de compra
const updateListadoProduct = async (req, res, next) =>{
    const { id } = req.params;
    const {codigoFabricante, codigoEmpresa, nombre, marca, categoria, codigoSat, actualizado, precio } = req.body;

    const result = await pool.query(
        'UPDATE "listadoProductos" SET "codigoFabricante" = $1, "codigoEmpresa" = $2, nombre = $3, marca = $4, categoria = $5, "codigoSat"= $6, actualizado = $7, precio = $8 WHERE id = $9 RETURNING *',
        [codigoFabricante, codigoEmpresa, nombre, marca, categoria, codigoSat, actualizado, precio, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
//////////////// FIN DE CONTROLADORES PARA TABLA DE LISTADO DE PRODUCTOS



/////////////////////////////////////// CONTROLADORES PARA TABLA DE PRODUCTOS 
//Mostrar los productos
const getAllProductos = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "productos"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getProducto = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "productos" WHERE id = $1', [id]);

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
const createProducto = async (req, res, next) =>{
    const { id , imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "productos" (id, imagen, "codigoEmpresa", "codigoFabricante", nombre, marca, categoria, existencia, "backOrder", cantidad, precio, descuento, total, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) RETURNING *',
        [id, imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar un estatus
const deleteProducto = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query('DELETE FROM "productos" WHERE id = $1', [id]);

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
const updateProducto = async (req, res, next) =>{
    const { id } = req.params;
    const { imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "productos" SET imagen = $1, "codigoEmpresa" = $2, "codigoFabricante" = $3, nombre = $4, marca = $5, categoria = $6, existencia= $7, "backOrder" = $8, cantidad = $9, precio = $10, descuento = $11, total = $12, "isUpdate" = $13, "isDelete" = $14, "creationDate" = $15, "creationUpdate" = $16 WHERE id = $17 RETURNING *',
        [imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
//////////////////// FIN DE CONTROLADORES PARA TABLA DE PRODUCTOS


/////////////////////////////////////// CONTROLADORES PARA TABLA DE LISTADO DE PRODUCTOS EN DESCUENTO 
//Mostrar los productos
const getAllListadoProductDesc = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "listadoProductosDescuento"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getListadoProductDesc = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "listadoProductosDescuento" WHERE id = $1', [id]);

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
const createListadoProductDesc = async (req, res, next) =>{
    const { id, imagen , codigoEmpresa, nombre, desde, hasta, precioBase, descuento, precio, activo, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "listadoProductosDescuento" (id, imagen, "codigoEmpresa", nombre, desde, hasta, "precioBase", descuento, precio, activo, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
        [id, imagen, codigoEmpresa, nombre, desde, hasta, precioBase, descuento, precio, activo, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar un estatus
const deleteListadoProductDesc = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query('DELETE FROM "listadoProductosDescuento" WHERE id = $1', [id]);

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo eliminar not found"
    });

    return res.sendStatus(204);
    } catch (error){
        next(error);
    }
};

//actualizar un folio para la orden de compra
const updateListadoProductDesc = async (req, res, next) =>{
    const { id } = req.params;
    const {imagen , codigoEmpresa, nombre, desde, hasta, precioBase, descuento, precio, activo, isUpdate, isDelete, creationDate, creationUpdate } = req.body;

    const result = await pool.query(
        'UPDATE "listadoProductosDescuento" SET imagen = $1, "codigoEmpresa" = $2, nombre = $3, desde = $4, hasta = $5, "precioBase"= $6, descuento = $7, precio = $8, activo = $9, "isUpdate" = $10, "isDelete" = $11, "creationDate" = $12, "creationUpdate" = $13 WHERE id = $14 RETURNING *',
        [imagen , codigoEmpresa, nombre, desde, hasta, precioBase, descuento, precio, activo, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
//////////////// FIN DE CONTROLADORES PARA TABLA DE LISTADO DE PRODUCTOS




///////////////////////////////////////////// FIN DE MICROSERVICIO DE COMPRAS  ////////////////////////////////////////////////////




////////////////////////////////////////////////  MICROSERVICIO DE VENTAS  ///////////////////////////////////////////////////////

///////////// CONTROLADORES PARA TABLA DE COTIZACIONES 
//Mostrar los estatus
const getAllCotizaciones = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM  "cotizaciones"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getCotizaciones = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "cotizaciones" WHERE id = $1', [id]);

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
const createCotizaciones = async (req, res, next) =>{
    const {id, folio, fecha, pedido, cliente, vendedor, recurrenciaa, origen, monto, estatus, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "cotizaciones" (id, folio, fecha, pedido, cliente, vendedor, recurrenciaa, origen, monto, estatus, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
        [id, folio, fecha, pedido, cliente, vendedor, recurrenciaa, origen, monto, estatus, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar un estatus
const deleteCotizaciones = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query('DELETE FROM "cotizaciones"  WHERE id = $1', [id]);

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
const updateCotizaciones = async (req, res, next) =>{
    const { id } = req.params;
    const {folio, fecha, pedido, cliente, vendedor, recurrenciaa, origen, monto, estatus, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "cotizaciones" SET folio = $1, fecha = $2, pedido = $3, cliente = $4, vendedor = $5, recurrenciaa = $6, origen = $7, monto = $8, estatus = $9, "isUpdate" = $10, "isDelete" = $11, "creationDate" = $12, "creationUpdate" = $13 WHERE id = $14 RETURNING *',
        [folio, fecha, pedido, cliente, vendedor, recurrenciaa, origen, monto, estatus, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE COTIZACIONES


///////////// CONTROLADORES PARA TABLA DE PEDIDO 
//Mostrar los estatus
const getAllPedido = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM  "pedido"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getPedido = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "pedido" WHERE idpedido = $1', [id]);

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
const createPedido = async (req, res, next) =>{
    const {idpedido, datosPedido, datosEnvio, informacionCliente, productosPedido, formaPago, comentarios, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "pedido" (idpedido, "datosPedido", "datosEnvio", "informacionCliente", "productosPedido", "formaPago", comentarios, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
        [idpedido, datosPedido, datosEnvio, informacionCliente, productosPedido, formaPago, comentarios, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar un estatus
const deletePedido = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query('DELETE FROM "pedido"  WHERE idpedido = $1', [id]);

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
const updatePedido = async (req, res, next) =>{
    const { idpedido } = req.params;
    const { datosPedido, datosEnvio, informacionCliente, productosPedido, formaPago, comentarios, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "pedido" SET "datosPedido" = $1, "datosEnvio" = $2, "informacionCliente" = $3, "productosPedido" = $4, "formaPago" = $5, comentarios = $6, "isUpdate" = $7, "isDelete" = $8, "creationDate" = $9, "creationUpdate" = $10 WHERE idpedido = $11 RETURNING *',
        [datosPedido, datosEnvio, informacionCliente, productosPedido, formaPago, comentarios, isUpdate, isDelete, creationDate, creationUpdate, idpedido]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE PEDIDO


///////////// CONTROLADORES PARA TABLA DE PEDIDOS
//Mostrar los estatus
const getAllPedidos = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM  "pedidos"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getPedidos = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "pedidos" WHERE id = $1', [id]);

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
const createPedidos = async (req, res, next) =>{
    const {id, folio, fecha, cotizacion, numeroCliente, cliente, razonSocial, rfc, monto, saldo, estatus, factura, surtido, poductos, isUpdate, isDelete, creationDate, creationUpdate } = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "pedidos" (id, folio, fecha, cotizacion, "numeroCliente", cliente, "razonSocial", rfc, monto, saldo, estatus, factura, surtido, poductos, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING *',
        [id, folio, fecha, cotizacion, numeroCliente, cliente, razonSocial, rfc, monto, saldo, estatus, factura, surtido, poductos, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar un estatus
const deletePedidos = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query('DELETE FROM "pedidos"  WHERE id = $1', [id]);

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
const updatePedidos = async (req, res, next) =>{
    const { id } = req.params;
    const { folio, fecha, cotizacion, numeroCliente, cliente, razonSocial, rfc, monto, saldo, estatus, factura, surtido, poductos, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "pedidos" SET folio = $1, fecha = $2, cotizacion = $3, "numeroCliente" = $4, cliente = $5, "razonSocial" = $6, rfc = $7, monto = $8, saldo = $9, estatus = $10, factura = $11, surtido = $12, poductos = $13, "isUpdate" = $14, "isDelete" = $15, "creationDate" = $16, "creationUpdate" = $17 WHERE id = $18 RETURNING *',
        [folio, fecha, cotizacion, numeroCliente, cliente, razonSocial, rfc, monto, saldo, estatus, factura, surtido, poductos, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE PEDIDO


///////////// CONTROLADORES PARA TABLA DE DETALLES PEDIDO 
//Mostrar los estatus
const getAllDetallePedido = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM  "detallePedido"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getDetallePedido = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "detallePedido" WHERE id = $1', [id]);

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
const createDetallePedido = async (req, res, next) =>{
    const {id, datosPedido, backorder, datosEnvio, informacionCliente, comentariosPedido, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "detallePedido" (id, "datosPedido", backorder, "datosEnvio", "informacionCliente", "comentariosPedido", "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
        [id, datosPedido, backorder, datosEnvio, informacionCliente, comentariosPedido, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar un estatus
const deleteDetallePedido = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query('DELETE FROM "detallePedido"  WHERE id = $1', [id]);

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
const updateDetallePedido = async (req, res, next) =>{
    const { id } = req.params;
    const {datosPedido, backorder, datosEnvio, informacionCliente, comentariosPedido, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "detallePedido" SET "datosPedido" = $1, backorder = $2, "datosEnvio" = $3, "informacionCliente" = $4, "comentariosPedido" = $5, "isUpdate" = $6, "isDelete" = $7, "creationDate" = $8, "creationUpdate" = $9 WHERE id = $10 RETURNING *',
        [datosPedido, backorder, datosEnvio, informacionCliente, comentariosPedido, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE DETALLES PEDIDO


///////////// CONTROLADORES PARA TABLA DE VER PEDIDO 
//Mostrar los estatus
const getAllFormasPagoPedido = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM  "formasPagoPedido"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getFormasPagoPedido = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "formasPagoPedido" WHERE id = $1', [id]);

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
const createFormasPagoPedido = async (req, res, next) =>{
    const {id, fecha, formaPago, cantidadPago, total, faltaPagar, tipoCambio, tc, cantidadPagada, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "formasPagoPedido" (id, fecha, "formaPago", "cantidadPago", total, "faltaPagar", "tipoCambio", tc, "cantidadPagada", "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
        [id, fecha, formaPago, cantidadPago, total, faltaPagar, tipoCambio, tc, cantidadPagada, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar un estatus
const deleteFormasPagoPedido = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query('DELETE FROM "formasPagoPedido"  WHERE id = $1', [id]);

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
const updateFormasPagoPedido = async (req, res, next) =>{
    const { id } = req.params;
    const {fecha, formaPago, cantidadPago, total, faltaPagar, tipoCambio, tc, cantidadPagada, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "formasPagoPedido" SET fecha = $1, "formaPago" = $2, "cantidadPago" = $3, total = $4, "faltaPagar" = $5, "tipoCambio" = $6, tc = $7, "cantidadPagada" = $8 "isUpdate" = $9, "isDelete" = $10, "creationDate" = $11, "creationUpdate" = $12 WHERE id = $13 RETURNING *',
        [fecha, formaPago, cantidadPago, total, faltaPagar, tipoCambio, tc, cantidadPagada, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE VER PEDIDO


///////////// CONTROLADORES PARA TABLA DE VER PEDIDO 
//Mostrar los estatus
const getAllVerPedido = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM  "verPedido"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getVerPedido = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "verPedido" WHERE id = $1', [id]);

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
const createVerPedido = async (req, res, next) =>{
    const {id, datosPedido, datosEnvio, informacionCliente, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "verPedido" (id, "datosPedido", "datosEnvio", "informacionCliente", "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [id, datosPedido, datosEnvio, informacionCliente, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar un estatus
const deleteVerPedido = async (req, res, next) =>{
    const { id } = req.params;
    
    try {

    const result = await pool.query('DELETE FROM "verPedido"  WHERE id = $1', [id]);

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
const updateVerPedido = async (req, res, next) =>{
    const { id } = req.params;
    const {datosPedido, datosEnvio, informacionCliente, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "verPedido" SET "datosPedido" = $1, "datosEnvio" = $2, "informacionCliente" = $3, "isUpdate" = $4, "isDelete" = $5, "creationDate" = $6, "creationUpdate" = $7 WHERE id = $8 RETURNING *',
        [datosPedido, datosEnvio, informacionCliente, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE VER PEDIDO


////////////////////////////////////////////// FIN DE MICROSERVICIO DE VENTAS  ///////////////////////////////////////////////////



////////////////////////////////////////////////  MICROSERVICIO DE ALMACEN  ///////////////////////////////////////////////////////



///////////////////////////////////////////////  FIN DE MICROSERVICIO DE ALMACEN  ///////////////////////////////////////////////////



/////////////////////////////////////////////////  MICROSERVICIO DE ADMINISTRACION  //////////////////////////////////////////////////



///////////////////////////////////////////////  FIN DE MICROSERVICIO DE ADMINISTRACION  ////////////////////////////////////////////////




/////////////////////////////////////////////////   MICROSERVICIO DE MARKETING   ///////////////////////////////////////////////////////




////////////////////////////////////////////////   FIN DE MICROSERVICIO DE MARKETING   ////////////////////////////////////////////////







///////////////////////////////////////// CONTROLADORES SIN UBICAR //////////////////////////////////////////////


///////////// CONTROLADORES PARA TABLA DE ESTATUS 
//Mostrar los estatus
const getAllStatus = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM  "estatus"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getStatus = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "estatus" WHERE id = $1', [id]);

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
    const { id , estatus, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "estatus" (id, estatus, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [id, estatus, isUpdate, isDelete, creationDate, creationUpdate]
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

    const result = await pool.query('DELETE FROM "estatus"  WHERE id = $1', [id]);

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
    const { estatus, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "estatus" SET "estatus" = $1, "isUpdate" = $2, "isDelete" = $3, "creationDate" = $4, "creationUpdate" = $5, WHERE id = $6 RETURNING *',
        [estatus, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE ESTATUS


///////////////////////////////////////// FIN DE LOS CONTROLADORES SIN UBICAR //////////////////////////////////////////////






/*AQUI DE IGUAL MANERA LOS NOMBRES DE LOS CONTROLADORES DE CADA TABLA ESTARAN ACOMODADOS POR MICROSERVICIOS
POR LO CUAL SE TENDRA QUE RESPETAR EL ORDEN MENCONADO DE CADA UNO DEPENDIENDO AL MICROSERVICIO QUE PERTENEZCA CADA TABLA DE 
LA BASE DE DATOS 
CADA RENGLON REPRESENTA A LOS CONTROLADORES DE 1 SOLA TABLA POR LO CUAL SE MANEJARA 1 RENGLON POR TABLA*/

module.exports = {

    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO COMPRAS ////////////////////////////////////////////
    getAllOrcFoliosSur, getOrcFoliosSur, createOrcFoliosSur, deleteOrcFoliosSur, updateOrcFoliosSur,
    getAllOrcArchvivosAdj,getOrcArchvivosAdj, createOrcArchvivosAdj, deleteOrcArchvivosAdj,updateOrcArchvivosAdj,
    getAllOrdenArchivosAdjuntos,getOrdenArchvivosAdj, createOrdenArchivosAdjuntos, deleteOrdenArchivosAdjuntos, updateOrdenArchivosAdjuntos,
    getAllOrdenFoliosSurtidos,getOrdenFoliosSurtidos,createOrdenFoliosSurtidos, deleteOrdenFoliosSurtidos, updateOrdenFoliosSurtidos,
    getAllOrdenListadoEntrada, getOrdenListadoEntrada, createOrdenListadoEntrada, deleteOrdenListadoEntrada, updateOrdenListadoEntrada,
    getAllListadoProduct,getListadoProduct,createListadoProduct,deleteListadoProduct,updateListadoProduct,
    getAllProductos,getProducto,createProducto,deleteProducto,updateProducto,
    getAllProductosOrdenCompra, getProductosOrdenCompra, createProductosOrdenCompra, deleteProductosOrdenCompra, updateProductosOrdenCompra,
    getAllListadoProductDesc,getListadoProductDesc, createListadoProductDesc, deleteListadoProductDesc, updateListadoProductDesc,

    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO COMPRAS ////////////////////////////////////////////



    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO VENTAS ////////////////////////////////////////////
    getAllCotizaciones, getCotizaciones, createCotizaciones, deleteCotizaciones, updateCotizaciones,
    getAllPedido, getPedido, createPedido, deletePedido, updatePedido,
    getAllPedidos, getPedidos, createPedidos, deletePedidos, updatePedidos,
    getAllDetallePedido, getDetallePedido, createDetallePedido, deleteDetallePedido, updateDetallePedido,
    getAllVerPedido, getVerPedido, createVerPedido, deleteVerPedido, updateVerPedido,
    getAllFormasPagoPedido, getFormasPagoPedido, createFormasPagoPedido, deleteFormasPagoPedido, updateFormasPagoPedido,
    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO VENTAS ////////////////////////////////////////////



    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO ADMINISTRACION ////////////////////////////////////////////

    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO ADMINISTRACION ////////////////////////////////////////////



    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO ALMACEN ////////////////////////////////////////////

    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO ALMACEN ////////////////////////////////////////////




    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO MARKETING ////////////////////////////////////////////

    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO MARKETING ////////////////////////////////////////////



    ///////////////////////////////////////////// CONTROLADORES SIN UBICAR  ////////////////////////////////////////////
    getAllStatus, getStatus, createStatus, deleteStatus, updateStatus, 
    
}