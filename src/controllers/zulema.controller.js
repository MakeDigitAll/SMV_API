const pool = require('../database')
////////////////////////// CONTROLADORES PARA TABLA DE Listado transferencia masiva productos transferencia 
//Mostrar Listado transferencia masiva productos transferencia 
const getAllTransMasProdTrans = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "listadoTransferenciasMasivasProductosTransferencia"  WHERE "isDeleted"='0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
}


//mostrar un Listado transferencia masiva productos transferencia 
const getTransMasProdTrans = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "listadoTransferenciasMasivasProductosTransferencia" WHERE id = $1 AND "isDeleted"='0' `, [id]);


        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
};

//crear un Listado transferencia masiva productos transferencia 
const createTransMasProdTrans = async (req, res, next) =>{
    const {codigo, imagen, nombre, cantidad,} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "listadoTransferenciasMasivasProductosTransferencia" (codigo, imagen, nombre, cantidad,"isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, '0', '0' , NOW(), NOW()) RETURNING *`,
        [codigo, imagen, nombre, cantidad]
    );

    res.json(result.json);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
        next(error)
    }
};

//disable un TransMasProdTrans
const disableTransMasProdTrans = async (req, res, next) =>{
    const { id } = req.params;
    const {isDeleted}=req.body;
    

    const result = await pool.query(
        `UPDATE "listadoTransferenciasMasivasProductosTransferencia" SET "isDeleted"= '1' WHERE id = $1 RETURNING *`, 
        [isDeleted,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar Listado Transferencias Masivas Productos Transferencia"
    });

    return res.json(result.rows[0]);
     
};

//actualizar un Listado transferencia masiva productos transferencia 
const updateTransMasProdTrans= async (req, res, next) =>{
    try{
    const { id } = req.params;
    const { codigo, imagen, nombre, cantidad, DateModification,  } = req.body;

    const result = await pool.query(
        'UPDATE "listadoTransferenciasMasivasProductosTransferencia" SET codigo = $1, imagen = $2, nombre= $3, cantidad= $4, "DateModification"=NOW() WHERE id = $5 RETURNING *',
        [codigo, imagen, nombre, cantidad, DateModification, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en Listado Transferencias Masivas Productos Transferencia"
    });
    res.json(result.rows[0]);
}catch(error){
    console.log("Error",error.message);
    console.log("Linea de error: ",error.stack.split('\n')[1]);
}
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE Listado transferencia masiva productos transferencia 

////////////////////////// CONTROLADORES PARA TABLA DE Marcas producto 
//Mostrar Listado transferencia masiva productos transferencia 
const getAllMarcasproducto = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "marcasProducto" WHERE "isDeleted"='0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
}


//mostrar un Marcas producto 
const getMarcasproducto = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "marcasProducto" WHERE id = $1 AND "isDeleted"='0'`, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona en Marcas Producto"
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
};

//crear una Marca producto
const createMarcasproducto = async (req, res, next) =>{
    const { imagen, marca, catalogo, productos,} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "marcasProducto" (imagen, marca, catalogo, productos,"isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4,'0', '0' , NOW(), NOW()) RETURNING *`,
        [imagen, marca, catalogo, productos]
    );

    res.json(result.json);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
        next(error)
    }
};

//disable un Marcasproducto
const disableMarcasproducto = async (req, res, next) =>{
    const { id } = req.params;
    const {isDeleted}=req.body;
    

    const result = await pool.query(
        `UPDATE "marcasProducto" SET "isDeleted"= '1' WHERE id = $1 RETURNING *`, 
        [isDeleted,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar Marcas Productos"
        
    });

    return res.json(result.rows[0]);
     
};

//actualizar una Marca producto
const updateMarcasproducto= async (req, res, next) =>{
    try{
    const { id } = req.params;
    const { imagen, marca, catalogo, productos,DateModification } = req.body;

    const result = await pool.query(
        'UPDATE "marcasProducto" SET imagen = $1, marca = $2, catalogo= $3, productos= $4, "DateModification"=NOW() WHERE id = $5 RETURNING *',
        [imagen, marca, catalogo, productos, DateModification, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar Marcas Productos"
    });
    return res.json(result.rows[0]);
}catch(error){
    console.log("Error",error.message);
    console.log("Linea de error: ",error.stack.split('\n')[1]);
};
}
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE Marcas producto 

