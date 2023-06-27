const pool = require('../database')



/////////////////////////////////////// CONTROLADORES PARA TABLA DE ESTATUS ////////////////////////////////////////

//Mostrar los estatus
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


/////////////////////////////////////// CONTROLADORES PARA TABLA DE NUEVA ORDEN DE COMPRA FOLIOS DE SURTIDO ////////////////////////////////////////
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


/////////////////////////////////////// CONTROLADORES PARA TABLA DE NUEVA ORDEN DE COMPRA - ARCHIVOS ADJUNTOS ////////////////////////////////////////
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
    );sur

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};



/////////////////////////////////////// CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - ARCHIVOS ADJUNTOS  ////////////////////////////////////////
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
    );sur

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};


/////////////////////////////////////// CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - FOLIOS DE SURTIDO ////////////////////////////////////////
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



/////////////////////////////////////// CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - LISTADO DE ENTRADAS ////////////////////////////////////////
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

/////////////////////////////////////// CONTROLADORES PARA TABLA DE PRODUCTOS ////////////////////////////////////////
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
    );sur

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};




/////////////////////////////////////// CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - PRODUCTOS EN LA ORDEN DE COMPRA ////////////////////////////////////////
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
    );sur

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};



module.exports = {
    getAllStatus, getStatus, createStatus, deleteStatus, updateStatus, 
    getAllOrcFoliosSur, getOrcFoliosSur, createOrcFoliosSur, deleteOrcFoliosSur, updateOrcFoliosSur,
    getAllOrcArchvivosAdj,getOrcArchvivosAdj, createOrcArchvivosAdj, deleteOrcArchvivosAdj,updateOrcArchvivosAdj,
    getAllOrdenArchivosAdjuntos,getOrdenArchvivosAdj, createOrdenArchivosAdjuntos, deleteOrdenArchivosAdjuntos, updateOrdenArchivosAdjuntos,
    getAllOrdenFoliosSurtidos,getOrdenFoliosSurtidos,createOrdenFoliosSurtidos, deleteOrdenFoliosSurtidos, updateOrdenFoliosSurtidos,
    getAllOrdenListadoEntrada, getOrdenListadoEntrada, createOrdenListadoEntrada, deleteOrdenListadoEntrada, updateOrdenListadoEntrada,
    getAllProductos,getProducto,createProducto,deleteProducto,updateProducto,
    getAllProductosOrdenCompra, getProductosOrdenCompra, createProductosOrdenCompra, deleteProductosOrdenCompra, updateProductosOrdenCompra,
}