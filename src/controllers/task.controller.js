const pool = require('../database')



///////////////////////////////////////////////  MICROSERVICIO DE COMPRAS  //////////////////////////////////////////////////////
///////////////////////////////////////////////  Usuarios  //////////////////////////////////////////////////////
//Mostrar los usuarios
const getAllUsers = async (req, res, next) => {
    try {
        const allTasks = await pool.query('SELECT * FROM  "listadoUsuarios"');
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}
//Mostar un usuario
const getUser = async (req, res, next) => {
    try {
        const { email } = req.params;
        const result = await pool.query('SELECT * FROM "listadoUsuarios" WHERE email = $1', [email]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no funciona :("
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};
//crear un usuario
const createUser = async (req, res, next) => {
    const { imagen, nombre, apellido, email, password, idPerfilSeguridad, idVendedor, dateCreated, dateUpdated } = req.body
    try {
        const result = await pool.query(
            'INSERT INTO "listadoUsuarios" (imagen, nombre, apellido, email, password, idPerfilSeguridad, idVendedor, dateCreated, dateUpdated) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
            [imagen, nombre, apellido, email, password, idPerfilSeguridad, idVendedor, dateCreated, dateUpdated]
        );

        res.json(result.json);
    } catch (error) {
        next(error)
    }
};
//Actualizar user
const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { imagen, nombre, apellido, email, password, idPerfilSeguridad, idVendedor, isUpdated, dateUpdated } = req.body;

    const result = await pool.query(
        'UPDATE "listadoUsuarios" SET imagen = $1, nombre = $2, apellido = $3, email = $4, password = $5, idPerfilSeguridad = $6, idVendedor = $7, isUpdated = $8, dateUpdated = $9 WHERE id = $9 RETURNING *',
        [imagen, nombre, apellido, email, password, idPerfilSeguridad, idVendedor, isUpdated, dateUpdated, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};
//delete user
const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    const { isDeleted, isUpdated, dateUpdated } = req.body;

    const result = await pool.query(
        'UPDATE "listadoUsuarios" SET isDeleted = $1, isUpdated = $2, dateUpdated = $3 WHERE id = $4 RETURNING *',
        [isDeleted, isUpdated, dateUpdated, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};
/////////////// CONTROLADORES PARA TABLA DE NUEVA ORDEN DE COMPRA FOLIOS DE SURTIDO 
//Mostrar los folios
const getAllOrcFoliosSur = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "nuevaOrdenCompraFoliosSurtido" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getOrcFoliosSur = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "nuevaOrdenCompraFoliosSurtido" WHERE id = $1 AND "isDelete" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no funciona :("
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createOrcFoliosSur = async (req, res, next) => {
    const { id, fecha, almacen, producto, cantidad } = req.body

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

//deshabilita un estatus
const disableOrcFoliosSur = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "nuevaOrdenCompraFoliosSurtido" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un folio para la nueva orden de compra
const updateOrcFoliosSur = async (req, res, next) => {
    const { id } = req.params;
    const { fecha, almacen, producto, cantidad, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "nuevaOrdenCompraFoliosSurtido" SET fecha = $1, almacen = $2, producto = $3, cantidad = $4, "creationUpdate" = CURRENT_DATE WHERE id = $6 RETURNING *',
        [fecha, almacen, producto, cantidad, creationUpdate, id]
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
    const allTasks = await pool.query(`SELECT * FROM "nuevasOrdenesCompraArchivosAdjuntos" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getOrcArchvivosAdj = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "nuevasOrdenesCompraArchivosAdjuntos" WHERE id = $1 AND "isDelete" = '0'`, [id]);

        if (result.rows.length === 0)
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
    const { id , numero, archivo} = req.body

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

//deshabilita un estatus
const disableOrcArchvivosAdj = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "nuevasOrdenesCompraArchivosAdjuntos" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un folio para la nueva orden de compra
const updateOrcArchvivosAdj = async (req, res, next) => {
    const { id } = req.params;
    const { numero, archivo, creationUpdate } = req.body;

    const result = await pool.query(
        'UPDATE "nuevasOrdenesCompraArchivosAdjuntos" SET numero = $1, archivo = $2, "creationUpdate" = CURRENT_DATE  WHERE id = $4 RETURNING *',
        [numero, archivo, creationUpdate, id]
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
    const allTasks = await pool.query(`SELECT * FROM "ordenCompraArchivosAdjuntos" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getOrdenArchvivosAdj = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "ordenCompraArchivosAdjuntos" WHERE id = $1 AND "isDelete" = '0'`, [id]);

        if (result.rows.length === 0)
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
    const { id , numero, archivo} = req.body

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

//deshabilita un estatus
const disableOrdenArchivosAdjuntos = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "ordenCompraArchivosAdjuntos" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un folio para la nueva orden de compra
const updateOrdenArchivosAdjuntos = async (req, res, next) => {
    const { id } = req.params;
    const { numero, archivo, creationUpdate } = req.body;

    const result = await pool.query(
        'UPDATE "ordenCompraArchivosAdjuntos" SET numero = $1, archivo = $2, "creationUpdate" = CURRENT_DATE WHERE id = $4 RETURNING *',
        [numero, archivo, creationUpdate, id]
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
    const allTasks = await pool.query(`SELECT * FROM "ordenCompraFoliosSurtido" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getOrdenFoliosSurtidos = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "ordenCompraFoliosSurtido" WHERE id = $1 AND "isDelete" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no funciona :("
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createOrdenFoliosSurtidos = async (req, res, next) => {
    const { id, numero, fecha, almacen, producto, cantidad } = req.body

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

//deshabilita un estatus
const disableOrdenFoliosSurtidos = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "ordenCompraFoliosSurtido" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un folio para la nueva orden de compra
const updateOrdenFoliosSurtidos = async (req, res, next) => {
    const { id } = req.params;
    const { fecha, numero, almacen, producto, cantidad, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "ordenCompraFoliosSurtido" SET fecha = $1, numero = $2, almacen = $3, producto = $4, cantidad = $5, "creationUpdate" = CURRENT_DATE WHERE id = $7 RETURNING *',
        [fecha, numero, almacen, producto, cantidad, creationUpdate, id]
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
    const allTasks = await pool.query(`SELECT * FROM "ordenesCompraListadoEntradas" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getOrdenListadoEntrada = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "ordenesCompraListadoEntradas" WHERE id = $1 AND "isDelete" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no funciona :("
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createOrdenListadoEntrada = async (req, res, next) => {
    const { id, numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos } = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "ordenesCompraListadoEntradas" (id, numero, "fechaRegistrada", "fechaCompra", "fechaEntrega", provedor, vendedor, referencia, estatus, total, productos) VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
        [id, numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos]
    );

        res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilita un estatus
const disableOrdenListadoEntrada = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "ordenesCompraListadoEntradas" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un folio para la nueva orden de compra
const updateOrdenListadoEntrada = async (req, res, next) => {
    const { id } = req.params;
    const { numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "ordenesCompraListadoEntradas" SET numero = $1, fechaRegistrada = $2, fechaCompra = $3, fechaEntrega = $4, provedor = $5, vendedor = $6, referencia= $7, estatus = $8, total = $9, productos = $10, "creationUpdate" = CURRENT_DATE WHERE id = $11 RETURNING *',
        [numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos, creationUpdate, id]
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
    const allTasks = await pool.query(`SELECT * FROM "productosLaOrdenCompra" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getProductosOrdenCompra = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "productosLaOrdenCompra" WHERE id = $1 AND "isDelete" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no funciona :("
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createProductosOrdenCompra = async (req, res, next) => {
    const { id, imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos } = req.body

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

//deshabilita un estatus
const disableProductosOrdenCompra = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "productosLaOrdenCompra" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un folio para la nueva orden de compra
const updateProductosOrdenCompra = async (req, res, next) => {
    const { id } = req.params;
    const {imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "productosLaOrdenCompra" SET imagen = $1, codigo = $2, producto = $3, cantidad = $4, costo = $5, descuento = $6, total = $7, subtotal = $8, impuestos = $9, "creationUpdate" = CURRENT_DATE WHERE id = $10 RETURNING *',
        [imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos, creationUpdate, id]
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
    const allTasks = await pool.query(`SELECT * FROM "listadoProductos" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getListadoProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "listadoProductos" WHERE id = $1 AND "isDelete" = '0' `, [id]);

        if (result.rows.length === 0)
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

//deshabilita un estatus
const disableListadoProduct = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "listadoProductos" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un folio para la orden de compra
const updateListadoProduct = async (req, res, next) => {
    const { id } = req.params;
    const {codigoFabricante, codigoEmpresa, nombre, marca, categoria, codigoSat, actualizado, precio, creationUpdate } = req.body;

    const result = await pool.query(
        'UPDATE "listadoProductos" SET "codigoFabricante" = $1, "codigoEmpresa" = $2, nombre = $3, marca = $4, categoria = $5, "codigoSat"= $6, actualizado = $7, precio = $8, "creationUpdate" = CURRENT_DATE WHERE id = $10 RETURNING *',
        [codigoFabricante, codigoEmpresa, nombre, marca, categoria, codigoSat, actualizado, precio, creationUpdate, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
}; 
//////////////// FIN DE CONTROLADORES PARA TABLA DE LISTADO DE PRODUCTOS


//////////////// FIN DE CONTROLADORES PARA BUSCAR PRODUCTO

/////////////////////////////////////// CONTROLADORES PARA CATEGORIAS
//Mostrar los productos
const getAllcategoria = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "productos" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


//mostrar un estatus
const getProducto = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "productos" WHERE id = $1 AND "isDelete" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no funciona :("
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createProducto = async (req, res, next) => {
    const { id, imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total } = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "productos" (id, imagen, "codigoEmpresa", "codigoFabricante", nombre, marca, categoria, existencia, "backOrder", cantidad, precio, descuento, total) VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *',
        [id, imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total]
    );

        res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableProducto = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "productos" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};

//actualizar un folio para la nueva orden de compra
const updateProducto = async (req, res, next) =>{
    const { id } = req.params;
    const { imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "productos" SET imagen = $1, "codigoEmpresa" = $2, "codigoFabricante" = $3, nombre = $4, marca = $5, categoria = $6, existencia= $7, "backOrder" = $8, cantidad = $9, precio = $10, descuento = $11, total = $12, "creationUpdate" = CURRENT_DATE WHERE id = $14 RETURNING *',
        [imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total, creationUpdate, id]
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
//////////////////// FIN DE CONTROLADORES PARA TABLA DE PRODUCTOS
///////////////////////////////////////////// FIN DE MICROSERVICIO DE COMPRAS  ////////////////////////////////////////////////////

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




//mostrar un Listado transferencia masiva productos transferencia 
const getTransMasProdTrans = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM "listadoTransferenciasMasivasProductosTransferencia" WHERE id = $1', [id]);


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

//crear una Marca producto
const createMarcasproducto = async (req, res, next) =>{
    const { id , imagen, marca, catalogo, productos,isUpdate, isDelete, creationDate, creationUpdate,} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "marcasProducto" (id, imagen, marca, catalogo, productos,"isUpdate", "isDelete", "creationDate", "creationUpdate") VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [id, imagen, marca, catalogo, productos,isUpdate, isDelete, creationDate, creationUpdate]
    );
    } catch (error) {
        console.log(error.message);
    }
}       
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
const disableListadoProductDesc = async (req, res, next) =>{ 
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
}

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

///////////// CONTROLADORES PARA TABLA DE COTIZACIONES 
//Mostrar los estatus
const getAllCotizaciones = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "cotizaciones" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getCotizaciones = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "cotizaciones" WHERE id = $1 AND "isDelete" = '0' `, [id]);

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
    const {id, folio, fecha, pedido, cliente, vendedor, recurrenciaa, origen, monto, estatus} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "cotizaciones" (id, folio, fecha, pedido, cliente, vendedor, recurrenciaa, origen, monto, estatus) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
        [id, folio, fecha, pedido, cliente, vendedor, recurrenciaa, origen, monto, estatus]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableCotizaciones = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "cotizaciones" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateCotizaciones = async (req, res, next) =>{
    const { id } = req.params;
    const {folio, fecha, pedido, cliente, vendedor, recurrenciaa, origen, monto, estatus, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "cotizaciones" SET folio = $1, fecha = $2, pedido = $3, cliente = $4, vendedor = $5, recurrenciaa = $6, origen = $7, monto = $8, estatus = $9, "creationUpdate" = CURRENT_DATE WHERE id = $11 RETURNING *',
        [folio, fecha, pedido, cliente, vendedor, recurrenciaa, origen, monto, estatus, creationUpdate, id]
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
    const allTasks = await pool.query(`SELECT * FROM  "pedido" WHERE "isDelete" = '0' `);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getPedido = async (req, res, next) =>{
    try {
        const { id,  } = req.params;
        const result = await pool.query(`SELECT * FROM "pedido" WHERE idpedido = $1 AND "isDelete" = '0' `, [id,]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea esta desactivada"
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createPedido = async (req, res, next) =>{
    const {idpedido, datosPedido, datosEnvio, informacionCliente, productosPedido, formaPago, comentarios} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "pedido" (idpedido, "datosPedido", "datosEnvio", "informacionCliente", "productosPedido", "formaPago", comentarios) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
        [idpedido, datosPedido, datosEnvio, informacionCliente, productosPedido, formaPago, comentarios]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disablePedido = async (req, res, next) =>{
    const { idpedido } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "pedido" SET "isDelete" = '1' WHERE idpedido = $11 RETURNING *`,
        [isDelete, idpedido]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updatePedido = async (req, res, next) =>{
    const { idpedido } = req.params;
    const { datosPedido, datosEnvio, informacionCliente, productosPedido, formaPago, comentarios, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "pedido" SET "datosPedido" = $1, "datosEnvio" = $2, "informacionCliente" = $3, "productosPedido" = $4, "formaPago" = $5, comentarios = $6, "creationUpdate" = CURRENT_DATE WHERE idpedido = $8 RETURNING *',
        [datosPedido, datosEnvio, informacionCliente, productosPedido, formaPago, comentarios, creationUpdate, idpedido]
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
    const allTasks = await pool.query(`SELECT * FROM  "pedidos" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getPedidos = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "pedidos" WHERE id = $1 AND "isDelete" = '0' `, [id]);

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
    const {id, folio, fecha, cotizacion, numeroCliente, cliente, razonSocial, rfc, monto, saldo, estatus, factura, surtido, poductos} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "pedidos" (id, folio, fecha, cotizacion, "numeroCliente", cliente, "razonSocial", rfc, monto, saldo, estatus, factura, surtido, poductos) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *',
        [id, folio, fecha, cotizacion, numeroCliente, cliente, razonSocial, rfc, monto, saldo, estatus, factura, surtido, poductos]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disablePedidos = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "pedidos" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updatePedidos = async (req, res, next) =>{
    const { id } = req.params;
    const { folio, fecha, cotizacion, numeroCliente, cliente, razonSocial, rfc, monto, saldo, estatus, factura, surtido, poductos, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "pedidos" SET folio = $1, fecha = $2, cotizacion = $3, "numeroCliente" = $4, cliente = $5, "razonSocial" = $6, rfc = $7, monto = $8, saldo = $9, estatus = $10, factura = $11, surtido = $12, poductos = $13, "creationUpdate" = CURRENT_DATE WHERE id = $15 RETURNING *',
        [folio, fecha, cotizacion, numeroCliente, cliente, razonSocial, rfc, monto, saldo, estatus, factura, surtido, poductos, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE PEDIDOS


///////////// CONTROLADORES PARA TABLA DE DETALLES PEDIDO 
//Mostrar los estatus
const getAllDetallePedido = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "detallePedido" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getDetallePedido = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "detallePedido" WHERE id = $1 AND "isDelete" = '0' `, [id]);

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
    const {id, datosPedido, backorder, datosEnvio, informacionCliente, comentariosPedido} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "detallePedido" (id, "datosPedido", backorder, "datosEnvio", "informacionCliente", "comentariosPedido") VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [id, datosPedido, backorder, datosEnvio, informacionCliente, comentariosPedido]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableDetallePedido = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "detallePedido" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateDetallePedido = async (req, res, next) =>{
    const { id } = req.params;
    const {datosPedido, backorder, datosEnvio, informacionCliente, comentariosPedido, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "detallePedido" SET "datosPedido" = $1, backorder = $2, "datosEnvio" = $3, "informacionCliente" = $4, "comentariosPedido" = $5, "creationUpdate" = CURRENT_DATE WHERE id = $7 RETURNING *',
        [datosPedido, backorder, datosEnvio, informacionCliente, comentariosPedido, creationUpdate, id]
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
    const allTasks = await pool.query(`SELECT * FROM  "formasPagoPedido" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getFormasPagoPedido = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "formasPagoPedido" WHERE id = $1 AND "isDelete" = '0' `, [id]);

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
    const {id, fecha, formaPago, cantidadPago, total, faltaPagar, tipoCambio, tc, cantidadPagada} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "formasPagoPedido" (id, fecha, "formaPago", "cantidadPago", total, "faltaPagar", "tipoCambio", tc, "cantidadPagada") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [id, fecha, formaPago, cantidadPago, total, faltaPagar, tipoCambio, tc, cantidadPagada]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableFormasPagoPedido = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "formasPagoPedido" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateFormasPagoPedido = async (req, res, next) =>{
    const { id } = req.params;
    const {fecha, formaPago, cantidadPago, total, faltaPagar, tipoCambio, tc, cantidadPagada, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "formasPagoPedido" SET fecha = $1, "formaPago" = $2, "cantidadPago" = $3, total = $4, "faltaPagar" = $5, "tipoCambio" = $6, tc = $7, "cantidadPagada" = $8, "creationUpdate" = CURRENT_DATE WHERE id = $10 RETURNING *',
        [fecha, formaPago, cantidadPago, total, faltaPagar, tipoCambio, tc, cantidadPagada, creationUpdate, id]
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
    const allTasks = await pool.query(`SELECT * FROM  "verPedido" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getVerPedido = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "verPedido" WHERE id = $1 AND "isDelete" = '0' `, [id]);

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
    const {id, datosPedido, datosEnvio, informacionCliente} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "verPedido" (id, "datosPedido", "datosEnvio", "informacionCliente") VALUES ($1, $2, $3, $4) RETURNING *',
        [id, datosPedido, datosEnvio, informacionCliente]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableVerPedido = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "verPedido" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateVerPedido = async (req, res, next) =>{
    const { id } = req.params;
    const {datosPedido, datosEnvio, informacionCliente, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "verPedido" SET "datosPedido" = $1, "datosEnvio" = $2, "informacionCliente" = $3, "creationUpdate" = CURRENT_DATE WHERE id = $5 RETURNING *',
        [datosPedido, datosEnvio, informacionCliente, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE VER PEDIDO


///////////// CONTROLADORES PARA TABLA DE LOGISTICA DE PEDIDOS 
//Mostrar los estatus
const getAllLogisticaPedidos = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "logistcaPedidos" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getLogisticaPedidos = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "logistcaPedidos" WHERE id = $1 AND "isDelete" = '0' `, [id]);

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
const createLogisticaPedidos = async (req, res, next) =>{
    const {id, folio, fechaVenta, cliente, monto, fechaCompromiso, turno, chofer, direccion, fechaEntrega, estatus} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "logistcaPedidos" (id, "folio ", "fechaVenta", cliente, monto, "fechaCompromiso", turno, chofer, direccion, "fechaEntrega", estatus) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
        [id, folio, fechaVenta, cliente, monto, fechaCompromiso, turno, chofer, direccion, fechaEntrega, estatus]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableLogisticaPedidos = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "logistcaPedidos" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateLogisticaPedidos = async (req, res, next) =>{
    const { id } = req.params;
    const {folio, fechaVenta, cliente, monto, fechaCompromiso, turno, chofer, direccion, fechaEntrega, estatus, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "logistcaPedidos" SET "folio " = $1, "fechaVenta" = $2, "cliente" = $3, "monto" = $4, "fechaCompromiso" = $5, turno = $6, chofer = $7, direccion = $8, "fechaEntrega" = $9, estatus = $10, "creationUpdate" = CURRENT_DATE WHERE id = $12 RETURNING *',
        [folio, fechaVenta, cliente, monto, fechaCompromiso, turno, chofer, direccion, fechaEntrega, estatus, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA LOGISTICA DE PEDIDOS


///////////// CONTROLADORES PARA TABLA DE PEDIDOS PENDIENTES POR SURTIR 
//Mostrar los estatus
const getAllPedidosPendientesSurt = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "pedidosPendientesSurtir" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getPedidosPendientesSurt = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "pedidosPendientesSurtir" WHERE id = $1 AND "isDelete" = '0' `, [id]);

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
const createPedidosPendientesSurt = async (req, res, next) =>{
    const {id, folio, fecha, cliente, monto, estatus, factura, surtido, parcial} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "pedidosPendientesSurtir" (id, folio, fecha, cliente, monto, estatus, factura, surtido, parcial) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
        [id, folio, fecha, cliente, monto, estatus, factura, surtido, parcial]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disablePedidosPendientesSurt = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "pedidosPendientesSurtir" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updatePedidosPendientesSurt = async (req, res, next) =>{
    const { id } = req.params;
    const {folio, fecha, cliente, monto, estatus, factura, surtido, parcial, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "pedidosPendientesSurtir" SET folio = $1, fecha = $2, cliente = $3, monto = $4, estatus = $5, factura = $6, surtido = $7, parcial = $8, "creationUpdate" = CURRENT_DATE WHERE id = $10 RETURNING *',
        [folio, fecha, cliente, monto, estatus, factura, surtido, parcial, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE PEDIDO PENDIENTE POR SURTIR


///////////// CONTROLADORES PARA TABLA DE AGREGAR PROVEEDOR 
//Mostrar los estatus
const getAllAgregarProveedor = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "agregarProvedor" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getAgregarProveedor = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "agregarProvedor" WHERE id = $1 AND "isDelete" = '0' `, [id]);

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
const createAgregarProveedor = async (req, res, next) =>{
    const {id, provedor} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "agregarProvedor" (id, provedor) VALUES ($1, $2) RETURNING *',
        [id, provedor]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableAgregarProveedor = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "agregarProvedor" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateAgregarProveedor = async (req, res, next) =>{
    const { id } = req.params;
    const {provedor, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "agregarProvedor" SET provedor = $1, "creationUpdate" = CURRENT_DATE WHERE id = $3 RETURNING *',
        [provedor, isUpdate, isDelete, creationDate, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE AGREGAR PROVEEDORES


///////////// CONTROLADORES PARA TABLA DE AGREGAR PROVEEDORES 
//Mostrar los estatus
const getAllProveedores = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "provedores" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getProveedores = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "provedores" WHERE id = $1 AND "isDelete" = '0' `, [id]);

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
const createProveedores = async (req, res, next) =>{
    const {id, nombre, razonSocial, rfc, ciudad, estado, pais, productos} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "provedores" (id, nombre, "razonSocial", rfc, ciudad, estado, pais, productos) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [id, nombre, razonSocial, rfc, ciudad, estado, pais, productos]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableProveedores = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "provedores" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateProveedores = async (req, res, next) =>{
    const { id } = req.params;
    const {nombre, razonSocial, rfc, ciudad, estado, pais, productos, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "provedores" SET nombre = $1, "razonSocial" = $2, rfc = $3, ciudad = $4, estado = $5, pais = $6, productos = $7, "creationUpdate" = CURRENT_DATE WHERE id = $9 RETURNING *',
        [nombre, razonSocial, rfc, ciudad, estado, pais, productos, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE PROVEEDORES


///////////// CONTROLADORES PARA TABLA DE AGREGAR PROVEEDORES DEL PRODUCTO 
//Mostrar los estatus
const getAllProveedoresProducto = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "provedoresProducto" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getProveedoresProducto = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "provedoresProducto" WHERE id = $1 AND "isDelete" = '0' `, [id]);

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
const createProveedoresProducto = async (req, res, next) =>{
    const {id, nombreProvedor, unidadesCompradas, ultimaCompra} = req.body

    try {
    const result = await pool.query(
        'INSERT INTO "provprovedoresProductoedores" (id, "nombreProvedor", "unidadesCompradas", "ultimaCompra") VALUES ($1, $2, $3, $4) RETURNING *',
        [id, nombreProvedor, unidadesCompradas, ultimaCompra]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableProveedoresProducto = async (req, res, next) =>{
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "provedoresProducto" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateProveedoresProducto = async (req, res, next) =>{
    const { id } = req.params;
    const {nombreProvedor, unidadesCompradas, ultimaCompra, creationUpdate} = req.body;

    const result = await pool.query(
        'UPDATE "provedoresProducto" SET "nombreProvedor" = $1, "unidadesCompradas" = $2, "ultimaCompra" = $3, "creationUpdate" = CURRENT_DATE WHERE id = $5 RETURNING *',
        [nombreProvedor, unidadesCompradas, ultimaCompra, creationUpdate, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE PROVEEDORES


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
    const allTasks = await pool.query(`SELECT * FROM  "estatus" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getStatus = async (req, res, next) => {
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
    const { id , estatus} = req.body

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
const updateStatus = async (req, res, next) => {
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




 


/*AQUI DE IGUAL MANERA LOS NOMBRES DE LOS CONTROLADORES DE CADA TABLA ESTARAN ACOMODADOS POR MICROSERVICIOS
POR LO CUAL SE TENDRA QUE RESPETAR EL ORDEN MENCONADO DE CADA UNO DEPENDIENDO AL MICROSERVICIO QUE PERTENEZCA CADA TABLA DE 
LA BASE DE DATOS 
CADA RENGLON REPRESENTA A LOS CONTROLADORES DE 1 SOLA TABLA POR LO CUAL SE MANEJARA 1 RENGLON POR TABLA*/

module.exports = {
    ///////////////////////////////////////////// CONTROLADORES DE USUARIOS ////////////////////////////////////////////
    getAllUsers, getUser, updateUser, deleteUser, createUser,
    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO COMPRAS ////////////////////////////////////////////
    getAllOrcFoliosSur, getOrcFoliosSur, createOrcFoliosSur, disableOrcFoliosSur, updateOrcFoliosSur,
    getAllOrcArchvivosAdj,getOrcArchvivosAdj, createOrcArchvivosAdj, disableOrcArchvivosAdj,updateOrcArchvivosAdj,
    getAllOrdenArchivosAdjuntos,getOrdenArchvivosAdj, createOrdenArchivosAdjuntos, disableOrdenArchivosAdjuntos, updateOrdenArchivosAdjuntos,
    getAllOrdenFoliosSurtidos,getOrdenFoliosSurtidos,createOrdenFoliosSurtidos, disableOrdenFoliosSurtidos, updateOrdenFoliosSurtidos,
    getAllOrdenListadoEntrada, getOrdenListadoEntrada, createOrdenListadoEntrada, disableOrdenListadoEntrada, updateOrdenListadoEntrada,
    //getAllListadoProduct,getListadoProduct,createListadoProduct,disableListadoProduct,updateListadoProduct,
    getAllProductos,getProducto,createProducto,disableProducto,updateProducto,
    getAllProductosOrdenCompra, getProductosOrdenCompra, createProductosOrdenCompra, disableProductosOrdenCompra, updateProductosOrdenCompra,
    getAllListadoProductDesc,getListadoProductDesc, createListadoProductDesc, disableListadoProductDesc, updateListadoProductDesc,

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
    getAllCotizaciones, getCotizaciones, createCotizaciones, disableCotizaciones, updateCotizaciones,
    getAllPedido, getPedido, createPedido, disablePedido, updatePedido,
    getAllPedidos, getPedidos, createPedidos, disablePedidos, updatePedidos,
    getAllDetallePedido, getDetallePedido, createDetallePedido, disableDetallePedido, updateDetallePedido,
    getAllFormasPagoPedido, getFormasPagoPedido, createFormasPagoPedido, disableFormasPagoPedido, updateFormasPagoPedido,
    getAllVerPedido, getVerPedido, createVerPedido, disableVerPedido, updateVerPedido,
    getAllLogisticaPedidos, getLogisticaPedidos, createLogisticaPedidos, disableLogisticaPedidos, updateLogisticaPedidos,
    getAllPedidosPendientesSurt, getPedidosPendientesSurt, createPedidosPendientesSurt, disablePedidosPendientesSurt, updatePedidosPendientesSurt,
    getAllAgregarProveedor, getAgregarProveedor, createAgregarProveedor, disableAgregarProveedor, updateAgregarProveedor,
    getAllProveedores, getProveedores, createProveedores, disableProveedores, updateProveedores,
    getAllProveedoresProducto, getProveedoresProducto, createProveedoresProducto, disableProveedoresProducto, updateProveedoresProducto,
    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO VENTAS ////////////////////////////////////////////



    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO ADMINISTRACION ////////////////////////////////////////////

    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO ADMINISTRACION ////////////////////////////////////////////



    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO ALMACEN ////////////////////////////////////////////

    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO ALMACEN ////////////////////////////////////////////




    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO MARKETING ////////////////////////////////////////////

    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO MARKETING ////////////////////////////////////////////



    ///////////////////////////////////////////// CONTROLADORES SIN UBICAR  ////////////////////////////////////////////
    getAllStatus, getStatus, createStatus, disableStatus, updateStatus, 
    
}