////////////////////////// CONTROLADORES PARA TABLA DE Productos cotizados
//Mostrar Productos cotizados
const getAllProductoscotizados = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "productosCotizados" WHERE "isDeleted"='0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
}


//mostrar un Productoscotizados
const getProductoscotizados = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "productosCotizados" WHERE id = $1 AND "isDeleted"='0'`, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona Productos Cotizados"
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
};

//crear una Productoscotizados
const createProductoscotizados = async (req, res, next) =>{
    const { imagen, codigo, nombre, marca, cantidad, inventario, precioUnitario, descuento, total,} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "productosCotizados" (imagen, codigo, nombre, marca, cantidad, inventario, "precioUnitario", descuento, total, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, '0', '0' , NOW(), NOW()) RETURNING *`,
        [imagen, codigo, nombre, marca, cantidad, inventario, precioUnitario, descuento, total]
    );

    res.json(result.json);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
        next(error)
    }
};

//disable un Productoscotizados
const disableProductoscotizados = async (req, res, next) =>{
    const { id } = req.params;
    const {isDeleted}=req.body;
    

    const result = await pool.query(
        `UPDATE "productosCotizados" SET "isDeleted"= '1' WHERE id = $1 RETURNING *`, 
        [isDeleted,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en Productos Cotizados"
    });

    return res.json(result.rows[0]);
     
};

//actualizar una Productoscotizados
const updateProductoscotizados= async (req, res, next) =>{
    try{
    const { id } = req.params;
    const { imagen, codigo, nombre, marca, cantidad, inventario, precioUnitario, descuento, total,DateModification } = req.body;

    const result = await pool.query(
        'UPDATE "productosCotizados" SET imagen = $1, codigo = $2, nombre= $3, marca= $4, cantidad= $5,inventario= $6, "precioUnitario"= $7, descuento= $8, total= $9, "DateModificatio"=NOW()  WHERE id = $10 RETURNING *',
        [imagen, codigo, nombre, marca, cantidad, inventario, precioUnitario, descuento, total,DateModification , id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar Productos Cotizados"
    });

    return res.json(result.rows[0]);
} catch (error) {
    console.log("Error",error.message);
    console.log("Linea de error: ",error.stack.split('\n')[1]);
}
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE Productoscotizados

////////////////////////// CONTROLADORES PARA TABLA DE Productos pedido
//Mostrar Productos pedido
const getAllProductosPedido = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "productosPedido" WHERE "isDeleted"='0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
}


//mostrar un Productos pedido
const getProductosPedido = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "productosPedido" WHERE id = $1 AND "isDeleted"='0'`, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona Productos Pedido"
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
};

//crear una Productos pedido
const createProductosPedido = async (req, res, next) =>{
    const { imagen, codigo, nombre, cantidad, unitarioMN, descuentoMN, total, devolucion,} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "productosPedido" (imagen, codigo, nombre, cantidad, "unitarioMN", "descuentoMN", total, devolucion, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, '0', '0' , NOW(), NOW()) RETURNING *`,
        [imagen, codigo, nombre, cantidad, unitarioMN, descuentoMN, total, devolucion]
    );

    res.json(result.json);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
        next(error)
    }
};

//disable un productosPedido
const disableProductosPedido = async (req, res, next) =>{
    const { id } = req.params;
    const {isDeleted}=req.body;
    

    const result = await pool.query(
        `UPDATE "productosPedido" SET "isDeleted"= '1' WHERE id = $1 RETURNING *`, 
        [isDeleted,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar Productos Pedido"
    });

    return res.json(result.rows[0]);
     
};

