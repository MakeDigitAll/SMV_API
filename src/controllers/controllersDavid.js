const pool = require('../database')




///////////////////////////////////////////////  MICROSERVICIO DE COMPRAS  //////////////////////////////////////////////////////

/////////////// CONTROLADORES PARA TABLA DE NUEVA ORDEN DE COMPRA FOLIOS DE SURTIDO 
//Mostrar los folios
const getAllOrcFoliosSur = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "nuevaOrdenCompraFoliosSurtido" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log("Error: ",error.message);
        console.log("Error en la linea: ", error.stack.split('\n')[1])
    }
}


//mostrar un estatus
const getOrcFoliosSur = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "nuevaOrdenCompraFoliosSurtido" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createOrcFoliosSur = async (req, res, next) =>{
    const {fecha, almacen, producto, cantidad } = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "nuevaOrdenCompraFoliosSurtido" (fecha, almacen, producto, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, '0', '0', NOW() , NOW() ) RETURNING *`,
        [fecha, almacen, producto, cantidad]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
};

//deshabilita un estatus
const disableOrcFoliosSur = async (req, res, next) =>{
    try {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "nuevaOrdenCompraFoliosSurtido" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
};

//actualizar un folio para la nueva orden de compra
const updateOrcFoliosSur = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const { fecha, almacen, producto, cantidad } = req.body;

    const result = await pool.query(
        'UPDATE "nuevaOrdenCompraFoliosSurtido" SET fecha = $1, almacen = $2, producto = $3, cantidad = $4, "DateModification" = NOW() WHERE id = $5 RETURNING *',
        [fecha, almacen, producto, cantidad, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
///////////////////// FIN DE CONTROLADORES PARA TABLA DE NUEVA ORDEN DE COMPRA FOLIOS DE SURTIDO


////////////////////////// CONTROLADORES PARA TABLA DE NUEVA ORDEN DE COMPRA - ARCHIVOS ADJUNTOS 
//Mostrar los folios
const getAllOrcArchvivosAdj = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "nuevasOrdenesCompraArchivosAdjuntos" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log("Error: ",error.message);
        console.log("Error en la linea: ", error.stack.split('\n')[1])
    }
}


//mostrar un estatus
const getOrcArchvivosAdj = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "nuevasOrdenesCompraArchivosAdjuntos" WHERE id = $1 AND "isDeleted" = '0'`, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createOrcArchvivosAdj = async (req, res, next) =>{
    const { numero, archivo} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "nuevasOrdenesCompraArchivosAdjuntos" (numero, archivo, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, '0', '0', NOW() , NOW()) RETURNING *`,
        [ numero, archivo]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
};

//deshabilita un estatus
const disableOrcArchvivosAdj = async (req, res, next) =>{
    try {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "nuevasOrdenesCompraArchivosAdjuntos" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
};

//actualizar un folio para la nueva orden de compra
const updateOrcArchvivosAdj = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const { numero, archivo } = req.body;

    const result = await pool.query(
        'UPDATE "nuevasOrdenesCompraArchivosAdjuntos" SET numero = $1, archivo = $2, "DateModification" = NOW()  WHERE id = $3 RETURNING *',
        [numero, archivo, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE NUEVA ORDEN DE COMPRA - ARCHIVOS ADJUNTOS




///////////////////////////////////// CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - ARCHIVOS ADJUNTOS 
//Mostrar los folios
const getAllOrdenArchivosAdjuntos = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "ordenCompraArchivosAdjuntos" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log("Error: ",error.message);
        console.log("Error en la linea: ", error.stack.split('\n')[1])
    }
}


//mostrar un estatus
const getOrdenArchvivosAdj = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "ordenCompraArchivosAdjuntos" WHERE id = $1 AND "isDeleted" = '0'`, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createOrdenArchivosAdjuntos = async (req, res, next) =>{
    const { numero, archivo} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "ordenCompraArchivosAdjuntos" ( numero, archivo, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, '0', '0', NOW() , NOW() ) RETURNING *`,
        [numero, archivo]
    );

    res.json(result.json);
    } catch (error) {
        console.log("Error",error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        next(error) 
    }
};

//deshabilita un estatus
const disableOrdenArchivosAdjuntos = async (req, res, next) =>{
    try {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "ordenCompraArchivosAdjuntos" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
};

//actualizar un folio para la nueva orden de compra
const updateOrdenArchivosAdjuntos = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const { numero, archivo } = req.body;

    const result = await pool.query(
        'UPDATE "ordenCompraArchivosAdjuntos" SET numero = $1, archivo = $2, "DateModification" = NOW() WHERE id = $3 RETURNING *',
        [numero, archivo, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - ARCHIVOS ADJUNTOS




///////////////////////////// CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - FOLIOS DE SURTIDO 
//Mostrar los folios
const getAllOrdenFoliosSurtidos = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "ordenCompraFoliosSurtido" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log("Error: ",error.message);
        console.log("Error en la linea: ", error.stack.split('\n')[1])
    }
}


//mostrar un estatus
const getOrdenFoliosSurtidos = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "ordenCompraFoliosSurtido" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createOrdenFoliosSurtidos = async (req, res, next) =>{
    const { numero, fecha, almacen, producto, cantidad } = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "ordenCompraFoliosSurtido" (numero, fecha, almacen, producto, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, '0', '0', NOW() , NOW()) RETURNING *`,
        [ numero, fecha, almacen, producto, cantidad]
    );

    res.json(result.json);
    } catch (error) {
        console.log("Error",error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        next(error) 
    }
};

//deshabilita un estatus
const disableOrdenFoliosSurtidos = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "ordenCompraFoliosSurtido" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
};

