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
        `INSERT INTO "agregarProductoRelacionado" (imagen, "codigoEmpresa", nombre, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, '0', '0', NOW(), NOW() ) RETURNING *`,
        [imagen, codigoEmpresa, nombre]
    );

    res.json(result.json);
    } catch (error) {
        console.log("Error", error.message);
        console.log("Linea de error:", error.stack.split('\n')[1]);
        next(error)
    }
};

//deshabilitar un estatus
const disableagregarProductoRelacionado = async (req, res, next) =>{
    try
    {
    const { id } = req.params;
    const result = await pool.query(

        `UPDATE "agregarProductoRelacionado" SET "isDeleted"='1' WHERE id=$1 RETURNING *`,
        [id]
    );
    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error){
        console.log("error",error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
next (error)
    }
};

//actualizar un producto
const updateagregarProductoRelacionado = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {codigoEmpresa, nombre} = req.body;

    const result = await pool.query(
        'UPDATE "agregarProductoRelacionado" SET "codigoEmpresa" = $1, nombre = $2, "DateModification"=  NOW() WHERE id = $3 RETURNING *',
        [codigoEmpresa, nombre,id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos."
    });
     res.json(result.rows[0]);
    } catch (error) {
console.log("error",error.message);
console.log("linea de error:", error.stack.split('\n')[1]);

    }
};
//////////////// FIN DE CONTROLADORES PARA AGREGAR UN PRODUCTO RELACIONADO

