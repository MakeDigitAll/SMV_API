const pool = require('../database')



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



module.exports = {

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
}