//actualizar un folio para la nueva orden de compra
const updateOrdenFoliosSurtidos = async (req, res, next) =>{
    try{
    const { id } = req.params;
    const { fecha, numero, almacen, producto, cantidad} = req.body;

    const result = await pool.query(
        'UPDATE "ordenCompraFoliosSurtido" SET fecha = $1, numero = $2, almacen = $3, producto = $4, cantidad = $5, "DateModification" = NOW() WHERE id = $6 RETURNING *',
        [fecha, numero, almacen, producto, cantidad, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - FOLIOS DE SURTIDO



/////////////////////////// CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - LISTADO DE ENTRADAS 
//Mostrar los folios
const getAllOrdenListadoEntrada = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "ordenesCompraListadoEntradas" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
} catch (error) {
    console.log("Error: ",error.message);
    console.log("Error en la linea: ", error.stack.split('\n')[1])
}
}


//mostrar un estatus
const getOrdenListadoEntrada = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "ordenesCompraListadoEntradas" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createOrdenListadoEntrada = async (req, res, next) =>{
    const { numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "ordenesCompraListadoEntradas" (numero, "fechaRegistrada", "fechaCompra", "fechaEntrega", provedor, vendedor, referencia, estatus, total, productos, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10, '0', '0', NOW() , NOW()) RETURNING *`,
        [ numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
};

//deshabilita un estatus
const disableOrdenListadoEntrada = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const { isDelete} = req.body;

    const result = await pool.query(
        `UPDATE "ordenesCompraListadoEntradas" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [isDelete, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
};

//actualizar un folio para la nueva orden de compra
const updateOrdenListadoEntrada = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const { numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos} = req.body;

    const result = await pool.query(
        'UPDATE "ordenesCompraListadoEntradas" SET numero = $1, fechaRegistrada = $2, fechaCompra = $3, fechaEntrega = $4, provedor = $5, vendedor = $6, referencia= $7, estatus = $8, total = $9, productos = $10, "DateModification" = NOW() WHERE id = $11 RETURNING *',
        [numero, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos, id]
    );sur

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
///////////////////////////// FIN DE CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - LISTADO DE ENTRADAS





//////////////// CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - PRODUCTOS EN LA ORDEN DE COMPRA 
//Mostrar los folios
const getAllProductosOrdenCompra = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "productosLaOrdenCompra" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
} catch (error) {
    console.log("Error: ",error.message);
    console.log("Error en la linea: ", error.stack.split('\n')[1])
}
}


//mostrar un estatus
const getProductosOrdenCompra = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "productosLaOrdenCompra" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createProductosOrdenCompra = async (req, res, next) =>{
    const { imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "productosLaOrdenCompra" (imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, '0', '0', NOW() , NOW() ) RETURNING *`,
        [imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
};

//deshabilita un estatus
const disableProductosOrdenCompra = async (req, res, next) =>{
    try{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "productosLaOrdenCompra" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
};

//actualizar un folio para la nueva orden de compra
const updateProductosOrdenCompra = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos} = req.body;

    const result = await pool.query(
        'UPDATE "productosLaOrdenCompra" SET imagen = $1, codigo = $2, producto = $3, cantidad = $4, costo = $5, descuento = $6, total = $7, subtotal = $8, impuestos = $9, "DateModification" = NOW() WHERE id = $10 RETURNING *',
        [imagen, codigo, producto, cantidad, costo, descuento, total, subtotal, impuestos, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
/////////////// FIN DE CONTROLADORES PARA TABLA DE ORDEN DE COMPRA - PRODUCTOS EN LA ORDEN DE COMPRA 



/////////////////////////////////////// CONTROLADORES PARA TABLA DE LISTADO DE PRODUCTOS 
//Mostrar los productos
const getAllListadoProduct = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "listadoProductos" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
} catch (error) {
    console.log("Error: ",error.message);
    console.log("Error en la linea: ", error.stack.split('\n')[1])
}
}


//mostrar un estatus
const getListadoProduct = async (req, res) =>{

    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "listadoProductos" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createListadoProduct = async (req, res, next) =>{
    const { imagen , codigoFabricante, codigoEmpresa, nombre, marca, categoria, codigoSat, actualizado, activo, web, pos, venta, precio} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "listadoProductos" (imagen, "codigoFabricante", "codigoEmpresa", nombre, marca, categoria, "codigoSat", actualizado, activo, web, pos, venta, precio, "isUpdated", "isDeleted", "DateCreation", "DateModification" ) VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10, $11, $12, $13, '0', '0', NOW() , NOW() ) RETURNING *`,
        [imagen, codigoFabricante, codigoEmpresa, nombre, marca, categoria, codigoSat, actualizado, activo, web, pos, venta, precio]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
};

//deshabilita un estatus
const disableListadoProduct = async (req, res, next) =>{
    try {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "listadoProductos" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
    
};

//actualizar un folio para la orden de compra
const updateListadoProduct = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {codigoFabricante, codigoEmpresa, nombre, marca, categoria, codigoSat, actualizado, precio } = req.body;

    const result = await pool.query(
        'UPDATE "listadoProductos" SET "codigoFabricante" = $1, "codigoEmpresa" = $2, nombre = $3, marca = $4, categoria = $5, "codigoSat"= $6, actualizado = $7, precio = $8, "DateModification" = NOW() WHERE id = $9 RETURNING *',
        
        [codigoFabricante, codigoEmpresa, nombre, marca, categoria, codigoSat, actualizado, precio, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
//////////////// FIN DE CONTROLADORES PARA TABLA DE LISTADO DE PRODUCTOS



/////////////////////////////////////// CONTROLADORES PARA TABLA DE PRODUCTOS 
//Mostrar los productos
const getAllProductos = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "productos" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
} catch (error) {
    console.log("Error: ",error.message);
    console.log("Error en la linea: ", error.stack.split('\n')[1])
}
}


//mostrar un estatus
const getProducto = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "productos" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createProducto = async (req, res, next) =>{
    const { imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "productos" (imagen, "codigoEmpresa", "codigoFabricante", nombre, marca, categoria, existencia, "backOrder", cantidad, precio, descuento, total, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, $10, $11, $12, '0', '0', NOW() , NOW() ) RETURNING *`,
        [imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
};

//deshabilitar un estatus
const disableProducto = async (req, res, next) =>{
    try {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "productos" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
};

//actualizar un folio para la nueva orden de compra
const updateProducto = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const { imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total} = req.body;

    const result = await pool.query(
        'UPDATE "productos" SET imagen = $1, "codigoEmpresa" = $2, "codigoFabricante" = $3, nombre = $4, marca = $5, categoria = $6, existencia= $7, "backOrder" = $8, cantidad = $9, precio = $10, descuento = $11, total = $12, "DateModification" = NOW() WHERE id = $13 RETURNING *',
        [imagen, codigoEmpresa, codigoFabricante, nombre, marca, categoria, existencia, backOrder, cantidad, precio, descuento, total, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
//////////////////// FIN DE CONTROLADORES PARA TABLA DE PRODUCTOS


/////////////////////////////////////// CONTROLADORES PARA TABLA DE LISTADO DE PRODUCTOS EN DESCUENTO 
//Mostrar los productos
const getAllListadoProductDesc = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "listadoProductosDescuento" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
} catch (error) {
    console.log("Error: ",error.message);
    console.log("Error en la linea: ", error.stack.split('\n')[1])
}
}


//mostrar un estatus
const getListadoProductDesc = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "listadoProductosDescuento" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createListadoProductDesc = async (req, res, next) =>{
    const { imagen , codigoEmpresa, nombre, desde, hasta, precioBase, descuento, precio, activo} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "listadoProductosDescuento" (imagen, "codigoEmpresa", nombre, desde, hasta, "precioBase", descuento, precio, activo, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9, '0', '0', NOW() , NOW() ) RETURNING *`,
        [imagen, codigoEmpresa, nombre, desde, hasta, precioBase, descuento, precio, activo]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
};

//deshabilitar un estatus
const disableListadoProductDesc = async (req, res, next) =>{
    try {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "listadoProductosDescuento" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
};

//actualizar un folio para la orden de compra
const updateListadoProductDesc = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {imagen , codigoEmpresa, nombre, desde, hasta, precioBase, descuento, precio, activo } = req.body;

    const result = await pool.query(
        'UPDATE "listadoProductosDescuento" SET imagen = $1, "codigoEmpresa" = $2, nombre = $3, desde = $4, hasta = $5, "precioBase"= $6, descuento = $7, precio = $8, activo = $9, "DateModification" = NOW() WHERE id = $10 RETURNING *',
        [imagen , codigoEmpresa, nombre, desde, hasta, precioBase, descuento, precio, activo, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
//////////////// FIN DE CONTROLADORES PARA TABLA DE LISTADO DE PRODUCTOS




///////////////////////////////////////////// FIN DE MICROSERVICIO DE COMPRAS  ////////////////////////////////////////////////////




////////////////////////////////////////////////  MICROSERVICIO DE VENTAS  ///////////////////////////////////////////////////////

///////////// CONTROLADORES PARA TABLA DE COTIZACIONES 
//Mostrar los estatus
const getAllCotizaciones = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "cotizaciones" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
} catch (error) {
    console.log("Error: ",error.message);
    console.log("Error en la linea: ", error.stack.split('\n')[1])
}
}

//mostrar un estatus
const getCotizaciones = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "cotizaciones" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
    
};

//crear un estatus 
const createCotizaciones = async (req, res, next) =>{
    const {folio, fecha, pedido, cliente, vendedor, recurrenciaa, origen, monto, estatus} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "cotizaciones" (folio, fecha, pedido, cliente, vendedor, recurrenciaa, origen, monto, estatus, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, '0', '0', NOW() , NOW()) RETURNING *`,
        [folio, fecha, pedido, cliente, vendedor, recurrenciaa, origen, monto, estatus]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
};

//deshabilitar un estatus
const disableCotizaciones = async (req, res, next) =>{
    try{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "cotizaciones" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
};

//actualizar un estatus
const updateCotizaciones = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {folio, fecha, pedido, cliente, vendedor, recurrenciaa, origen, monto, estatus} = req.body;

    const result = await pool.query(
        'UPDATE "cotizaciones" SET folio = $1, fecha = $2, pedido = $3, cliente = $4, vendedor = $5, recurrenciaa = $6, origen = $7, monto = $8, estatus = $9, "DateModification" = NOW() WHERE id = $10 RETURNING *',
        [folio, fecha, pedido, cliente, vendedor, recurrenciaa, origen, monto, estatus, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE COTIZACIONES


///////////// CONTROLADORES PARA TABLA DE PEDIDO 
//Mostrar los estatus
const getAllPedido = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "pedido" WHERE "isDeleted" = '0' `);
    res.json(allTasks.rows)
} catch (error) {
    console.log("Error: ",error.message);
    console.log("Error en la linea: ", error.stack.split('\n')[1])
}
}

//mostrar un estatus
const getPedido = async (req, res, next) =>{
    try {
        const { id,  } = req.params;
        const result = await pool.query(`SELECT * FROM "pedido" WHERE idpedido = $1 AND "isDeleted" = '0' `, [id,]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }

};

//crear un estatus 
const createPedido = async (req, res, next) =>{
    const {datosPedido, datosEnvio, informacionCliente, productosPedido, formaPago, comentarios} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "pedido" (idpedido, "datosPedido", "datosEnvio", "informacionCliente", "productosPedido", "formaPago", comentarios, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, '0', '0', NOW() , NOW() ) RETURNING *`,
        [datosPedido, datosEnvio, informacionCliente, productosPedido, formaPago, comentarios]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error) 
}   
};

//deshabilitar un estatus
const disablePedido = async (req, res, next) =>{
    try{
    const { idpedido } = req.params;

    const result = await pool.query(
        `UPDATE "pedido" SET "isDeleted" = '1' WHERE idpedido = $1 RETURNING *`,
        [ idpedido]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
};

//actualizar un estatus
const updatePedido = async (req, res, next) =>{
    try {
    const { idpedido } = req.params;
    const { datosPedido, datosEnvio, informacionCliente, productosPedido, formaPago, comentarios} = req.body;

    const result = await pool.query(
        'UPDATE "pedido" SET "datosPedido" = $1, "datosEnvio" = $2, "informacionCliente" = $3, "productosPedido" = $4, "formaPago" = $5, comentarios = $6, "DateModification" = NOW() WHERE idpedido = $7 RETURNING *',
        [datosPedido, datosEnvio, informacionCliente, productosPedido, formaPago, comentarios, idpedido]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE PEDIDO


///////////// CONTROLADORES PARA TABLA DE PEDIDOS
//Mostrar los estatus
const getAllPedidos = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "pedidos" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
} catch (error) {
    console.log("Error: ",error.message);
    console.log("Error en la linea: ", error.stack.split('\n')[1])
}
}

//mostrar un estatus
const getPedidos = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "pedidos" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createPedidos = async (req, res, next) =>{
    const {folio, fecha, cotizacion, numeroCliente, cliente, razonSocial, rfc, monto, saldo, estatus, factura, surtido, poductos} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "pedidos" (folio, fecha, cotizacion, "numeroCliente", cliente, "razonSocial", rfc, monto, saldo, estatus, factura, surtido, poductos,"isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, '0', '0', NOW() , NOW() ) RETURNING *`,
        [folio, fecha, cotizacion, numeroCliente, cliente, razonSocial, rfc, monto, saldo, estatus, factura, surtido, poductos]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
};

//deshabilitar un estatus
const disablePedidos = async (req, res, next) =>{
    try {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "pedidos" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
};

//actualizar un estatus
const updatePedidos = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const { folio, fecha, cotizacion, numeroCliente, cliente, razonSocial, rfc, monto, saldo, estatus, factura, surtido, poductos} = req.body;

    const result = await pool.query(
        'UPDATE "pedidos" SET folio = $1, fecha = $2, cotizacion = $3, "numeroCliente" = $4, cliente = $5, "razonSocial" = $6, rfc = $7, monto = $8, saldo = $9, estatus = $10, factura = $11, surtido = $12, poductos = $13, "DateModification" = NOW() WHERE id = $14 RETURNING *',
        [folio, fecha, cotizacion, numeroCliente, cliente, razonSocial, rfc, monto, saldo, estatus, factura, surtido, poductos, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE PEDIDOS


///////////// CONTROLADORES PARA TABLA DE DETALLES PEDIDO 
//Mostrar los estatus
const getAllDetallePedido = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "detallePedido" WHERE "isDeleted  " = '0'`);
    res.json(allTasks.rows)
} catch (error) {
    console.log("Error: ",error.message);
    console.log("Error en la linea: ", error.stack.split('\n')[1])
}
}

//mostrar un estatus
const getDetallePedido = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "detallePedido" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createDetallePedido = async (req, res, next) =>{
    const { datosPedido, backorder, datosEnvio, informacionCliente, comentariosPedido} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "detallePedido" ( "datosPedido", backorder, "datosEnvio", "informacionCliente", "comentariosPedido", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, '0', '0', NOW() , NOW() ) RETURNING *`,
        [ datosPedido, backorder, datosEnvio, informacionCliente, comentariosPedido]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
};

//deshabilitar un estatus
const disableDetallePedido = async (req, res, next) =>{
    try{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "detallePedido" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
};

//actualizar un estatus
const updateDetallePedido = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {datosPedido, backorder, datosEnvio, informacionCliente, comentariosPedido} = req.body;

    const result = await pool.query(
        'UPDATE "detallePedido" SET "datosPedido" = $1, backorder = $2, "datosEnvio" = $3, "informacionCliente" = $4, "comentariosPedido" = $5, "DateModification" = NOW() WHERE id = $6 RETURNING *',
        [datosPedido, backorder, datosEnvio, informacionCliente, comentariosPedido, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE DETALLES PEDIDO


///////////// CONTROLADORES PARA TABLA DE VER PEDIDO 
//Mostrar los estatus
const getAllFormasPagoPedido = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "formasPagoPedido" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
} catch (error) {
    console.log("Error: ",error.message);
    console.log("Error en la linea: ", error.stack.split('\n')[1])
}
}

//mostrar un estatus
const getFormasPagoPedido = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "formasPagoPedido" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createFormasPagoPedido = async (req, res, next) =>{
    const {fecha, formaPago, cantidadPago, total, faltaPagar, tipoCambio, tc, cantidadPagada} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "formasPagoPedido" (fecha, "formaPago", "cantidadPago", total, "faltaPagar", "tipoCambio", tc, "cantidadPagada", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, '0', '0', NOW() , NOW()) RETURNING *`,
        [ fecha, formaPago, cantidadPago, total, faltaPagar, tipoCambio, tc, cantidadPagada]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
};

//deshabilitar un estatus
const disableFormasPagoPedido = async (req, res, next) =>{
    try {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "formasPagoPedido" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
};

//actualizar un estatus
const updateFormasPagoPedido = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {fecha, formaPago, cantidadPago, total, faltaPagar, tipoCambio, tc, cantidadPagada} = req.body;

    const result = await pool.query(
        'UPDATE "formasPagoPedido" SET fecha = $1, "formaPago" = $2, "cantidadPago" = $3, total = $4, "faltaPagar" = $5, "tipoCambio" = $6, tc = $7, "cantidadPagada" = $8, "DateModification" = NOW() WHERE id = $9 RETURNING *',
        [fecha, formaPago, cantidadPago, total, faltaPagar, tipoCambio, tc, cantidadPagada, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE VER PEDIDO


///////////// CONTROLADORES PARA TABLA DE VER PEDIDO 
//Mostrar los estatus
const getAllVerPedido = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "verPedido" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
} catch (error) {
    console.log("Error: ",error.message);
    console.log("Error en la linea: ", error.stack.split('\n')[1])
}
}

//mostrar un estatus
const getVerPedido = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "verPedido" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createVerPedido = async (req, res, next) =>{
    const {datosPedido, datosEnvio, informacionCliente} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "verPedido" ("datosPedido", "datosEnvio", "informacionCliente", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, '0', '0', NOW() , NOW()) RETURNING *`,
        [ datosPedido, datosEnvio, informacionCliente]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
};

//deshabilitar un estatus
const disableVerPedido = async (req, res, next) =>{
    try {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "verPedido" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }

};

//actualizar un estatus
const updateVerPedido = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {datosPedido, datosEnvio, informacionCliente} = req.body;

    const result = await pool.query(
        'UPDATE "verPedido" SET "datosPedido" = $1, "datosEnvio" = $2, "informacionCliente" = $3, "DateModification" = NOW() WHERE id = $4 RETURNING *',
        [datosPedido, datosEnvio, informacionCliente, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE VER PEDIDO


///////////// CONTROLADORES PARA TABLA DE LOGISTICA DE PEDIDOS 
//Mostrar los estatus
const getAllLogisticaPedidos = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "logistcaPedidos" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
} catch (error) {
    console.log("Error: ",error.message);
    console.log("Error en la linea: ", error.stack.split('\n')[1])
}
}

//mostrar un estatus
const getLogisticaPedidos = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "logistcaPedidos" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createLogisticaPedidos = async (req, res, next) =>{
    const {folio, fechaVenta, cliente, monto, fechaCompromiso, turno, chofer, direccion, fechaEntrega, estatus} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "logistcaPedidos" ("folio ", "fechaVenta", cliente, monto, "fechaCompromiso", turno, chofer, direccion, "fechaEntrega", estatus, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, '0', '0', NOW() , NOW()) RETURNING *`,
        [folio, fechaVenta, cliente, monto, fechaCompromiso, turno, chofer, direccion, fechaEntrega, estatus]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
};

//deshabilitar un estatus
const disableLogisticaPedidos = async (req, res, next) =>{
    try {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "logistcaPedidos" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
};

//actualizar un estatus
const updateLogisticaPedidos = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {folio, fechaVenta, cliente, monto, fechaCompromiso, turno, chofer, direccion, fechaEntrega, estatus} = req.body;

    const result = await pool.query(
        'UPDATE "logistcaPedidos" SET "folio " = $1, "fechaVenta" = $2, "cliente" = $3, "monto" = $4, "fechaCompromiso" = $5, turno = $6, chofer = $7, direccion = $8, "fechaEntrega" = $9, estatus = $10, "DateModification" = NOW() WHERE id = $11 RETURNING *',
        [folio, fechaVenta, cliente, monto, fechaCompromiso, turno, chofer, direccion, fechaEntrega, estatus, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA LOGISTICA DE PEDIDOS


///////////// CONTROLADORES PARA TABLA DE PEDIDOS PENDIENTES POR SURTIR 
//Mostrar los estatus
const getAllPedidosPendientesSurt = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "pedidosPendientesSurtir" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
} catch (error) {
    console.log("Error: ",error.message);
    console.log("Error en la linea: ", error.stack.split('\n')[1])
}
}

//mostrar un estatus
const getPedidosPendientesSurt = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "pedidosPendientesSurtir" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createPedidosPendientesSurt = async (req, res, next) =>{
    const {folio, fecha, cliente, monto, estatus, factura, surtido, parcial} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "pedidosPendientesSurtir" (folio, fecha, cliente, monto, estatus, factura, surtido, parcial, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, '0', '0', NOW() , NOW() ) RETURNING *`,
        [folio, fecha, cliente, monto, estatus, factura, surtido, parcial]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
};

//deshabilitar un estatus
const disablePedidosPendientesSurt = async (req, res, next) =>{
    try {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "pedidosPendientesSurtir" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
};

//actualizar un estatus
const updatePedidosPendientesSurt = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {folio, fecha, cliente, monto, estatus, factura, surtido, parcial} = req.body;

    const result = await pool.query(
        'UPDATE "pedidosPendientesSurtir" SET folio = $1, fecha = $2, cliente = $3, monto = $4, estatus = $5, factura = $6, surtido = $7, parcial = $8, "DateModification" = NOW() WHERE id = $9 RETURNING *',
        [folio, fecha, cliente, monto, estatus, factura, surtido, parcial, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE PEDIDO PENDIENTE POR SURTIR


///////////// CONTROLADORES PARA TABLA DE AGREGAR PROVEEDOR 
//Mostrar los estatus
const getAllAgregarProveedor = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "agregarProvedor" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
} catch (error) {
    console.log("Error: ",error.message);
    console.log("Error en la linea: ", error.stack.split('\n')[1])
}
}

//mostrar un estatus
const getAgregarProveedor = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "agregarProvedor" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message); 
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createAgregarProveedor = async (req, res, next) =>{
    const { provedor} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "agregarProvedor" (provedor, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, '0', '0', NOW() , NOW() ) RETURNING *`,
        [provedor]
    );

    res.json(result.json);
} catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error) 
}
};

//deshabilitar un estatus
const disableAgregarProveedor = async (req, res, next) =>{
    try {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "agregarProvedor" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "la tarea no se puede actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    next(error)
    
    }
};

//actualizar un estatus
const updateAgregarProveedor = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const {provedor} = req.body;

    const result = await pool.query(
        'UPDATE "agregarProvedor" SET provedor = $1, "DateModification" = NOW() WHERE id = $2 RETURNING *',
        [provedor, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la base de datos"
    });
    res.json(result.rows[0]);
    } catch (error) {
    console.log("Error",error.message);
    console.log("linea de error:", error.stack.split('\n')[1]);
    //return res.json(result.rows[0]);
    }
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
    const {nombre, razonSocial, rfc, ciudad, estado, pais, productos} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "provedores" (nombre, "razonSocial", rfc, ciudad, estado, pais, productos, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, '0', '0', NOW() , NOW() ) RETURNING *`,
        [nombre, razonSocial, rfc, ciudad, estado, pais, productos]
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
    const {nombreProvedor, unidadesCompradas, ultimaCompra} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "provprovedoresProductoedores" ("nombreProvedor", "unidadesCompradas", "ultimaCompra", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, '0', '0', NOW() , NOW() ) RETURNING *`,
        [nombreProvedor, unidadesCompradas, ultimaCompra]
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
const getStatus = async (req, res, next) =>{
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






/*AQUI DE IGUAL MANERA LOS NOMBRES DE LOS CONTROLADORES DE CADA TABLA ESTARAN ACOMODADOS POR MICROSERVICIOS
POR LO CUAL SE TENDRA QUE RESPETAR EL ORDEN MENCONADO DE CADA UNO DEPENDIENDO AL MICROSERVICIO QUE PERTENEZCA CADA TABLA DE 
LA BASE DE DATOS 
CADA RENGLON REPRESENTA A LOS CONTROLADORES DE 1 SOLA TABLA POR LO CUAL SE MANEJARA 1 RENGLON POR TABLA*/

module.exports = {

    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO COMPRAS ////////////////////////////////////////////
    getAllOrcFoliosSur, getOrcFoliosSur, createOrcFoliosSur, disableOrcFoliosSur, updateOrcFoliosSur,
    getAllOrcArchvivosAdj,getOrcArchvivosAdj, createOrcArchvivosAdj, disableOrcArchvivosAdj,updateOrcArchvivosAdj,
    getAllOrdenArchivosAdjuntos,getOrdenArchvivosAdj, createOrdenArchivosAdjuntos, disableOrdenArchivosAdjuntos, updateOrdenArchivosAdjuntos,
    getAllOrdenFoliosSurtidos,getOrdenFoliosSurtidos,createOrdenFoliosSurtidos, disableOrdenFoliosSurtidos, updateOrdenFoliosSurtidos,
    getAllOrdenListadoEntrada, getOrdenListadoEntrada, createOrdenListadoEntrada, disableOrdenListadoEntrada, updateOrdenListadoEntrada,
    getAllListadoProduct,getListadoProduct,createListadoProduct,disableListadoProduct,updateListadoProduct,
    getAllProductos,getProducto,createProducto,disableProducto,updateProducto,
    getAllProductosOrdenCompra, getProductosOrdenCompra, createProductosOrdenCompra, disableProductosOrdenCompra, updateProductosOrdenCompra,
    getAllListadoProductDesc,getListadoProductDesc, createListadoProductDesc, disableListadoProductDesc, updateListadoProductDesc,
    

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