/////////////////////////////////////// CONTROLADORES PARA TABLA DE BUSCAR PRODUCTO 
//Mostrar los productos
const getAllbuscarProducto = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "buscarProducto" WHERE "isDeleted"='0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getbuscarProducto = async (req, res, next) =>{
    try {
        const { id, isDeleted } = req.params;
        const result = await pool.query(`SELECT * FROM "buscarProducto" WHERE id = $1 AND "isDeleted"='0'`, [id]);

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
const createbuscarProducto = async (req, res, next) =>{
    const {nombre, precio, existencia} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "buscarProducto" (nombre, precio, existencia, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, '0', '0', NOW(), NOW() ) RETURNING *`,
        [nombre, precio, existencia]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error", error.message);
    console.log("Linea de error:", error.stack.split('\n')[1]);
    next(error)
}
};

//deshabilitar un estatus
const disablebuscarProducto= async (req, res, next) =>{
    try
    {
    const { id } = req.params;
    const result = await pool.query(

        `UPDATE "buscarProducto" SET "isDeleted"='1' WHERE id=$1 RETURNING *`,
        [id]
    );
    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error){
        console.log("error",error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
next (error)
    }
};

//actualizar un producto
const updatebuscarProducto = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {nombre, precio, existencia, isUpdated, isDeleted, DateCreation, DateModification} = req.body;

    const result = await pool.query(
        'UPDATE "buscarProducto" SET nombre = $1, precio = $2, existencia = $3, "isUpdated" = $4, "isDeleted" = $5, "DateCreation"= $6, "DateModification"= $7 WHERE id = $8 RETURNING *',
        [nombre, precio, existencia, isUpdated, isDeleted, DateCreation, DateModification, id]
    );
    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos."
    });
     res.json(result.rows[0]);
    } catch (error) {
console.log("error",error.message);
console.log("linea de error:", error.stack.split('\n')[1]);

    }
};
//////////////// FIN DE CONTROLADORES PARA BUSCAR PRODUCTO

/////////////////////////////////////// CONTROLADORES PARA CATEGORIAS
//Mostrar los productos
const getAllcategoria = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "categoria" WHERE "isDeleted"='0'`);
    res.json(allTasks.rows);
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getcategoria = async (req, res, next) =>{
    try {
        const { sku, isDeleted } = req.params;
        const result = await pool.query(`SELECT * FROM "categoria" WHERE sku = $1 AND "isDeleted"='0'`, [sku]);

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
const createcategoria= async (req, res, next) =>{
    const { sku, nombre} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "categoria" (nombre, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, '0', '0', NOW(), NOW() ) RETURNING *`,
        [sku, nombre]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error", error.message);
    console.log("Linea de error:", error.stack.split('\n')[1]);
    next(error)
}
};

//deshabilitar un estatus
const disablecategoria= async (req, res, next) =>{
    try
    {
    const { sku } = req.params;
    const result = await pool.query(

        `UPDATE "categoria" SET "isDeleted"='1' WHERE sku=$1 RETURNING *`,
        [sku]
    );
    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    return res.json(result.rows[0]);
    } catch (error){
        console.log("error",error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
next (error);
    }
};

//actualizar un producto
const updatecategoria= async (req, res, next) =>{
    try {
    const { sku } = req.params;
    const {nombre, isUpdated, isDeleted, DateCreation, DateModification} = req.body;

    const result = await pool.query(
        'UPDATE "categoria" SET nombre = $1, "isUpdated" = $2, "isDeleted" = $3, "DateCreation"= $4, "DateModification"= $5 WHERE sku = $6 RETURNING *',
        [nombre, isUpdated, isDeleted, DateCreation, DateModification, sku]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos."
    });
     res.json(result.rows[0]);
    } catch (error) {
console.log("error",error.message);
console.log("linea de error:", error.stack.split('\n')[1]);

    }
};
//////////////// FIN DE CATEGORIAS

/////////////////////////////////////// CONTROLADORES PARA COSTOS DE PRODUCTOS
//Mostrar los productos
const getAllcostoProductos = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "costoProductos" WHERE "isDeleted"='0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getcostoProductos= async (req, res, next) =>{
    try {
        
        const { id, isDeleted } = req.params;
        const result = await pool.query(`SELECT * FROM "costoProductos" WHERE id = $1 AND "isDeleted"='0'`, [id]);

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
const createcostoProductos = async (req, res, next) =>{
    const {imagen, nombre, inventario, costoMN, totalMN} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "costoProductos" (imagen, nombre, inventario, "costoMN", "totalMN", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3 ,$4, $5, '0','0', NOW(), NOW() ) RETURNING *`,
        [imagen, nombre, inventario, costoMN, totalMN]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error", error.message);
    console.log("Linea de error:", error.stack.split('\n')[1]);
    next(error)
}
};

//deshabilitar un estatus
const disablecostoProductos= async (req, res, next) =>{
    try
    {
    const { id } = req.params;
    const result = await pool.query(

        `UPDATE "costoProductos" SET "isDeleted"='1' WHERE id=$1 RETURNING *`,
        [id]
    );
    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error){
        console.log("error",error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
next (error)
    }
};

//actualizar un producto
const updatecostoProductos = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {codigoEmpresa, nombre, inventario, costoMN, totalMN, isUpdated, isDeleted, DateCreation, DateModification} = req.body;

    const result = await pool.query(
        'UPDATE "costoProductos" SET "codigoEmpresa" = $1, nombre = $2, inventario = $3, "costoMN" = $4, "totalMN"= $5, "isUpdated"= $6,"isDeleted"= $7,"DateCreation"= $8,"DateModification"= $9 WHERE id = $10 RETURNING *',
        [codigoEmpresa, nombre, inventario, costoMN, totalMN, isUpdated, isDeleted, DateCreation, DateModification, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos."
    });
     res.json(result.rows[0]);
    } catch (error) {
console.log("error",error.message);
console.log("linea de error:", error.stack.split('\n')[1]);

    }
};
//////////////// FIN DE COSTOS PRODUCTOS

/////////////////////////////////////// CONTROLADORES PARA HISTORIAL DE PRODUCTOS
//Mostrar los productos
const getAllhistorialProducto = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "historialProducto" WHERE "isDeleted"='0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const gethistorialProducto= async (req, res, next) =>{
    try {
        const { id, isDeleted } = req.params;
        const result = await pool.query(`SELECT * FROM "historialProducto" WHERE id = $1 AND "isDeleted"='0'`, [id]);

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
const createhistorialProducto = async (req, res, next) =>{
    const {estufa, marca, minimo, maximo, sucursal, almacen, entradas, salidas, existencia} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "historialProducto" (estufa, marca, minimo, maximo, sucursal, almacen, entradas, salidas, existencia, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8,$9, '0', '0', NOW(), NOW() ) RETURNING *`,
        [estufa, marca, minimo, maximo, sucursal, almacen, entradas, salidas, existencia]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error", error.message);
    console.log("Linea de error:", error.stack.split('\n')[1]);
    next(error)
}
};

//deshabilitar un estatus
const disablehistorialProducto= async (req, res, next) =>{
    try
    {
        const { id } = req.params;
        const result = await pool.query(
    
            `UPDATE "historialProducto" SET "isDeleted"='1' WHERE id=$1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar en la base de datos"
        });
        res.json(result.rows[0]);
        } catch (error){
            console.log("error",error.message);
            console.log("linea de error:", error.stack.split('\n')[1]);
    next (error)
        }
};

