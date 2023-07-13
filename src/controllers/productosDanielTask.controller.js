const pool = require('../database')



///////////////////////////////////////////////  MICROSERVICIO DE COMPRAS  //////////////////////////////////////////////////////

/////////////////////////////////////// CONTROLADORES PARA TABLA DE AGREGAR PRODUCTOS RELACIONADOS
//Mostrar los productos
const getAllagregarProductoRelacionado = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "agregarProductoRelacionado" WHERE "isDeleted"='0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getagregarProductoRelacionado = async (req, res, next) =>{
    try {
        const { id, isDeleted } = req.params;
        const result = await pool.query(`SELECT * FROM "agregarProductoRelacionado" WHERE id = $1 AND "isDeleted"='0'`, [id]);

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
const createagregarProductoRelacionado = async (req, res, next) =>{
    const {imagen, codigoEmpresa, nombre} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "agregarProductoRelacionado" (imagen, "codigoEmpresa", nombre, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, '0', '0', NOW(), NOW()) RETURNING *`,
        [imagen, codigoEmpresa, nombre]
    );

    res.json(result.json);
    } catch (error) {
        console.log("Error", error.message);
        console.log("Linea de error:", error.stack.split('\n')[1])
        next(error)
    }
};

//deshabilitar un estatus
const disableagregarProductoRelacionado = async (req, res, next) =>{
    const { id } = req.params;
    const { isDeleted } = req.body;

    const result = await pool.query(

        `UPDATE "agregarProductoRelacionado" SET "isDelete"='1' WHERE id=$1 RETURNING *`,
        [isDeleted, id]
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

/*AQUI DE IGUAL MANERA LOS NOMBRES DE LOS CONTROLADORES DE CADA TABLA ESTARAN ACOMODADOS POR MICROSERVICIOS
POR LO CUAL SE TENDRA QUE RESPETAR EL ORDEN MENCONADO DE CADA UNO DEPENDIENDO AL MICROSERVICIO QUE PERTENEZCA CADA TABLA DE 
LA BASE DE DATOS 
CADA RENGLON REPRESENTA A LOS CONTROLADORES DE 1 SOLA TABLA POR LO CUAL SE MANEJARA 1 RENGLON POR TABLA*/

module.exports = {

    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO COMPRAS ////////////////////////////////////////////
   
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



}