//actualizar una Productos pedido
const updateProductosPedido= async (req, res, next) =>{
    try{
    const { id } = req.params;
    const { imagen, codigo, nombre, cantidad, unitarioMN, descuentoMN, total, devolucion,DateModification} = req.body;

    const result = await pool.query(
        'UPDATE "productosPedido" SET imagen = $1, codigo = $2, nombre= $3, cantidad= $4, "unitarioMN"= $5, "descuentoMN"= $6, total= $7, devolucion= $8,"DateModification"=NOW() WHERE id = $9 RETURNING *',
        [imagen, codigo, nombre, cantidad, unitarioMN, descuentoMN, total, devolucion, DateModification, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar Productos Pedido"
    });

    return res.json(result.rows[0]);
} catch (error) {
    console.log("Error",error.message);
    console.log("Linea de error: ",error.stack.split('\n')[1]);
}
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE Productos pedido

////////////////////////// CONTROLADORES PARA TABLA DE Productos relacionados
//Mostrar Productos relacionados
const getAllProductosRelacionados = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "productosRelacionados" WHERE "isDeleted"='0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
}


//mostrar un Productos relacionados
const getProductosRelacionados = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "productosRelacionados" WHERE id = $1 AND "isDeleted"='0'`, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona Productos Relacionados"
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
};

//crear una Productos relacionados
const createProductosRelacionados = async (req, res, next) =>{
    const { imagen, codigo, nombre,} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "productosRelacionados" (imagen, codigo, nombre,"isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3,'0', '0' , NOW(), NOW()) RETURNING *`,
        [imagen, codigo, nombre]
    );

    res.json(result.json);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
        next(error)
    }
};

//disable un Productos relacionados
const disableProductosRelacionados = async (req, res, next) =>{
    const { id } = req.params;
    const {isDeleted}=req.body;
    

    const result = await pool.query(
        `UPDATE "productosRelacionados" SET "isDeleted"= '1' WHERE id = $1 RETURNING *`, 
        [isDeleted,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar Productos Relacionados"
    });

    return res.json(result.rows[0]);
     
};

//actualizar una Productos relacionados
const updateProductosRelacionados= async (req, res, next) =>{
    try{
    const { id } = req.params;
    const { imagen, codigo, nombre, DateModification } = req.body;

    const result = await pool.query(
        'UPDATE "productosRelacionados" SET imagen = $1, codigo = $2, nombre= $3, "DateModification"= NOW() WHERE id = $4 RETURNING *',
        [imagen, codigo, nombre,DateModification, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar Productos Relacionados"
    });

    return res.json(result.rows[0]);
} catch (error) {
    console.log("Error",error.message);
    console.log("Linea de error: ",error.stack.split('\n')[1]);
}
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE Productos relacionados

////////////////////////// CONTROLADORES PARA TABLA DE Productos surtidos pedido 
//Mostrar Productos surtidos pedido 
const getAllProductosSurtidosPedido = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "productosSurtidosPedido" WHERE "isDeleted"= '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
}


//mostrar un Productos surtidos pedido
const getProductosSurtidosPedido = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "productosSurtidosPedido" WHERE id = $1 "isDeleted"= '0'`, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona en la tabla Productos Surtidos Pedido"
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
};

//crear una Productos surtidos pedido 
const createProductosSurtidosPedido = async (req, res, next) =>{
    const { imagen, codigo, nombre, cantidad, fecha, almacen,} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "productosSurtidosPedido" (imagen, codigo, nombre, cantidad, fecha, almacen, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, '0', '0' , NOW(), NOW()) RETURNING *`,
        [imagen, codigo, nombre, cantidad, fecha, almacen]
    );

    res.json(result.json);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
        next(error)
    }
};

