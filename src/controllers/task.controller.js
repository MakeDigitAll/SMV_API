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
};//////////////////// FIN DE CONTROLADORES PARA TABLA DE PRODUCTOS

/////////////////////////////////////// CONTROLADORES PARA TABLA DE AGREGAR PRODUCTOS RELACIONADOS
//Mostrar los productos
const getAllagregarProductoRelacionado = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "agregarProductoRelacionado"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getagregarProductoRelacionado = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "agregarProductoRelacionado" WHERE id = $1', [id]);

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
const createagregarProductoRelacionado = async (req, res, next) =>{
    const { id, imagen, codigoEmpresa, nombre, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "agregarProductoRelacionado" (	id, imagen, "codigoEmpresa", nombre, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8) RETURNING *',
        [id, imagen, codigoEmpresa, nombre, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableagregarProductoRelacionado = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete } = req.body;

    const result = await pool.query(

        `UPDATE "agregarProductoRelacionado" SET "isDelete"='1' WHERE id=$1 RETURNING *`,
        [isDelete, id]
    );
    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
        
   
};

//actualizar un producto
const updateagregarProductoRelacionado = async (req, res, next) =>{
    const { id } = req.params;
    const {codigoEmpresa, nombre, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "agregarProductoRelacionado" SET "codigoEmpresa" = $1, nombre = $2, "isUpdate" = $3, "isDelete" = $4, "creationDate" = $5, "creationUpdate"= $6 WHERE id = $7 RETURNING *',
        [codigoEmpresa, nombre, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
//////////////// FIN DE CONTROLADORES PARA AGREGAR UN PRODUCTO RELACIONADO

/////////////////////////////////////// CONTROLADORES PARA TABLA DE BUSCAR PRODUCTO 
//Mostrar los productos
const getAllbuscarProducto = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "buscarProducto"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getbuscarProducto = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "buscarProducto" WHERE id = $1', [id]);

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
const createbuscarProducto = async (req, res, next) =>{
    const { id, nombre, precio, existencia, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "buscarProducto" (	"id", nombre, precio, existencia, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8) RETURNING *',
        [id, nombre, precio, existencia, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disablebuscarProducto= async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete } = req.body;

    const result = await pool.query(

        `UPDATE "buscarProducto" SET "isDelete"='1' WHERE id=$1 RETURNING *`,
        [isDelete, id]
    );
    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un producto
const updatebuscarProducto = async (req, res, next) =>{
    const { id } = req.params;
    const {nombre, precio, existencia, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "buscarProducto" SET nombre = $1, precio = $2, existencia = $3, "isUpdate" = $4, "isDelete" = $5, "creationDate"= $6, "creationUpdate"= $7 WHERE id = $8 RETURNING *',
        [nombre, precio, existencia, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
//////////////// FIN DE CONTROLADORES PARA BUSCAR PRODUCTO

/////////////////////////////////////// CONTROLADORES PARA CATEGORIAS
//Mostrar los productos
const getAllcategoria = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "categoria"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getcategoria = async (req, res, next) =>{
    try {
        const { sku } = req.params;
        const result = await pool.query('SELECT * FROM "categoria" WHERE sku = $1', [sku]);

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
const createcategoria= async (req, res, next) =>{
    const { sku, nombre, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "categoria" (	"sku", nombre, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3 ,$4, $5, $6) RETURNING *',
        [sku, nombre, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disablecategoria= async (req, res, next) =>{
    const { sku } = req.params;
    const { isDelete } = req.body;

    const result = await pool.query(

        `UPDATE "categoria" SET "isDelete"='1' WHERE sku=$1 RETURNING *`,
        [isDelete, sku]
    );
    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un producto
const updatecategoria= async (req, res, next) =>{
    const { sku } = req.params;
    const {nombre, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "categoria" SET nombre = $1, "isUpdate" = $2, "isDelete" = $3, "creationDate"= $4, "creationUpdate"= $5 WHERE sku = $6 RETURNING *',
        [nombre, isUpdate, isDelete, creationDate, creationUpdate, sku]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
//////////////// FIN DE CATEGORIAS

/////////////////////////////////////// CONTROLADORES PARA COSTOS DE PRODUCTOS
//Mostrar los productos
const getAllcostoProductos = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "costoProductos"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getcostoProductos= async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "costoProductos" WHERE id = $1', [id]);

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
const createcostoProductos = async (req, res, next) =>{
    const {id, imagen, codigoEmpresa, nombre, inventario, costoMN, totalMN, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "costoProductos" (	id, imagen, "codigoEmpresa", nombre, inventario, "costoMN", "totalMN", "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8,$9, $10, $11) RETURNING *',
        [id, imagen, codigoEmpresa, nombre, inventario, costoMN, totalMN, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disablecostoProductos= async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete } = req.body;

    const result = await pool.query(

        `UPDATE "costoProductos" SET "isDelete"='1' WHERE id=$1 RETURNING *`,
        [isDelete, id]
    );
    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un producto
const updatecostoProductos = async (req, res, next) =>{
    const { id } = req.params;
    const {codigoEmpresa, nombre, inventario, costoMN, totalMN, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "costoProductos" SET "codigoEmpresa" = $1, nombre = $2, inventario = $3, "costoMN" = $4, "totalMN"= $5, "isUpdate"= $6,"isDelete"= $7,"creationDate"= $8,"creationUpdate"= $9 WHERE id = $10 RETURNING *',
        [codigoEmpresa, nombre, inventario, costoMN, totalMN, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
//////////////// FIN DE COSTOS PRODUCTOS

/////////////////////////////////////// CONTROLADORES PARA HISTORIAL DE PRODUCTOS
//Mostrar los productos
const getAllhistorialProducto = async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "historialProducto"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const gethistorialProducto= async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "historialProducto" WHERE id = $1', [id]);

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
const createhistorialProducto = async (req, res, next) =>{
    const {id, codigoFabricante, codigoEmpresa, estufa, marca, minimo, maximo, sucursal, almacen, entradas, salidas, existencia, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "historialProducto" (	id, "codigoFabricante", "codigoEmpresa", estufa, marca, minimo, maximo, sucursal, almacen, entradas, salidas, existencia, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8,$9, $10, $11, $12, $13, $14, $15, $16) RETURNING *',
        [id, codigoFabricante, codigoEmpresa, estufa, marca, minimo, maximo, sucursal, almacen, entradas, salidas, existencia, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disablehistorialProducto= async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete } = req.body;

    const result = await pool.query(

        `UPDATE "historialProducto" SET "isDelete"='1' WHERE id=$1 RETURNING *`,
        [isDelete, id]
    );
    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un producto
const updatehistorialProducto = async (req, res, next) =>{
    const { id } = req.params;
    const {codigoFabricante, codigoEmpresa, estufa, marca, minimo, maximo, sucursal, almacen, entradas, salidas, existencia, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "historialProducto" SET "codigoFabricante"=$1, "codigoEmpresa"=$2, estufa=$3, marca=$4, minimo=$5, maximo=$6, sucursal=$7, almacen=$8, entradas=$9, salidas=$10, existencia=$11, "isUpdate"=$12, "isDelete"=$13, "creationDate"=$14, "creationUpdate"=$15 WHERE id = $16 RETURNING *',
        [codigoFabricante, codigoEmpresa, estufa, marca, minimo, maximo, sucursal, almacen, entradas, salidas, existencia, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
//////////////// FIN DE HISTORIAL PRODUCTO+


/////////////////////////////////////// CONTROLADORES PARA HISTORIAL DE PRODUCTOS ULTIMAS COMPRAS
//Mostrar los productos
const getAllhistorialProductoUltimasCompras= async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "historialProductoUltimasCompras"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const gethistorialProductoUltimasCompras= async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "historialProductoUltimasCompras" WHERE id = $1', [id]);

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
const createhistorialProductoUltimasCompras = async (req, res, next) =>{
    const {id, numeroOrdenCompra, fecha, cantidad, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "historialProductoUltimasCompras" (id, "numeroOrdenCompra", fecha, cantidad, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8) RETURNING *',
        [id, numeroOrdenCompra, fecha, cantidad, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disablehistorialProductoUltimasCompras= async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete } = req.body;

    const result = await pool.query(

        `UPDATE "historialProductoUltimasCompras" SET "isDelete"='1' WHERE id=$1 RETURNING *`,
        [isDelete, id]
    );
    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un producto
const updatehistorialProductoUltimasCompras = async (req, res, next) =>{
    const { id } = req.params;
    const {numeroOrdenCompra, fecha, cantidad, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "historialProductoUltimasCompras" SET "numeroOrdenCompra"=$1, fecha=$2, cantidad=$3, "isUpdate"=$4, "isDelete"=$5, "creationDate"=$6, "creationUpdate"=$7 WHERE id = $8 RETURNING *',
        [numeroOrdenCompra, fecha, cantidad, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
//////////////// FIN DE HISTORIAL PRODUCTO ULTIMAS COMPRAS

/////////////////////////////////////// CONTROLADORES PARA HISTORIAL DE PRODUCTOS ULTIMAS VENTAS
//Mostrar los productos
const getAllhistorialProductoUltimasVentas= async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "historialProductoUltimasVentas"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const gethistorialProductoUltimasVentas= async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "historialProductoUltimasVentas" WHERE id = $1', [id]);

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
const createhistorialProductoUltimasVentas = async (req, res, next) =>{
    const {id, numeroPedido, fecha, cantidad, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "historialProductoUltimasVentas" (id, "numeroPedido", fecha, cantidad, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8) RETURNING *',
        [id, numeroPedido, fecha, cantidad, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disablehistorialProductoUltimasVentas= async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete } = req.body;

    const result = await pool.query(

        `UPDATE "historialProductoUltimasVentas" SET "isDelete"='1' WHERE id=$1 RETURNING *`,
        [isDelete, id]
    );
    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un producto
const updatehistorialProductoUltimasVentas = async (req, res, next) =>{
    const { id } = req.params;
    const {numeroPedido, fecha, cantidad, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "historialProductoUltimasVentas" SET "numeroPedido"=$1, fecha=$2, cantidad=$3, "isUpdate"=$4, "isDelete"=$5, "creationDate"=$6, "creationUpdate"=$7 WHERE id = $8 RETURNING *',
        [numeroPedido, fecha, cantidad, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
//////////////// FIN DE HISTORIAL PRODUCTO ULTIMAS VENTAS

/////////////////////////////////////// CONTROLADORES PARA INVENTARIO GENERAL DEL REPORTE DE INVENTARIO
//Mostrar los productos
const getAllinventarioGeneralReporteInventario= async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "inventarioGeneralReporteInventario"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getinventarioGeneralReporteInventario= async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "inventarioGeneralReporteInventario" WHERE id = $1', [id]);

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
const createinventarioGeneralReporteInventario = async (req, res, next) =>{
    const {id, imagen, codigoFabrica, codigoEmpresa, nombre, marca, minimo, maximo, total, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "inventarioGeneralReporteInventario" (id, imagen, "codigoFabrica", "codigoEmpresa", nombre, marca, minimo, maximo, total, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
        [id, imagen, codigoFabrica, codigoEmpresa, nombre, marca, minimo, maximo, total, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableinventarioGeneralReporteInventario= async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete } = req.body;

    const result = await pool.query(

        `UPDATE "inventarioGeneralReporteInventario" SET "isDelete"='1' WHERE id=$1 RETURNING *`,
        [isDelete, id]
    );
    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un producto
const updateinventarioGeneralReporteInventario= async (req, res, next) =>{
    const { id } = req.params;
    const {codigoFabrica, codigoEmpresa, nombre, marca, minimo, maximo, total, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "inventarioGeneralReporteInventario" SET "codigoFabrica"=$1, "codigoEmpresa"=$2, nombre=$3, marca=$4, minimo=$5, maximo=$6, total=$7, "isUpdate"=$8, "isDelete"=$9, "creationDate"=$10, "creationUpdate"=$11 WHERE id = $12 RETURNING *',
        [codigoFabrica, codigoEmpresa, nombre, marca, minimo, maximo, total, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
//////////////// FIN DE HISTORIAL PRODUCTO INVENTARIO GENERAL DE REPORTE DE INVENTARIO

/////////////////////////////////////// CONTROLADORES PARA INVENTARIO GENERAL DEL REPORTE DE INVENTARIO
//Mostrar los productos
const getAlllistadoProductosMargenProductos= async (req, res, next)=> {
    try{
    const allTasks = await pool.query('SELECT * FROM "listadoProductosMargenProductos"');
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getlistadoProductosMargenProductos= async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "listadoProductosMargenProductos" WHERE id = $1', [id]);

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
const createlistadoProductosMargenProductos = async (req, res, next) =>{
    const {id, imagen, codigoFabricante, codigoEmpresa, nombre, activo, precioBaseMN, descuentoMN, precioMN, costoMN, diferenciaMN, margen, isUpdate, isDelete, creationDate, creationUpdate} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "listadoProductosMargenProductos" (id, imagen, "codigoFabricante", "codigoEmpresa", nombre, activo, "precioBaseMN", "descuentoMN", "precioMN", "costoMN", "diferenciaMN", margen, "isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *',
        [id, imagen, codigoFabricante, codigoEmpresa, nombre, activo, precioBaseMN, descuentoMN, precioMN, costoMN, diferenciaMN, margen, isUpdate, isDelete, creationDate, creationUpdate]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disablelistadoProductosMargenProductos= async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete } = req.body;

    const result = await pool.query(

        `UPDATE "listadoProductosMargenProductos" SET "isDelete"='1' WHERE id=$1 RETURNING *`,
        [isDelete, id]
    );
    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un producto
const updatelistadoProductosMargenProductos= async (req, res, next) =>{
    const { id } = req.params;
    const {codigoFabricante, codigoEmpresa, nombre, activo, precioBaseMN, descuentoMN, precioMN, costoMN, diferenciaMN, margen, isUpdate, isDelete, creationDate, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "listadoProductosMargenProductos" SET "codigoFabricante"=$1, "codigoEmpresa"=$2, nombre=$3, activo=$4, "precioBaseMN"=$5, "descuentoMN"=$6, "precioMN"=$7, "costoMN"=$8, "diferenciaMN"=$9, margen=$10, "isUpdate"=$11, "isDelete"=$12, "creationDate"=$13, "creationUpdate"=$14 WHERE id = $15 RETURNING *',
        [codigoFabricante, codigoEmpresa, nombre, activo, precioBaseMN, descuentoMN, precioMN, costoMN, diferenciaMN, margen, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
//////////////// FIN DE LISTADO PRODUCTOS MARGEN PRODUCTOS


///////////////////////////////////////////// FIN DE MICROSERVICIO DE COMPRAS  ////////////////////////////////////////////////////



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
    
    getAllagregarProductoRelacionado, getagregarProductoRelacionado, createagregarProductoRelacionado, updateagregarProductoRelacionado, disableagregarProductoRelacionado, 
    getAllbuscarProducto, getbuscarProducto, createbuscarProducto, disablebuscarProducto,updatebuscarProducto,
    getAllcategoria, getcategoria, createcategoria, disablecategoria,updatecategoria,
    getAllcostoProductos, getcostoProductos, createcostoProductos, disablecostoProductos, updatecostoProductos,
    getAllhistorialProducto, gethistorialProducto, createhistorialProducto, disablehistorialProducto, updatehistorialProducto,
    getAllhistorialProductoUltimasCompras, gethistorialProductoUltimasCompras, createhistorialProductoUltimasCompras, disablehistorialProductoUltimasCompras, updatehistorialProductoUltimasCompras,
    getAllhistorialProductoUltimasVentas, gethistorialProductoUltimasVentas, createhistorialProductoUltimasVentas, disablehistorialProductoUltimasVentas, updatehistorialProductoUltimasVentas,
    getAllinventarioGeneralReporteInventario, getinventarioGeneralReporteInventario, createinventarioGeneralReporteInventario, disableinventarioGeneralReporteInventario, updateinventarioGeneralReporteInventario,
    getAlllistadoProductosMargenProductos, getlistadoProductosMargenProductos, createlistadoProductosMargenProductos, disablelistadoProductosMargenProductos, updatelistadoProductosMargenProductos,

    
    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO COMPRAS ////////////////////////////////////////////



    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO VENTAS ////////////////////////////////////////////

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