//actualizar un producto
const updatehistorialProducto = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {codigoFabricante, codigoEmpresa, estufa, marca, minimo, maximo, sucursal, almacen, entradas, salidas, existencia, isUpdated, isDeleted, DateCreation, DateModification} = req.body;

    const result = await pool.query(
        'UPDATE "historialProducto" SET "codigoFabricante"=$1, "codigoEmpresa"=$2, estufa=$3, marca=$4, minimo=$5, maximo=$6, sucursal=$7, almacen=$8, entradas=$9, salidas=$10, existencia=$11, "isUpdated"=$12, "isDeleted"=$13, "DateCreation"=$14, "DateModification"=$15 WHERE id = $16 RETURNING *',
        [codigoFabricante, codigoEmpresa, estufa, marca, minimo, maximo, sucursal, almacen, entradas, salidas, existencia, isUpdated, isDeleted, DateCreation, DateModification, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos."
    });
     res.json(result.rows[0]);
    } catch (error) {
console.log("error",error.message);
console.log("linea de error:", error.stack.split('\n')[1]);

    }
};
//////////////// FIN DE HISTORIAL PRODUCTO+


/////////////////////////////////////// CONTROLADORES PARA HISTORIAL DE PRODUCTOS ULTIMAS COMPRAS
//Mostrar los productos
const getAllhistorialProductoUltimasCompras= async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "historialProductoUltimasCompras" WHERE "isDeleted"='0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const gethistorialProductoUltimasCompras= async (req, res, next) =>{
    try {
        const { id, isDeleted } = req.params;
        const result = await pool.query(`SELECT * FROM "historialProductoUltimasCompras" WHERE id = $1 AND "isDeleted"='0'`, [id]);

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
const createhistorialProductoUltimasCompras = async (req, res, next) =>{
    const {fecha, cantidad} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "historialProductoUltimasCompras" (fecha, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, '0','0'. NOW(), NOW()) RETURNING *`,
        [fecha, cantidad]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error", error.message);
    console.log("Linea de error:", error.stack.split('\n')[1]);
    next(error)
}
};

//deshabilitar un estatus
const disablehistorialProductoUltimasCompras= async (req, res, next) =>{
    try
    {
        const { id } = req.params;
        const result = await pool.query(
    
            `UPDATE "historialProductoUltimasCompras" SET "isDeleted"='1' WHERE id=$1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar en la base de datos"
        });
        res.json(result.rows[0]);
        } catch (error){
            console.log("error",error.message);
            console.log("linea de error:", error.stack.split('\n')[1]);
    next (error)
        }
};

//actualizar un producto
const updatehistorialProductoUltimasCompras = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {numeroOrdenCompra, fecha, cantidad, isUpdated, isDeleted, DateCreation, DateModification} = req.body;

    const result = await pool.query(
        'UPDATE "historialProductoUltimasCompras" SET "numeroOrdenCompra"=$1, fecha=$2, cantidad=$3, "isUpdated"=$4, "isDeleted"=$5, "DateCreation"=$6, "DateModification"=$7 WHERE id = $8 RETURNING *',
        [numeroOrdenCompra, fecha, cantidad, isUpdated, isDeleted, DateCreation, DateModification, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos."
    });
     res.json(result.rows[0]);
    } catch (error) {
console.log("error",error.message);
console.log("linea de error:", error.stack.split('\n')[1]);

    }
};
//////////////// FIN DE HISTORIAL PRODUCTO ULTIMAS COMPRAS

