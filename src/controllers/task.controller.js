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


//mostrar los folios surtido
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

//crear un folio surtido
const createOrcFoliosSur = async (req, res, next) =>{
    const { id , fecha, almacen, producto, cantidad } = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "nuevaOrdenCompraFoliosSurtido" (id, fecha, almacen, producto, cantidad) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [id, fecha, almacen, producto, cantidad]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//eliminar folios surtido
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
    const { fecha, almacen, producto, cantidad } = req.body;

    const result = await pool.query(
        'UPDATE "nuevaOrdenCompraFoliosSurtido" SET fecha = $1, almacen = $2, producto = $3, cantidad = $4 WHERE id = $5 RETURNING *',
        [fecha, almacen, producto, cantidad, id]
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
    const { id , numero, archivo,} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "nuevasOrdenesCompraArchivosAdjuntos" (id, numero, archivo) VALUES ($1, $2, $3) RETURNING *',
        [id, numero, archivo]
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
    const { numero, archivo } = req.body;

    const result = await pool.query(
        'UPDATE "nuevasOrdenesCompraArchivosAdjuntos" SET numero = $1, archivo = $2 WHERE id = $3 RETURNING *',
        [numero, archivo, id]
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
    const { id , numero, archivo,} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "ordenCompraArchivosAdjuntos" (id, numero, archivo) VALUES ($1, $2, $3) RETURNING *',
        [id, numero, archivo]
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
    const { numero, archivo } = req.body;

    const result = await pool.query(
        'UPDATE "ordenCompraArchivosAdjuntos" SET numero = $1, archivo = $2 WHERE id = $3 RETURNING *',
        [numero, archivo, id]
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
    const { id , numero, fecha, almacen, producto, cantidad } = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "ordenCompraFoliosSurtido" (id, numero, fecha, almacen, producto, cantidad) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [id, numero, fecha, almacen, producto, cantidad]
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
    const { fecha, numero, almacen, producto, cantidad } = req.body;

    const result = await pool.query(
        'UPDATE "ordenCompraFoliosSurtido" SET fecha = $1, numero = $2, almacen = $3, producto = $4, cantidad = $5 WHERE id = $6 RETURNING *',
        [fecha, numero, almacen, producto, cantidad, id]
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
    const { id , numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "ordenesCompraListadoEntradas" (id, numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, refetencia, estatus, total) VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
        [id, numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos]
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
    const { numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos } = req.body;

    const result = await pool.query(
        'UPDATE "ordenesCompraListadoEntradas" SET numero = $1, fechaRegistrada = $2, fechaCompra = $3, fechaEntrega = $4, provedor = $5, vendedor = $6, referencia= $7, estatus = $8, total = $9, productos = $10 WHERE id = $11 RETURNING *',
        [numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos, id]
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
    const { id , imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "productosLaOrdenCompra" (id, imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos) VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10) RETURNING *',
        [id, imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos]
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
    const {imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos } = req.body;

    const result = await pool.query(
        'UPDATE "productosLaOrdenCompra" SET imagen = $1, codigo = $2, producto = $3, cantidad = $4, costo = $5, descuento = $6, total = $7, subtotal = $8, impuestos = $9 WHERE id = $10 RETURNING *',
        [imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos, id]
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
    const { imagen , id, codigoFabricante, codigoEmpresa, nombre, marca, categoria, codigoSat, actualizado, activo, web, pos, venta, precio} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "listadoProductos" (imagen, id, "codigoFabricante", "codigoEmpresa", nombre, marca, categoria, "codigoSat", actualizado, activo, web, pos, venta, precio) VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
        [imagen, id, codigoFabricante, codigoEmpresa, nombre, marca, categoria, codigoSat, actualizado, activo, web, pos, venta, precio]
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
    const { id , imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "productos" (id, imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total) VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
        [id, imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total]
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
    const { imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total } = req.body;

    const result = await pool.query(
        'UPDATE "productos" SET imagen = $1, codigoEmpresa = $2, codigoFabricante = $3, nombre = $4, marca = $5, categoria = $6, existencia= $7, backOrder = $8, cantidad = $9, precio = $10, descuento = $11, total = $12 WHERE id = $13 RETURNING *',
        [imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
//////////////////// FIN DE CONTROLADORES PARA TABLA DE PRODUCTOS
///////////////////////////////////////////// FIN DE MICROSERVICIO DE COMPRAS  ////////////////////////////////////////////////////

///////////////////////////////////////////// MICROSERVICIO PRODUCTOS ////////////////////////////////////////////////////

////////////////////////// CONTROLADORES PARA TABLA DE Listado transferencia masiva productos transferencia 
//Mostrar Listado transferencia masiva productos transferencia 
const getAllTransMasProdTrans = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "listadoTransferenciasMasivasProductosTransferencia"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un Listado transferencia masiva productos transferencia 
const getTransMasProdTrans = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "listadoTransferenciasMasivasProductosTransferencia" WHERE id = $1', [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona :("
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un Listado transferencia masiva productos transferencia 
const createTransMasProdTrans = async (req, res, next) =>{
    const { id , codigo, imagen, nombre, cantidad,isUpdate, isDelete, creationDate, creationUpdate,} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "listadoTransferenciasMasivasProductosTransferencia" (id, codigo, imagen, nombre, cantidad, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [id, codigo, imagen, nombre, cantidad, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//disable un TransMasProdTrans
const disableTransMasProdTrans = async (req, res, next) =>{
    const { id } = req.params;
    const {isDelete}=req.body;
    

    const result = await pool.query(
        `UPDATE "listadoTransferenciasMasivasProductosTransferencia" SET "isDelete"= '1' WHERE id = $1 RETURNING *`, 
        [isDelete,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
     
};

//actualizar un Listado transferencia masiva productos transferencia 
const updateTransMasProdTrans= async (req, res, next) =>{
    const { id } = req.params;
    const { codigo, imagen, nombre, cantidad,isUpdate, isDelete, creationDate, creationUpdate } = req.body;

    const result = await pool.query(
        'UPDATE "listadoTransferenciasMasivasProductosTransferencia" SET codigo = $1, imagen = $2, nombre= $3, cantidad= $4, isUpdate= $5, isDelete= $6, creationDate= $7, creationUpdate= $8 WHERE id = $9 RETURNING *',
        [codigo, imagen, nombre, cantidad, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE Listado transferencia masiva productos transferencia 

////////////////////////// CONTROLADORES PARA TABLA DE Marcas producto 
//Mostrar Listado transferencia masiva productos transferencia 
const getAllMarcasproducto = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "marcasProducto"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un Marcas producto 
const getMarcasproducto = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "marcasProducto" WHERE id = $1', [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona :("
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear una Marca producto
const createMarcasproducto = async (req, res, next) =>{
    const { id , imagen, marca, catalogo, productos,isUpdate, isDelete, creationDate, creationUpdate,} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "marcasProducto" (id, imagen, marca, catalogo, productos,"isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [id, imagen, marca, catalogo, productos,isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//disable un Marcasproducto
const disableMarcasproducto = async (req, res, next) =>{
    const { id } = req.params;
    const {isDelete}=req.body;
    

    const result = await pool.query(
        `UPDATE "marcasProducto" SET "isDelete"= '1' WHERE id = $1 RETURNING *`, 
        [isDelete,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
     
};

//actualizar una Marca producto
const updateMarcasproducto= async (req, res, next) =>{
    const { id } = req.params;
    const { imagen, marca, catalogo, productos,isUpdate, isDelete, creationDate, creationUpdate } = req.body;

    const result = await pool.query(
        'UPDATE "marcasProducto" SET imagen = $1, marca = $2, catalogo= $3, productos= $4, isUpdate= $5, isDelete= $6, creationDate= $7, creationUpdate= $8 WHERE id = $9 RETURNING *',
        [imagen, marca, catalogo, productos, isUpdate, isDelete, creationDate, creationUpdate , id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE Marcas producto 

////////////////////////// CONTROLADORES PARA TABLA DE Productos cotizados
//Mostrar Productos cotizados
const getAllProductoscotizados = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "productosCotizados"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un Productoscotizados
const getProductoscotizados = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "productosCotizados" WHERE id = $1', [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona :("
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear una Productoscotizados
const createProductoscotizados = async (req, res, next) =>{
    const { id , imagen, codigo, nombre, marca, cantidad, inventario, precioUnitario, descuento, total,isUpdate, isDelete, creationDate, creationUpdate,} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "productosCotizados" (id, imagen, codigo, nombre, marca, cantidad, inventario, "precioUnitario", descuento, total, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
        [id, imagen, codigo, nombre, marca, cantidad, inventario, precioUnitario, descuento, total,isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//disable un Productoscotizados
const disableProductoscotizados = async (req, res, next) =>{
    const { id } = req.params;
    const {isDelete}=req.body;
    

    const result = await pool.query(
        `UPDATE "productosCotizados" SET "isDelete"= '1' WHERE id = $1 RETURNING *`, 
        [isDelete,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
     
};

//actualizar una Productoscotizados
const updateProductoscotizados= async (req, res, next) =>{
    const { id } = req.params;
    const { imagen, codigo, nombre, marca, cantidad, inventario, precioUnitario, descuento, total,isUpdate, isDelete, creationDate, creationUpdate } = req.body;

    const result = await pool.query(
        'UPDATE "productosCotizados" SET imagen = $1, codigo = $2, nombre= $3, marca= $4, cantidad= $5,inventario= $6, "precioUnitario"= $7, descuento= $8, total= $9, "isUpdate"= $10, "isDelete"= $11, "creationDate"= $12, "creationUpdate"= $13  WHERE id = $14 RETURNING *',
        [imagen, codigo, nombre, marca, cantidad, inventario, precioUnitario, descuento, total, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE Productoscotizados

////////////////////////// CONTROLADORES PARA TABLA DE Productos pedido
//Mostrar Productos pedido
const getAllProductosPedido = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "productosPedido"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un Productos pedido
const getProductosPedido = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "productosPedido" WHERE id = $1', [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona :("
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear una Productos pedido
const createProductosPedido = async (req, res, next) =>{
    const { id, imagen, codigo, nombre, cantidad, unitarioMN, descuentoMN, total, devolucion,isUpdate, isDelete, creationDate, creationUpdate,} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "productosPedido" (id, imagen, codigo, nombre, cantidad, "unitarioMN", "descuentoMN", total, devolucion,"isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
        [id, imagen, codigo, nombre, cantidad, unitarioMN, descuentoMN, total, devolucion,isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//disable un productosPedido
const disableProductosPedido = async (req, res, next) =>{
    const { id } = req.params;
    const {isDelete}=req.body;
    

    const result = await pool.query(
        `UPDATE "productosPedido" SET "isDelete"= '1' WHERE id = $1 RETURNING *`, 
        [isDelete,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
     
};

//actualizar una Productos pedido
const updateProductosPedido= async (req, res, next) =>{
    const { id } = req.params;
    const { imagen, codigo, nombre, cantidad, unitarioMN, descuentoMN, total, devolucion,isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "productosPedido" SET imagen = $1, codigo = $2, nombre= $3, cantidad= $4, "unitarioMN"= $5, "descuentoMN"= $6, total= $7, devolucion= $8,"isUpdate"= $9, "isDelete"= $10, "creationDate"= $11, "creationUpdate"= $12 WHERE id = $13 RETURNING *',
        [imagen, codigo, nombre, cantidad, unitarioMN, descuentoMN, total, devolucion, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE Productos pedido

////////////////////////// CONTROLADORES PARA TABLA DE Productos relacionados
//Mostrar Productos relacionados
const getAllProductosRelacionados = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "productosRelacionados"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un Productos relacionados
const getProductosRelacionados = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "productosRelacionados" WHERE id = $1', [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona :("
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear una Productos relacionados
const createProductosRelacionados = async (req, res, next) =>{
    const { id, imagen, codigo, nombre,isUpdate, isDelete, creationDate, creationUpdate,} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "productosRelacionados" (id, imagen, codigo, nombre, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [id, imagen, codigo, nombre,isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//disable un Productos relacionados
const disableProductosRelacionados = async (req, res, next) =>{
    const { id } = req.params;
    const {isDelete}=req.body;
    

    const result = await pool.query(
        `UPDATE "productosRelacionados" SET "isDelete"= '1' WHERE id = $1 RETURNING *`, 
        [isDelete,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
     
};

//actualizar una Productos relacionados
const updateProductosRelacionados= async (req, res, next) =>{
    const { id } = req.params;
    const { imagen, codigo, nombre,isUpdate, isDelete, creationDate, creationUpdate } = req.body;

    const result = await pool.query(
        'UPDATE "productosRelacionados" SET imagen = $1, codigo = $2, nombre= $3, "isUpdate"= $4, "isDelete"= $5, "creationDate"= $6, "creationUpdate"= $7  WHERE id = $8 RETURNING *',
        [imagen, codigo, nombre,isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE Productos relacionados

////////////////////////// CONTROLADORES PARA TABLA DE Productos surtidos pedido 
//Mostrar Productos surtidos pedido 
const getAllProductosSurtidosPedido = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "productosSurtidosPedido"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un Productos surtidos pedido
const getProductosSurtidosPedido = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "productosSurtidosPedido" WHERE id = $1', [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona :("
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear una Productos surtidos pedido 
const createProductosSurtidosPedido = async (req, res, next) =>{
    const { id, imagen, codigo, nombre, cantidad, fecha, almacen,isUpdate, isDelete, creationDate, creationUpdate,} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "productosSurtidosPedido" (id, imagen, codigo, nombre, cantidad, fecha, almacen, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7. $8, $9, $10, $11) RETURNING *',
        [id, imagen, codigo, nombre, cantidad, fecha, almacen,isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//disable un ProductosSurtidosPedido
const disableProductosSurtidosPedido = async (req, res, next) =>{
    const { id } = req.params;
    const {isDelete}=req.body;
    

    const result = await pool.query(
        `UPDATE "productosSurtidosPedido" SET "isDelete"= '1' WHERE id = $1 RETURNING *`, 
        [isDelete,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
     
};
//actualizar una Productos surtidos pedido 
const updateProductosSurtidosPedido= async (req, res, next) =>{
    const { id } = req.params;
    const { imagen, codigo, nombre, cantidad, fecha, almacen,isUpdate, isDelete, creationDate, creationUpdate } = req.body;

    const result = await pool.query(
        'UPDATE "productosSurtidosPedido" SET imagen = $1, codigo = $2, nombre= $3, cantidad= $4, fecha= $5, almacen= $6, "isUpdate"= $7, "isDelete"= $8, "creationDate"= $9, "creationUpdate"= $10 WHERE id = $11 RETURNING *',
        [imagen, codigo, nombre, cantidad, fecha, almacen, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE Productos surtidos pedido 

////////////////////////// CONTROLADORES PARA TABLA DE Productos  surtir pedido
//Mostrar Productos  surtir pedido
const getAllProductosSurtirPedido = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "productosSurtirPedido"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un Productos  surtir pedido
const getProductosSurtirPedido = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "productosSurtirPedido" WHERE id = $1', [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona :("
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear una Productos  surtir pedido
const createProductosSurtirPedido = async (req, res, next) =>{
    const { id, codigo, nombre, cantidad, faltan, surtir, disponibles, series, isUpdate, isDelete, creationDate, creationUpdate,} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "productosSurtirPedido" (id, codigo, nombre, cantidad, faltan, surtir, disponibles, series, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10. $11, $12) RETURNING *',
        [id, codigo, nombre, cantidad, faltan, surtir, disponibles, series, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//disable un ProductosSurtirPedido
const disableProductosSurtirPedido = async (req, res, next) =>{
    const { id } = req.params;
    const {isDelete}=req.body;
    

    const result = await pool.query(
        `UPDATE "productosSurtirPedido" SET "isDelete"= '1' WHERE id = $1 RETURNING *`, 
        [isDelete,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
     
};

//actualizar una Productos  surtir pedido
const updateProductosSurtirPedido= async (req, res, next) =>{
    const { id } = req.params;
    const { codigo, nombre, cantidad, faltan, surtir, disponibles, series,isUpdate, isDelete, creationDate, creationUpdate } = req.body;

    const result = await pool.query(
        'UPDATE "productosSurtirPedido" SET  codigo = $1, nombre = $2, cantidad= $3, faltan= $4, surtir= $5, disponibles= $6, series= $7, "isUpdate"= $8, "isDelete"= $9, "creationDate"= $10, "creationUpdate"= $11 WHERE id = $12 RETURNING *',
        [codigo, nombre, cantidad, faltan, surtir, disponibles, series, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE Productos  surtir pedido

////////////////////////// CONTROLADORES PARA TABLA DE Productos transferencia record por producto 
//Mostrar Productos transferencia record por producto 
const getAllProductosTransRecordProd = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "productosTransferencia"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un Productos transferencia record por producto 
const getProductosTransRecordProd = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "productosTransferencia" WHERE id = $1', [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona :("
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear una Productos transferencia record por producto 
const createProductosTransRecordProd = async (req, res, next) =>{
    const { id, codigo, imagen, nombre, cantidad, isUpdate, isDelete, creationDate, creationUpdate,} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "productosTransferencia" (id, codigo, imagen, nombre, cantidad, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [id, codigo, imagen, nombre, cantidad, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//disable un productosTransferencia
const disableProductosTransRecordProd = async (req, res, next) =>{
    const { id } = req.params;
    const {isDelete}=req.body;
    

    const result = await pool.query(
        `UPDATE "productosTransferencia" SET "isDelete"= '1' WHERE id = $1 RETURNING *`, 
        [isDelete,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
     
};

//actualizar una Productos transferencia record por producto 
const updateProductosTransRecordProd= async (req, res, next) =>{
    const { id } = req.params;
    const { codigo, imagen, nombre, cantidad,isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "productosTransferencia" SET  codigo = $1, imagen = $2, nombre= $3, cantidad= $4, "isUpdate"= $5, "isDelete"= $6, "creationDate"= $7, "creationUpdate"= $8 WHERE id = $9 RETURNING *',
        [codigo, imagen, nombre, cantidad, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE Productos transferencia record por producto 

////////////////////////// CONTROLADORES PARA TABLA DE  record por producto 
//Mostrar  record por producto 
const getAllRecordProducto = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "recordProducto"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un  record por producto 
const getRecordProducto = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "recordProducto" WHERE id = $1', [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona :("
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un record por producto 
const createRecordProducto = async (req, res, next) =>{
    const { id,  fecha, pedido, idProducto, clave, producto, cliente, vendedor, cantidad, monto, total,isUpdate, isDelete, creationDate, creationUpdate,} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "recordProducto" (id,  fecha, pedido, "idProducto", clave, producto, cliente, vendedor, cantidad, monto, total, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15 ) RETURNING *',
        [id,  fecha, pedido, idProducto, clave, producto, cliente, vendedor, cantidad, monto, total, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//disable un recordProducto
const disableRecordProducto = async (req, res, next) =>{
    const { id } = req.params;
    const {isDelete}=req.body;
    

    const result = await pool.query(
        `UPDATE "recordProducto" SET "isDelete"= '1' WHERE id = $1 RETURNING *`, 
        [isDelete,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
     
};

//actualizar un  record por producto 
const updateRecordProducto = async (req, res, next) =>{
    const { id } = req.params;
    const {  fecha, pedido, idProducto, clave, producto, cliente, vendedor, cantidad, monto, total, isUpdate, isDelete, creationDate, creationUpdate } = req.body;

    const result = await pool.query(
        'UPDATE "recordProducto" SET  fecha = $1, pedido = $2, "idProducto"= $3, clave= $4, producto= $5, cliente= $6, vendedor= $7, cantidad= $8, monto= $9, total= $10, "isUpdate"= $11, "isDelete"= $12, "creationDate"= $13, "creationUpdate"= $14 WHERE id = $15 RETURNING *',
        [ fecha, pedido, idProducto, clave, producto, cliente, vendedor, cantidad, monto, total, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE  record por producto 


///////////////////////////////////////////// FIN DE MICROSERVICIO DE PRODUCTOS  ////////////////////////////////////////////////////

////////////////////////////////////////////////  MICROSERVICIO DE VENTAS  ///////////////////////////////////////////////////////


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
    const { id , estatus } = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "estatus" (id, estatus) VALUES ($1, $2) RETURNING *',
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

    const result = await pool.query('DELETE FROM "estatus" WHERE id = $1', [id]);

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
        'UPDATE estatus SET "estatus" = $1 WHERE id = $2 RETURNING *',
        [estatus, id]
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

    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO COMPRAS ////////////////////////////////////////////



    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO VENTAS ////////////////////////////////////////////

    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO VENTAS ////////////////////////////////////////////



    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO ADMINISTRACION ////////////////////////////////////////////

    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO ADMINISTRACION ////////////////////////////////////////////
    

    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO PRODUCTOS ////////////////////////////////////////////
    getAllTransMasProdTrans,getTransMasProdTrans,createTransMasProdTrans,disableTransMasProdTrans,updateTransMasProdTrans,getAllMarcasproducto,getMarcasproducto,
    createMarcasproducto,disableMarcasproducto,updateMarcasproducto,getAllProductoscotizados,getProductoscotizados,createProductoscotizados,disableProductoscotizados,
    updateProductoscotizados,getAllProductosPedido,getProductosPedido,createProductosPedido,disableProductosPedido,updateProductosPedido,
    getAllProductosRelacionados,getProductosRelacionados,createProductosRelacionados,disableProductosRelacionados,updateProductosRelacionados,getAllProductosSurtidosPedido,
    getProductosSurtidosPedido,createProductosSurtidosPedido,disableProductosSurtidosPedido,updateProductosSurtidosPedido,getAllProductosSurtirPedido,
    getProductosSurtirPedido,createProductosSurtirPedido,disableProductosSurtirPedido,updateProductosSurtirPedido,getAllProductosTransRecordProd,getProductosTransRecordProd,
    createProductosTransRecordProd,disableProductosTransRecordProd,updateProductosTransRecordProd,getAllRecordProducto,getRecordProducto,createRecordProducto,disableRecordProducto,
    updateRecordProducto,
    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO PRODUCTOS ////////////////////////////////////////////
    


    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO ALMACEN ////////////////////////////////////////////

    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO ALMACEN ////////////////////////////////////////////




    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO MARKETING ////////////////////////////////////////////

    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO MARKETING ////////////////////////////////////////////



    ///////////////////////////////////////////// CONTROLADORES SIN UBICAR  ////////////////////////////////////////////
    getAllStatus, getStatus, createStatus, deleteStatus, updateStatus, 
    
}