//disable un ProductosSurtidosPedido
const disableProductosSurtidosPedido = async (req, res, next) =>{
    const { id } = req.params;
    const {isDeleted}=req.body;
    

    const result = await pool.query(
        `UPDATE "productosSurtidosPedido" SET "isDeleted"= '1' WHERE id = $1 RETURNING *`, 
        [isDeleted,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la tabla Productos Surtidos Pedido"
    });

    return res.json(result.rows[0]);
     
};
//actualizar una Productos surtidos pedido 
const updateProductosSurtidosPedido= async (req, res, next) =>{
    try{
    const { id } = req.params;
    const { imagen, codigo, nombre, cantidad, fecha, almacen,DateModification } = req.body;

    const result = await pool.query(
        'UPDATE "productosSurtidosPedido" SET imagen = $1, codigo = $2, nombre= $3, cantidad= $4, fecha= $5, almacen= $6, "DateModification"= NOW() WHERE id = $7 RETURNING *',
        [imagen, codigo, nombre, cantidad, fecha, almacen, DateModification, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la tabla Productos Surtidos Pedido"
    });

    return res.json(result.rows[0]);
} catch (error) {
    console.log("Error",error.message);
    console.log("Linea de error: ",error.stack.split('\n')[1]);
}
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE Productos surtidos pedido 

////////////////////////// CONTROLADORES PARA TABLA DE Productos  surtir pedido
//Mostrar Productos  surtir pedido
const getAllProductosSurtirPedido = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "productosSurtirPedido" WHERE "isDeleted"= '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
}


//mostrar un Productos  surtir pedido
const getProductosSurtirPedido = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "productosSurtirPedido" WHERE id = $1 AND "isDeleted"= '0'`, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona en la tabla Productos Surtir Pedido"
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
};

//crear una Productos  surtir pedido
const createProductosSurtirPedido = async (req, res, next) =>{
    const { codigo, nombre, cantidad, faltan, surtir, disponibles, series,} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "productosSurtirPedido" (codigo, nombre, cantidad, faltan, surtir, disponibles, series, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, '0', '0' , NOW(), NOW()) RETURNING *`,
        [codigo, nombre, cantidad, faltan, surtir, disponibles, series]
    );

    res.json(result.json);
    } catch (error) {
        console.log("Error",error.message);
    console.log("Linea de error: ",error.stack.split('\n')[1]);
        next(error)
    }
};

//disable un ProductosSurtirPedido
const disableProductosSurtirPedido = async (req, res, next) =>{
    const { id } = req.params;
    const {isDeleted}=req.body;
    

    const result = await pool.query(
        `UPDATE "productosSurtirPedido" SET "isDeleted"= '1' WHERE id = $1 RETURNING *`, 
        [isDeleted,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la tabla Productos Surtir Pedido"
    });

    return res.json(result.rows[0]);
     
};

//actualizar una Productos  surtir pedido
const updateProductosSurtirPedido= async (req, res, next) =>{
    try{
    const { id } = req.params;
    const { codigo, nombre, cantidad, faltan, surtir, disponibles, series,DateModification } = req.body;

    const result = await pool.query(
        'UPDATE "productosSurtirPedido" SET  codigo = $1, nombre = $2, cantidad= $3, faltan= $4, surtir= $5, disponibles= $6, series= $7, "DateModification"= NOW() WHERE id = $8 RETURNING *',
        [codigo, nombre, cantidad, faltan, surtir, disponibles, series, DateModification, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la tabla Productos Surtir Pedido"
    });

    return res.json(result.rows[0]);
} catch (error) {
    console.log("Error",error.message);
    console.log("Linea de error: ",error.stack.split('\n')[1]);
}
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE Productos  surtir pedido

////////////////////////// CONTROLADORES PARA TABLA DE Productos transferencia record por producto 
//Mostrar Productos transferencia record por producto 
const getAllProductosTransRecordProd = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "productosTransferencia" WHERE "isDeleted"='0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
}