/////////////////////////////////////// CONTROLADORES PARA HISTORIAL DE PRODUCTOS ULTIMAS VENTAS
//Mostrar los productos
const getAllhistorialProductoUltimasVentas= async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "historialProductoUltimasVentas" WHERE "isDeleted"='0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const gethistorialProductoUltimasVentas= async (req, res, next) =>{
    try {
        const { id, isDeleted } = req.params;
        const result = await pool.query(`SELECT * FROM "historialProductoUltimasVentas" WHERE id = $1 AND "isDeleted"='0'`, [id]);

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
const createhistorialProductoUltimasVentas = async (req, res, next) =>{
    const {numeroPedido, fecha, cantidad} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "historialProductoUltimasVentas" ("numeroPedido", fecha, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, '0','0', NOW(), NOW() ) RETURNING *`,
        [numeroPedido, fecha, cantidad]
    );
    res.json(result.json);
} catch (error) {
    console.log("Error", error.message);
    console.log("Linea de error:", error.stack.split('\n')[1]);
    next(error)
}
};

//deshabilitar un estatus
const disablehistorialProductoUltimasVentas= async (req, res, next) =>{
    try
    {
        const { id } = req.params;
        const result = await pool.query(
    
            `UPDATE "historialProductoUltimasVentas" SET "isDeleted"='1' WHERE id=$1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar en la base de datos"
        });
        res.json(result.rows[0]);
        } catch (error){
            console.log("error",error.message);
            console.log("linea de error:", error.stack.split('\n')[1]);
    next (error)
        }
};

//actualizar un producto
const updatehistorialProductoUltimasVentas = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {numeroPedido, fecha, cantidad, isUpdated, isDeleted, DateCreation, DateModification} = req.body;

    const result = await pool.query(
        'UPDATE "historialProductoUltimasVentas" SET "numeroPedido"=$1, fecha=$2, cantidad=$3, "isUpdated"=$4, "isDeleted"=$5, "DateCreation"=$6, "DateModification"=$7 WHERE id = $8 RETURNING *',
        [numeroPedido, fecha, cantidad, isUpdated, isDeleted, DateCreation, DateModification, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos."
    });
     res.json(result.rows[0]);
    } catch (error) {
console.log("error",error.message);
console.log("linea de error:", error.stack.split('\n')[1]);

    }
};
//////////////// FIN DE HISTORIAL PRODUCTO ULTIMAS VENTAS

/////////////////////////////////////// CONTROLADORES PARA INVENTARIO GENERAL DEL REPORTE DE INVENTARIO
//Mostrar los productos
const getAllinventarioGeneralReporteInventario= async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "inventarioGeneralReporteInventario" WHERE "isDeleted"='0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getinventarioGeneralReporteInventario= async (req, res, next) =>{
    try {
        const { id, isDeleted } = req.params;
        const result = await pool.query(`SELECT * FROM "inventarioGeneralReporteInventario" WHERE id = $1 AND "isDeleted"='0'`, [id]);

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
const createinventarioGeneralReporteInventario = async (req, res, next) =>{
    const {imagen,nombre, marca, minimo, maximo, total} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "inventarioGeneralReporteInventario" (imagen, nombre, marca, minimo, maximo, total, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3 ,$4, $5, $6,'0','0', NOW(), NOW()) RETURNING *`,
        [imagen, nombre, marca, minimo, maximo, total]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error", error.message);
    console.log("Linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
};
//deshabilitar un estatus
const disableinventarioGeneralReporteInventario= async (req, res, next) =>{
    try
    {
        const { id } = req.params;
        const result = await pool.query(
    
            `UPDATE "inventarioGeneralReporteInventario" SET "isDeleted"='1' WHERE id=$1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar en la base de datos"
        });
        res.json(result.rows[0]);
        } catch (error){
            console.log("error",error.message);
            console.log("linea de error:", error.stack.split('\n')[1]);
    next (error)
        }
};

//actualizar un producto
const updateinventarioGeneralReporteInventario= async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {codigoFabrica, codigoEmpresa, nombre, marca, minimo, maximo, total, isUpdated, isDeleted, DateCreation, DateModification} = req.body;

    const result = await pool.query(
        'UPDATE "inventarioGeneralReporteInventario" SET "codigoFabrica"=$1, "codigoEmpresa"=$2, nombre=$3, marca=$4, minimo=$5, maximo=$6, total=$7, "isUpdated"=$8, "isDeleted"=$9, "DateCreation"=$10, "DateModification"=$11 WHERE id = $12 RETURNING *',
        [codigoFabrica, codigoEmpresa, nombre, marca, minimo, maximo, total, isUpdated, isDeleted, DateCreation, DateModification, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos."
    });
     res.json(result.rows[0]);
    } catch (error) {
console.log("error",error.message);
console.log("linea de error:", error.stack.split('\n')[1]);

    }
};
//////////////// FIN DE HISTORIAL PRODUCTO INVENTARIO GENERAL DE REPORTE DE INVENTARIO

/////////////////////////////////////// CONTROLADORES PARA INVENTARIO GENERAL DEL REPORTE DE INVENTARIO
//Mostrar los productos
const getAlllistadoProductosMargenProductos= async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "listadoProductosMargenProductos" WHERE "isDeleted"='0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getlistadoProductosMargenProductos= async (req, res, next) =>{
    try {
        const { id, isDeleted } = req.params;
        const result = await pool.query(`SELECT * FROM "listadoProductosMargenProductos" WHERE id = $1 AND "isDeleted"='0'`, [id]);

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
const createlistadoProductosMargenProductos = async (req, res, next) =>{
    const { imagen, nombre, activo, precioBaseMN, descuentoMN, precioMN, costoMN, diferenciaMN, margen, } = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "listadoProductosMargenProductos" (id, imagen, "codigoFabricante", "codigoEmpresa", nombre, activo, "precioBaseMN", "descuentoMN", "precioMN", "costoMN", "diferenciaMN", margen, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, '0', '0', NOW(), NOW() ) RETURNING * `,
        [imagen, nombre, activo, precioBaseMN, descuentoMN, precioMN, costoMN, diferenciaMN, margen]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error", error.message);
    console.log("Linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
    
};

//deshabilitar un estatus
const disablelistadoProductosMargenProductos= async (req, res, next) =>{
    try
    {
        const { id } = req.params;
        const result = await pool.query(
    
            `UPDATE "listadoProductosMargenProductos" SET "isDeleted"='1' WHERE id=$1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar en la base de datos"
        });
        res.json(result.rows[0]);
        } catch (error){
            console.log("error",error.message);
            console.log("linea de error:", error.stack.split('\n')[1]);
    next (error)
        }
};

//actualizar un producto
const updatelistadoProductosMargenProductos= async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {codigoFabricante, codigoEmpresa, nombre, activo, precioBaseMN, descuentoMN, precioMN, costoMN, diferenciaMN, margen, isUpdated, isDeleted, DateCreation, DateModification} = req.body;

    const result = await pool.query(
        'UPDATE "listadoProductosMargenProductos" SET "codigoFabricante"=$1, "codigoEmpresa"=$2, nombre=$3, activo=$4, "precioBaseMN"=$5, "descuentoMN"=$6, "precioMN"=$7, "costoMN"=$8, "diferenciaMN"=$9, margen=$10, "isUpdated"=$11, "isDeleted"=$12, "DateCreation"=$13, "DateModification"=$14 WHERE id = $15 RETURNING *',
        [codigoFabricante, codigoEmpresa, nombre, activo, precioBaseMN, descuentoMN, precioMN, costoMN, diferenciaMN, margen, isUpdated, isDeleted, DateCreation, DateModification, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos."
    });
     res.json(result.rows[0]);
    } catch (error) {
console.log("error",error.message);
console.log("linea de error:", error.stack.split('\n')[1]);

    }
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