//mostrar un Productos transferencia record por producto 
const getProductosTransRecordProd = async (req, res, next) =>{
    try {
        const { id,isDeleted} = req.params;
        const result = await pool.query(`SELECT * FROM "productosTransferencia" WHERE id= $1 AND "isDeleted"= '0'`, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona en la tabla Productos Transferencia Record Productos"
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
};

//crear una Productos transferencia record por producto 
const createProductosTransRecordProd = async (req, res, next) =>{
    const { codigo, imagen, nombre, cantidad,} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "productosTransferencia" (codigo, imagen, nombre, cantidad, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, '0', '0' , NOW(), NOW()) RETURNING *`,
        [codigo, imagen, nombre, cantidad]
    );

    res.json(result.json);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
        next(error)
    }
};

//disable un productosTransferencia
const disableProductosTransRecordProd = async (req, res, next) =>{
    const { id } = req.params;
    const {isDeleted}=req.body;
    

    const result = await pool.query(
        `UPDATE "productosTransferencia" SET "isDeleted"= '1' WHERE id = $1 RETURNING *`, 
        [isDeleted,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
     
};

//actualizar una Productos transferencia record por producto 
const updateProductosTransRecordProd= async (req, res, next) =>{
    try{
    const { id } = req.params;
    const { codigo, imagen, nombre, cantidad, DateModification} = req.body;

    const result = await pool.query(
        'UPDATE "productosTransferencia" SET  codigo = $1, imagen = $2, nombre= $3, cantidad= $4, "DateModification"= NOW() WHERE id = $5 RETURNING *',
        [codigo, imagen, nombre, cantidad, DateModification, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la tabla Productos Transferencia Record Producto"
    });

    return res.json(result.rows[0]);
} catch (error) {
    console.log("Error",error.message);
    console.log("Linea de error: ",error.stack.split('\n')[1]);
}
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE Productos transferencia record por producto 

////////////////////////// CONTROLADORES PARA TABLA DE  record por producto 
//Mostrar  record por producto 
const getAllRecordProducto = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM "recordProducto" WHERE "isDeleted"= '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
}


//mostrar un  record por producto 
const getRecordProducto = async (req, res, next) =>{
    try {
        const { id,isDeleted} = req.params;
        const result = await pool.query(`SELECT * FROM "recordProducto" WHERE id = $1 AND "isDeleted"='0'`, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: "La tarea no funciona en la tabla Record Producto"
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
    }
};

//crear un record por producto 
const createRecordProducto = async (req, res, next) =>{
    const { fecha, pedido, idProducto, clave, producto, cliente, vendedor, cantidad, monto, total,} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "recordProducto" (fecha, pedido, "idProducto", clave, producto, cliente, vendedor, cantidad, monto, total,"isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, '0', '0' , NOW(), NOW()) RETURNING *`,
        [fecha, pedido, idProducto, clave, producto, cliente, vendedor, cantidad, monto, total]
    );

    res.json(result.json);
    } catch (error) {
        console.log("Error",error.message);
        console.log("Linea de error: ",error.stack.split('\n')[1]);
        next(error)
    }
};

//disable un recordProducto
const disableRecordProducto = async (req, res, next) =>{
    const { id } = req.params;
    const {isDeleted}=req.body;
    

    const result = await pool.query(
        `UPDATE "recordProducto" SET "isDeleted"= '1' WHERE id = $1 RETURNING *`, 
        [isDeleted,id]
    );

    if (result.rowCount === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la tabla Record Producto"
    });

    return res.json(result.rows[0]);
     
};

//actualizar un  record por producto 
const updateRecordProducto = async (req, res, next) =>{
    try{
    const { id } = req.params;
    const {  fecha, pedido, idProducto, clave, producto, cliente, vendedor, cantidad, monto, total, DateModification } = req.body;

    const result = await pool.query(
        'UPDATE "recordProducto" SET  fecha = $1, pedido = $2, "idProducto"= $3, clave= $4, producto= $5, cliente= $6, vendedor= $7, cantidad= $8, monto= $9, total= $10,"DateModification"= NOW() WHERE id = $11 RETURNING *',
        [ fecha, pedido, idProducto, clave, producto, cliente, vendedor, cantidad, monto, total, DateModification, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar en la tabla Record Producto"
    });

    return res.json(result.rows[0]);
} catch (error) {
    console.log("Error",error.message);
    console.log("Linea de error: ",error.stack.split('\n')[1]);
}
};
/////////////////////// FIN DE CONTROLADORES PARA TABLA DE  record por producto 


///////////////////////////////////////////// FIN DE MICROSERVICIO DE PRODUCTOS  ////////////////////////////////////////////////////

module.exports = {
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
}