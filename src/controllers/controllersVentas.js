const pool = require('../database')
const bcrypt = require("bcryptjs");
const { jsonResponse } = require('../lib/login/jsonResponse');
let error;


////////////////////////////////////////////////  MICROSERVICIO DE VENTAS  ///////////////////////////////////////////////////////

///////////// CONTROLADORES PARA TABLA DE PEDIDO 
//Mostrar los estatus
const getAllPedido = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "pedido" WHERE "isDeleted" = '0' `);
        res.json(allTasks.rows)
    } catch (error) {
        console.log("Error: ", error.message);
        console.log("Error en la linea: ", error.stack.split('\n')[1])
    }
}

//mostrar un estatus
const getPedido = async (req, res, next) => {
    try {
        const { id, } = req.params;
        const result = await pool.query(`SELECT * FROM "pedido" WHERE idpedido = $1 AND "isDeleted" = '0' `, [id,]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
    }

};

//crear un estatus 
const createPedido = async (req, res, next) => {
    const { datosPedido, datosEnvio, informacionCliente, productosPedido, formaPago, comentarios } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO "pedido" (idpedido, "datosPedido", "datosEnvio", "informacionCliente", "productosPedido", "formaPago", comentarios, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, '0', '0', NOW() , NOW() ) RETURNING *`,
            [datosPedido, datosEnvio, informacionCliente, productosPedido, formaPago, comentarios]
        );

        res.json(result.json);
    } catch (error) {
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        next(error)
    }
};

//deshabilitar un estatus
const disablePedido = async (req, res, next) => {
    try {
        const { idpedido } = req.params;

        const result = await pool.query(
            `UPDATE "pedido" SET "isDeleted" = '1' WHERE idpedido = $1 RETURNING *`,
            [idpedido]
        );

        if (result.rows.length === 0)
            return res.status(404).json({
                message: "la tarea no se puede actualizar en la base de datos"
            });
        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        next(error)

    }
};

//actualizar un estatus
const updatePedido = async (req, res, next) => {
    try {
        const { idpedido } = req.params;
        const { datosPedido, datosEnvio, informacionCliente, productosPedido, formaPago, comentarios } = req.body;

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
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        //return res.json(result.rows[0]);
    }
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE PEDIDO



///////////// CONTROLADORES PARA TABLA DE DETALLES PEDIDO 
//Mostrar los estatus
const getAllDetallePedido = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "detallePedido" WHERE "isDeleted  " = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log("Error: ", error.message);
        console.log("Error en la linea: ", error.stack.split('\n')[1])
    }
}

//mostrar un estatus
const getDetallePedido = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "detallePedido" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createDetallePedido = async (req, res, next) => {
    const { datosPedido, backorder, datosEnvio, informacionCliente, comentariosPedido } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO "detallePedido" ( "datosPedido", backorder, "datosEnvio", "informacionCliente", "comentariosPedido", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, '0', '0', NOW() , NOW() ) RETURNING *`,
            [datosPedido, backorder, datosEnvio, informacionCliente, comentariosPedido]
        );

        res.json(result.json);
    } catch (error) {
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        next(error)
    }
};

//deshabilitar un estatus
const disableDetallePedido = async (req, res, next) => {
    try {
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
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        next(error)

    }
};

//actualizar un estatus
const updateDetallePedido = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { datosPedido, backorder, datosEnvio, informacionCliente, comentariosPedido } = req.body;

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
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        //return res.json(result.rows[0]);
    }
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE DETALLES PEDIDO


///////////// CONTROLADORES PARA TABLA DE VER PEDIDO 
//Mostrar los estatus
const getAllFormasPagoPedido = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "formasPagoPedido" WHERE "isDeleted" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log("Error: ", error.message);
        console.log("Error en la linea: ", error.stack.split('\n')[1])
    }
}

//mostrar un estatus
const getFormasPagoPedido = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "formasPagoPedido" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createFormasPagoPedido = async (req, res, next) => {
    const { fecha, formaPago, cantidadPago, total, faltaPagar, tipoCambio, tc, cantidadPagada } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO "formasPagoPedido" (fecha, "formaPago", "cantidadPago", total, "faltaPagar", "tipoCambio", tc, "cantidadPagada", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, '0', '0', NOW() , NOW()) RETURNING *`,
            [fecha, formaPago, cantidadPago, total, faltaPagar, tipoCambio, tc, cantidadPagada]
        );

        res.json(result.json);
    } catch (error) {
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        next(error)
    }
};

//deshabilitar un estatus
const disableFormasPagoPedido = async (req, res, next) => {
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
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        next(error)

    }
};

//actualizar un estatus
const updateFormasPagoPedido = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { fecha, formaPago, cantidadPago, total, faltaPagar, tipoCambio, tc, cantidadPagada } = req.body;

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
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        //return res.json(result.rows[0]);
    }
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE VER PEDIDO


///////////// CONTROLADORES PARA TABLA DE VER PEDIDO 
//Mostrar los estatus
const getAllVerPedido = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "verPedido" WHERE "isDeleted" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log("Error: ", error.message);
        console.log("Error en la linea: ", error.stack.split('\n')[1])
    }
}

//mostrar un estatus
const getVerPedido = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "verPedido" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createVerPedido = async (req, res, next) => {
    const { datosPedido, datosEnvio, informacionCliente } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO "verPedido" ("datosPedido", "datosEnvio", "informacionCliente", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, '0', '0', NOW() , NOW()) RETURNING *`,
            [datosPedido, datosEnvio, informacionCliente]
        );

        res.json(result.json);
    } catch (error) {
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        next(error)
    }
};

//deshabilitar un estatus
const disableVerPedido = async (req, res, next) => {
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
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        next(error)

    }

};

//actualizar un estatus
const updateVerPedido = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { datosPedido, datosEnvio, informacionCliente } = req.body;

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
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        //return res.json(result.rows[0]);
    }
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE VER PEDIDO


///////////// CONTROLADORES PARA TABLA DE LOGISTICA DE PEDIDOS 
//Mostrar los estatus
const getAllLogisticaPedidos = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "logistcaPedidos" WHERE "isDeleted" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log("Error: ", error.message);
        console.log("Error en la linea: ", error.stack.split('\n')[1])
    }
}

//mostrar un estatus
const getLogisticaPedidos = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "logistcaPedidos" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createLogisticaPedidos = async (req, res, next) => {
    const { folio, fechaVenta, cliente, monto, fechaCompromiso, turno, chofer, direccion, fechaEntrega, estatus } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO "logistcaPedidos" ("folio ", "fechaVenta", cliente, monto, "fechaCompromiso", turno, chofer, direccion, "fechaEntrega", estatus, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, '0', '0', NOW() , NOW()) RETURNING *`,
            [folio, fechaVenta, cliente, monto, fechaCompromiso, turno, chofer, direccion, fechaEntrega, estatus]
        );

        res.json(result.json);
    } catch (error) {
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        next(error)
    }
};

//deshabilitar un estatus
const disableLogisticaPedidos = async (req, res, next) => {
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
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        next(error)

    }
};

//actualizar un estatus
const updateLogisticaPedidos = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { folio, fechaVenta, cliente, monto, fechaCompromiso, turno, chofer, direccion, fechaEntrega, estatus } = req.body;

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
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        //return res.json(result.rows[0]);
    }
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA LOGISTICA DE PEDIDOS


///////////// CONTROLADORES PARA TABLA DE PEDIDOS PENDIENTES POR SURTIR 
//Mostrar los estatus
const getAllPedidosPendientesSurt = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "pedidosPendientesSurtir" WHERE "isDeleted" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log("Error: ", error.message);
        console.log("Error en la linea: ", error.stack.split('\n')[1])
    }
}

//mostrar un estatus
const getPedidosPendientesSurt = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "pedidosPendientesSurtir" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createPedidosPendientesSurt = async (req, res, next) => {
    const { folio, fecha, cliente, monto, estatus, factura, surtido, parcial } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO "pedidosPendientesSurtir" (folio, fecha, cliente, monto, estatus, factura, surtido, parcial, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, '0', '0', NOW() , NOW() ) RETURNING *`,
            [folio, fecha, cliente, monto, estatus, factura, surtido, parcial]
        );

        res.json(result.json);
    } catch (error) {
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        next(error)
    }
};

//deshabilitar un estatus
const disablePedidosPendientesSurt = async (req, res, next) => {
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
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        next(error)

    }
};

//actualizar un estatus
const updatePedidosPendientesSurt = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { folio, fecha, cliente, monto, estatus, factura, surtido, parcial } = req.body;

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
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        //return res.json(result.rows[0]);
    }
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE PEDIDO PENDIENTE POR SURTIR


///////////// CONTROLADORES PARA TABLA DE AGREGAR PROVEEDOR 
//Mostrar los estatus
const getAllAgregarProveedor = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "agregarProvedor" WHERE "isDeleted" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log("Error: ", error.message);
        console.log("Error en la linea: ", error.stack.split('\n')[1])
    }
}

//mostrar un estatus
const getAgregarProveedor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "agregarProvedor" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: 'Esta tarea no existe en la base de datos o puede que este deshabilitada'
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
    }
};

//crear un estatus 
const createAgregarProveedor = async (req, res, next) => {
    const { provedor } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO "agregarProvedor" (provedor, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, '0', '0', NOW() , NOW() ) RETURNING *`,
            [provedor]
        );

        res.json(result.json);
    } catch (error) {
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        next(error)
    }
};

//deshabilitar un estatus
const disableAgregarProveedor = async (req, res, next) => {
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
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        next(error)

    }
};

//actualizar un estatus
const updateAgregarProveedor = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { provedor } = req.body;

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
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split('\n')[1]);
        //return res.json(result.rows[0]);
    }
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE AGREGAR PROVEEDORES


///////////// CONTROLADORES PARA TABLA DE AGREGAR PROVEEDORES 
//Mostrar los estatus
const getAllProveedores = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "provedores" WHERE "isDelete" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getProveedores = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "provedores" WHERE id = $1 AND "isDelete" = '0' `, [id]);

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
const createProveedores = async (req, res, next) => {
    const { nombre, razonSocial, rfc, ciudad, estado, pais, productos } = req.body

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
const disableProveedores = async (req, res, next) => {
    const { id } = req.params;
    const { isDelete } = req.body;

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
const updateProveedores = async (req, res, next) => {
    const { id } = req.params;
    const { nombre, razonSocial, rfc, ciudad, estado, pais, productos, creationUpdate } = req.body;

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
const getAllProveedoresProducto = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "provedoresProducto" WHERE "isDelete" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getProveedoresProducto = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "provedoresProducto" WHERE id = $1 AND "isDelete" = '0' `, [id]);

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
const createProveedoresProducto = async (req, res, next) => {
    const { nombreProvedor, unidadesCompradas, ultimaCompra } = req.body

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
const disableProveedoresProducto = async (req, res, next) => {
    const { id } = req.params;
    const { isDelete } = req.body;

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
const updateProveedoresProducto = async (req, res, next) => {
    const { id } = req.params;
    const { nombreProvedor, unidadesCompradas, ultimaCompra, creationUpdate } = req.body;

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



const getAllCotizaciones = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "cotizaciones" WHERE "isDeleted" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getCotizaciones = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "cotizaciones" WHERE folio = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createCotizaciones = async (req, res, next) => {
    console.log("entro la funcion para la cotizacion")
    const document = JSON.parse(req.body.document);
    console.log(document);

    const { idCliente, idVendedor, fecha, recurrencia, envio, comentarios, neto, descuento, subTotal, impuestos, total } = document

    if (!!!idCliente || !!!idVendedor || !!!fecha || !!!recurrencia || !!!envio || !!!comentarios || !!!neto || !!!descuento || !!!subTotal || !!!impuestos || !!!total) {
        return res.status(400).json(
            jsonResponse(400, {
                error: "Faltan datos",
            })
        );
    }
    try {
        const result = await pool.query(
            `INSERT INTO "cotizaciones" ( "idCliente", "idVendedor", "fecha", "recurrencia", "envio", "comentarios", "neto", "descuento", "subTotal", "impuestos", "total", "status", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, '0', '0', '0', NOW() , NOW() ) RETURNING *`,
            [idCliente, idVendedor, fecha, recurrencia, envio, comentarios, neto, descuento, subTotal, impuestos, total]
        );
        const idCotizacion = result.rows[0].folio
        console.log("id cotizacion", idCotizacion);
        res.json(result.rows[0].folio);
    } catch (error) {
        next(error)
    }
};

const createProductosCotizados = async (req, res, next) => {
    console.log("entro la funcion para los productos cotizados")
    const document2 = JSON.parse(req.body.document2);
    console.log(document2);

    const { idCotizacion, idproducto, cantidadProducto } = document2

    if (!!!idCotizacion || !!!idproducto || !!!cantidadProducto) {
        return res.status(400).json(
            jsonResponse(400, {
                error: "Faltan datos",
            })
        );
    }
    try {
        const result = await pool.query(
            `INSERT INTO "productosCotizados" ( "idCotizacion", "idProducto", "cantidad", "active", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, '1', '0', '0', NOW() , NOW() ) RETURNING *`,
            [idCotizacion, idproducto, cantidadProducto]
        );
        res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableCotizaciones = async (req, res, next) => {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "cotizaciones" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};
/////////GANAR COTIZACION
const cotizacionGanada = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."cotizaciones" SET "status" = '1' WHERE folio = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
///////// COTIZACION Perdida
const cotizacionPerdida = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."cotizaciones" SET "status" = '2' WHERE folio = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
////////////CANCELAR COTIZACION
const cotizacionCancelada = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."cotizaciones" SET "status" = '3' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
//////////// COTIZACION Vencida
const cotizacionVencida = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."cotizaciones" SET "status" = '4' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
//actualizar un estatus
const updateCotizaciones = async (req, res, next) => {
    const { id } = req.params;
    const document = JSON.parse(req.body.document);
    const { idCliente, idVendedor, fecha, recurrencia, envio, comentarios, neto, descuento, subTotal, impuestos, total } = document;

    const result = await pool.query(
        'UPDATE "cotizaciones" SET "idCliente" = $1, "idVendedor" = $2, "fecha" = $3, "recurrencia" = $4, "envio" = $5, "comentarios" = $6, "neto" = $7, "descuento" = $8, "subTotal" = $9, "impuestos" = $10, "total" = $11, "DateModification" = CURRENT_DATE WHERE id = $7 RETURNING *',
        [idCliente, idVendedor, fecha, recurrencia, envio, comentarios, neto, descuento, subTotal, impuestos, total, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE COTIZACIONES





///////////// CONTROLADORES PARA TABLA DE PEDIDOS
//Mostrar los estatus
const getAllPedidos = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "pedidos" WHERE "isDeleted" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getPedidos = async (req, res, next) => {
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "pedidos" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createPedidos = async (req, res, next) => {
    const { folio, fecha, cotizacion, numeroCliente, cliente, razonSocial, rfc, monto, factura, saldo, surtido, poductos } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO "pedidos" (folio, fecha, cotizacion, "numeroCliente", cliente, "razonSocial", rfc, monto, saldo, factura, surtido, poductos, status, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, '0', '0', '0', NOW() , NOW() ) RETURNING *`,
            [folio, fecha, cotizacion, numeroCliente, cliente, razonSocial, rfc, monto, factura, saldo, surtido, poductos]
        );

        res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disablePedidos = async (req, res, next) => {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "pedidos" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};

/////////GANAR Pedido
const pedidoGanado = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."pedidos" SET "status" = '1' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
/////////Facturar Pedido
const pedidoFacturado = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."pedidos" SET "status" = '2' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
////////////Surtido pedido
const pedidoSurtido = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."pedidos" SET "status" = '3' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
////////////CANCELAR COTIZACION
const pedidoCancelado = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."pedidos" SET "status" = '4' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
////////////Devuelto
const pedidoDevuelto = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."pedidos" SET "status" = '5' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
////////////Devuelto
const pedidoCerrado = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."pedidos" SET "status" = '6' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
////////////Pendiente
const PedidosPendientes = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."pedidos" SET "status" = '7' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
////////////Pendiente
const PedidosEntregado = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."pedidos" SET "status" = '8' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
////////////Despachado
const PedidosDespachados = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."pedidos" SET "status" = '9' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
////////////Devuelto
const PedidosDevueltos = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."pedidos" SET "status" = '10' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
//actualizar un estatus
const updatePedidos = async (req, res, next) => {
    const { id } = req.params;
    const { folio, fecha, cotizacion, numeroCliente, cliente, razonSocial, rfc, monto, saldo, estatus, surtido, poductos } = req.body;

    const result = await pool.query(
        'UPDATE "pedidos" SET "folio" = $1, fecha = $2, cotizacion = $3, "numeroCliente" = $4, cliente = $5, "razonSocial" = $6, rfc = $7, monto = $8, estatus = $9, surtido = $10, poductos = $11, "creationUpdate" = CURRENT_DATE WHERE id = $12 RETURNING *',
        [folio, fecha, cotizacion, numeroCliente, cliente, razonSocial, rfc, monto, saldo, estatus, surtido, poductos, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE PEDIDOS



///////////// CONTROLADORES PARA TABLA DE REPORTE DE COMISION
//Mostrar los estatus
const getAllReporteComision = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "reporteComisiones" WHERE "isDeleted" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getReporteComision = async (req, res, next) => {
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "reporteComisiones" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createReporteComision = async (req, res, next) => {
    const { fecha, folio, cliente, vendedor, importe, tc, moneda, comision, porcentajeComision } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO "reporteComisiones" (fecha, folio, cliente, vendedor, importe, tc, moneda, comision, "%comision", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, '0', '0', NOW() , NOW() ) RETURNING *`,
            [fecha, folio, cliente, vendedor, importe, tc, moneda, comision, porcentajeComision]
        );

        res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableReporteComision = async (req, res, next) => {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "reporteComisiones" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateReporteComision = async (req, res, next) => {
    const { id } = req.params;
    const { fecha, folio, cliente, vendedor, importe, tc, moneda, comision, porcentajeComision } = req.body;

    const result = await pool.query(
        'UPDATE "reporteComisiones" SET "fecha" = $1, folio = $2, cliente = $3, vendedor = $4, vendedor = $5, tc = $6, moneda = $7, comision = $8, "%comision" = $9, "creationUpdate" = CURRENT_DATE WHERE id = $10 RETURNING *',
        [fecha, folio, cliente, vendedor, importe, tc, moneda, comision, porcentajeComision, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE REPORTE DE COMISION




///////////// CONTROLADORES PARA TABLA DE LISTADO DE CLIENTES
//Mostrar los estatus
const getAllListadoClientes = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM public."clientes" WHERE "isDeleted" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getListadoClientes = async (req, res, next) => {
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "clientes" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("falle");
    }
};
//mostrar un estatus
const getImageClient = async (req, res, next) => {

    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "clientes" WHERE "isDeleted" = '0'`, [
            id,
        ]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message,
            });
        res.send(result.rows[0].imagen);
    } catch (error) {
        console.log(error.message);
    }
};
//crear un estatus 
const createListadoClientes = async (req, res, next) => {

    const document = JSON.parse(req.body.document);
    const { nombreComercial, giro, telefono, whatsApp, correo, contactoPrincipal, condicionesPago, cuenta, vendedorAsignado, listaPrecios, diasCredito, limiteCredito, saldoPendiente, creditoDisponible } = document;

    try {
        const result = await pool.query(
            `INSERT INTO "clientes" ("nombreComercial", "giro", "telefono", "whatsApp", "email", "contacto", "condicionesPago", "cuenta", "vendedor", "listaPrecios", "diasCredito", "limiteCredito", "saldoPentiente", "creditoDisponible", "activo", "registro", "actualizacion", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, '1', NOW() , NOW(), '0', '0', NOW() , NOW() ) RETURNING *`,
            [nombreComercial, giro, telefono, whatsApp, correo, contactoPrincipal, condicionesPago, cuenta, vendedorAsignado, listaPrecios, diasCredito, limiteCredito, saldoPendiente, creditoDisponible]
        );

        res.json(result.json);
    } catch (error) {
        console.log(error.message)
    }
};

//deshabilitar un estatus
const disableListadoClientes = async (req, res, next) => {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "clientes" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateListadoClientes = async (req, res, next) => {
    const { id } = req.params;
    const document = JSON.parse(req.body.document);
    const { nombreComercial, giro, telefono, whatsApp, correo, contactoPrincipal, condicionesPago, cuenta, vendedorAsignado, listaPrecios, diasCredito, limiteCredito, saldoPendiente, creditoDisponible } = document;
    console.log(document);

    const result = await pool.query(
        'UPDATE "clientes" SET "nombreComercial" = $1, "giro" = $2, "telefono" = $3, "whatsApp" = $4, "email" = $5, "contacto" = $6, "condicionesPago" = $7, "cuenta" = $8, "vendedor" = $9, "listaPrecios" = $10, "diasCredito"= $11, "limiteCredito" = $12, "saldoPentiente" = $13, "creditoDisponible" = $14, "actualizacion" = CURRENT_DATE, "DateModification" = CURRENT_DATE WHERE id = $15 RETURNING *',
        [nombreComercial, giro, telefono, whatsApp, correo, contactoPrincipal, condicionesPago, cuenta, vendedorAsignado, listaPrecios, diasCredito, limiteCredito, saldoPendiente, creditoDisponible, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE CLIENTES



///////////// CONTROLADORES PARA TABLA DE CLIENTE FACTURACION
//Mostrar los estatus
const getAllClientesFacturacion = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "fichaClienteFacturacion" WHERE "isDeleted" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getClientesFacturacion = async (req, res, next) => {
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "fichaClienteFacturacion" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createClientesFacturacion = async (req, res, next) => {
    const { formaPago, metodoPago, cfdi, condicionPago, diasCredito, limiteCredito, saldoPendiente, creditoDisponible } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO "fichaClienteFacturacion" ("formaPago", "metodoPago", "usoCFDI", "condicionPago", "diasCreditos", "limiteCredito", "saldoPendiente", "creditoDisponible", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, '0', '0', NOW() , NOW() ) RETURNING *`,
            [formaPago, metodoPago, cfdi, condicionPago, diasCredito, limiteCredito, saldoPendiente, creditoDisponible]
        );

        res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableClientesFacturacion = async (req, res, next) => {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "fichaClienteFacturacion" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateClientesFacturacion = async (req, res, next) => {
    const { id } = req.params;
    const { formaPago, metodoPago, cfdi, condicionPago, diasCredito, limiteCredito, saldoPendiente, creditoDisponible } = req.body;

    const result = await pool.query(
        'UPDATE "fichaClienteFacturacion" SET "formaPago" = $1, folio = $2, cliente = $3, vendedor = $4, vendedor = $5, tc = $6, moneda = $7, comision = $8, "%comision" = $9, "creationUpdate" = CURRENT_DATE WHERE id = $10 RETURNING *',
        [formaPago, metodoPago, cfdi, condicionPago, diasCredito, limiteCredito, saldoPendiente, creditoDisponible, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE CLIENTE FATURACION



///////////// CONTROLADORES PARA TABLA DE CLIENTE CONTACTO
//Mostrar los estatus
const getAllClientesContacto = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "fichaClienteContactos" WHERE "isDeleted" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getClientesContacto = async (req, res, next) => {
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "fichaClienteContactos" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createClientesContacto = async (req, res, next) => {
    const { nombre, contacto, email, comentarios, ubicacion, apellido } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO "fichaClienteContactos" ("nombre", "contacto", "email", "comentarios", "ubicacion", "apellido" "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, '0', '0', NOW() , NOW() ) RETURNING *`,
            [nombre, contacto, email, comentarios, ubicacion, apellido]
        );

        res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableClientesContacto = async (req, res, next) => {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "fichaClienteContactos" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateClientesContacto = async (req, res, next) => {
    const { id } = req.params;
    const { nombre, contacto, email, comentarios, ubicacion, apellido } = req.body;

    const result = await pool.query(
        'UPDATE "fichaClienteContactos" SET "formaPago" = $1, folio = $2, cliente = $3, vendedor = $4, vendedor = $5, tc = $6, moneda = $7, comision = $8, "%comision" = $9, "creationUpdate" = CURRENT_DATE WHERE id = $10 RETURNING *',
        [nombre, contacto, email, comentarios, ubicacion, apellido, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE CLIENTE CONTACTOS




///////////// CONTROLADORES PARA TABLA DE CLIENTE DIRECCION ENVIO

//Obtener la direccion de facturacion de los clientes por su id
const getDirFacturacionCliente = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "fichaClienteFacturacionGenerales" WHERE "idCliente" = $1 AND "isDeleted" = '0' `, [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message
            });
        res.json(result.rows);
    } catch (error) {
        console.log(error.message);
    }
}
//Mostrar los estatus
const getAllClientesDireccionEnvio = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "fichaClienteDireccionesEnvio" WHERE "isDeleted" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getClientesDireccionEnvio = async (req, res, next) => {
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "fichaClienteDireccionesEnvio" WHERE "idCliente" = $1 AND "isDeleted" = '0' `, [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message
            });
        res.json(result.rows);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createClientesDireccionEnvio = async (req, res, next) => {
    const { nombre, direccion, colonia, ciudad, estado, codigoPostal } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO "fichaClienteDireccionesEnvio" ("nombre", "direccion", "colonia", "ciudad", "estado", "codigoPostal", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, '0', '0', NOW() , NOW() ) RETURNING *`,
            [nombre, direccion, colonia, ciudad, estado, codigoPostal]
        );

        res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableClientesDireccionEnvio = async (req, res, next) => {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "fichaClienteDireccionesEnvio" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateClientesDireccionEnvio = async (req, res, next) => {
    const { id } = req.params;
    const { nombre, direccion, colonia, ciudad, estado, codigoPostal } = req.body;

    const result = await pool.query(
        'UPDATE "fichaClienteDireccionesEnvio" SET "formaPago" = $1, folio = $2, cliente = $3, vendedor = $4, vendedor = $5, tc = $6, moneda = $7, comision = $8, "%comision" = $9, "creationUpdate" = CURRENT_DATE WHERE id = $10 RETURNING *',
        [nombre, direccion, colonia, ciudad, estado, codigoPostal, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE CLIENTE DIRECCION ENVIO



///////////// CONTROLADORES PARA TABLA DE CLIENTE ACCESO WEB
//Mostrar los estatus
const getAllClientesAccesoWeb = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "fichaClienteAccesoWeb"`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getClientesAccesoWeb = async (req, res, next) => {
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "fichaClienteAccesoWeb" WHERE id = $1`, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createClientesAccesoWeb = async (req, res, next) => {
    const { password, status, validacion } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO "fichaClienteAccesoWeb" ( "password", "status", "validacion") VALUES ($1, $2, $3) RETURNING *`,
            [password, status, validacion]
        );

        res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableClientesAccesoWeb = async (req, res, next) => {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "fichaClienteAccesoWeb" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateClientesAccesoWeb = async (req, res, next) => {
    const { id } = req.params;
    const { password, status, validacion } = req.body;

    const result = await pool.query(
        'UPDATE "fichaClienteAccesoWeb" SET "formaPago" = $1, folio = $2, cliente = $3, vendedor = $4, vendedor = $5, tc = $6, moneda = $7, comision = $8, "%comision" = $9, "creationUpdate" = CURRENT_DATE WHERE id = $10 RETURNING *',
        [password, status, validacion, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE CLIENTE ACCESO WEB




///////////// CONTROLADORES PARA TABLA DE CLIENTE ESTADOS DE CUENTA
//Mostrar los estatus
const getAllClientesEstadoCuenta = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "fichaClienteEstadoCuenta" WHERE "isDeleted" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getClientesEstadoCuenta = async (req, res, next) => {
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "fichaClienteEstadoCuenta" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createClientesEstadoCuenta = async (req, res, next) => {
    const { fecha, tipo, detalle, cargo, abono, saldo, tc } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO "fichaClienteEstadoCuenta" ("fecha", "tipo", "detalle", "cargo", "abono", "saldo", "tc", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, '0', '0', NOW() , NOW() ) RETURNING *`,
            [fecha, tipo, detalle, cargo, abono, saldo, tc]
        );

        res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableClientesEstadoCuenta = async (req, res, next) => {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "fichaClienteEstadoCuenta" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateClientesEstadoCuenta = async (req, res, next) => {
    const { id } = req.params;
    const { nombre, direccion, colonia, ciudad, estado, codigoPostal } = req.body;

    const result = await pool.query(
        'UPDATE "fichaClienteEstadoCuenta" SET "formaPago" = $1, folio = $2, cliente = $3, vendedor = $4, vendedor = $5, tc = $6, moneda = $7, comision = $8, "%comision" = $9, "creationUpdate" = CURRENT_DATE WHERE id = $10 RETURNING *',
        [nombre, direccion, colonia, ciudad, estado, codigoPostal, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE CLIENTE ESTADOS DE CUENTA




/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE PAGOS
const getAllPagos = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "pagos"`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getPagos = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "pagos"`, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createPagos = async (req, res, next) => {
    const { folio } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO "pagos" (folio) VALUES ($1) RETURNING *`,
            [folio]
        );

        res.json(result.json);
    } catch (error) {
        next(error)
    }
};

/////////Pagos a  Parcial
const PagosParcial = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."pagos" SET "status" = '1' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
/////////Pagos a Credito
const PagosCredito = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."pagos" SET "status" = '2' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
/////////Pagos a  Parcial
const PagosFacturado = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."pagos" SET "status" = '3' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
/////////Pagos pendiente
const PagosPendiente1 = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."pagos" SET "status2" = '1' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};
/////////Pagos pendiente
const PagosPendiente2 = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."pagos" SET "status2" = '2' WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });
        return res.json(result.rows[0]);
    } catch (error) {
        res.status(404).json({
            message: error
        });

    }
};

//actualizar un estatus
const updatePagos = async (req, res, next) => {
    const { id } = req.params;
    const { folio, status } = req.body;

    const result = await pool.query(
        'UPDATE "pagos" SET "folio" = $1, status= $2 WHERE id = $3 RETURNING *',
        [folio, status, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};


//-------------------------------------------------------------------------------------
//                       Controladores para la tabla de promociones 
//-------------------------------------------------------------------------------------


const getAllPromociones = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM  "promocionProducto"`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

const setListadoPromociones = async (req, res, next) => {
    const { idProducto, desde, hasta, precioBase, descuento, precioDescuento, isActive } = req.body;

    try {
        const checkPromotionResult = await pool.query(
            `SELECT * FROM "promocionProducto" WHERE "idProducto" = $1`,
            [idProducto]
        );

        if (checkPromotionResult.rows.length === 0) {
            // No se encontró un registro, por lo que se crea uno nuevo
            const createPromotionResult = await pool.query(
                `INSERT INTO "promocionProducto" ("idProducto", "desde", "hasta", "precioBase", "descuento", "precioDescuento", "isActive", "isUpdated", "isDeleted", "dateCreation", "dateModification" ) VALUES ($1, $2, $3, $4, $5, $6, $7, '0', '0', NOW() , NOW() ) RETURNING *`,
                [idProducto, desde, hasta, precioBase, descuento, precioDescuento, isActive]
            );

            // Actualiza el precio de la tabla productos
            const updateProductResult = await pool.query(
                `UPDATE "productos" SET "descuento" = $1 WHERE "idproducto" = $2 RETURNING *`,
                [descuento, idProducto]
            );

            if (updateProductResult.rows.length === 0)
                return res.status(404).json({
                    message: "La tarea no se pudo actualizar"
                });

            res.json(createPromotionResult.rows[0]);
        } else {
            // Se encontró un registro, por lo que se actualiza
            const updatePromotionResult = await pool.query(
                `UPDATE "promocionProducto" SET "desde" = $1, "hasta" = $2, "precioBase" = $3, "descuento" = $4, "precioDescuento" = $5, "isActive" = $6, "dateModification" = NOW() WHERE "idProducto" = $7 RETURNING *`,
                [desde, hasta, precioBase, descuento, precioDescuento, isActive, idProducto]
            );

            // Actualiza el precio de la tabla productos
            const updateProductResult = await pool.query(
                `UPDATE "productos" SET "descuento" = $1 WHERE "idproducto" = $2 RETURNING *`,
                [descuento, idProducto]
            );

            if (updateProductResult.rows.length === 0)
                return res.status(404).json({
                    message: "La tarea no se pudo actualizar"
                });

            res.json(updatePromotionResult.rows[0]);
        }
    } catch (error) {
        console.log(error);
        next(error);
    }
}

//eliminar la promocion y actualizar el descuento del producto a 0
const deletePromocion = async (req, res, next) => {
    const { id } = req.params;
    try {
        const deletePromotionResult = await pool.query(
            `DELETE FROM "promocionProducto" WHERE "idPromocion" = $1 RETURNING *`,
            [id]
        );
        const idProducto = deletePromotionResult.rows[0].idProducto;

        // Actualiza el precio de la tabla productos
        const updateProductResult = await pool.query(
            `UPDATE "productos" SET "descuento" = '0' WHERE "idproducto" = $1 RETURNING *`,
            [idProducto]
        );

        if (updateProductResult.rows.length === 0)
            return res.status(404).json({
                message: "La tarea no se pudo actualizar"
            });

        res.json(deletePromotionResult.rows[0]);
    } catch (error) {
        console.log(error);
        next(error);
    }
}



/////////////////////////////////////////////////////////////// Tabla Listado Vendedores
const getAllListadoVendedores = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM "listadoVendedores" WHERE "isDeleted" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

const getSellerImage = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "listadoVendedores" WHERE id = $1 AND "isDeleted" = '0' `, [id]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message,
            });
        res.send(result.rows[0].imagen);
    } catch (error) {
        console.log(error.message);
    }
};

//mostrar un estatus
const getListadoVendedores = async (req, res, next) => {
    try {
        const { id, isDeleted } = req.params;
        const result = await pool.query(`SELECT * FROM "listadoVendedores" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createListadoVendedores = async (req, res, next) => {
    const imagen = req.file.buffer
    const document = JSON.parse(req.body.document)


    const { nombre, telefono, sucursal, referenciaWeb, clientes } = document;

    const result = await pool.query(
        `INSERT INTO public."listadoVendedores" ("imagen", "nombre", "telefono", "sucursal", "fechaAlta", "referenciaWeb", "clientes", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, NOW(), $5, $6, '0', '0', NOW() , NOW() ) RETURNING *`,
        [imagen, nombre, telefono, sucursal, referenciaWeb, clientes]
    );
    console.log(result);
    res.json(result.rows[0]);
    // try {

    // } catch (error) {
    //     next(error);
    // }
};


//deshabilitar un estatus
const disableListadoVendedores = async (req, res, next) => {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "listadoVendedores" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateListadoVendedores = async (req, res, next) => {
    const { id } = req.params;
    //const imagen = req.file.buffer
    const document = JSON.parse(req.body.document)


    const { nombre, telefono, sucursal, fechaAlta, referenciaWeb, clientes } = document;

    const result = await pool.query(
        `UPDATE public."listadoVendedores" SET  "nombre" = $1, "telefono" = $2, "sucursal" = $3, "fechaAlta" = $4, "referenciaWeb" = $5, "clientes" = $6, "DateModification" = CURRENT_DATE WHERE id = $7 RETURNING *`,
        [nombre, telefono, sucursal, fechaAlta, referenciaWeb, clientes, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE Pagos




////////////////////////////////////// CONTROLADORES PARA TABLA DE CATEGORIAS
//Mostrar los estatus
const getAllCategorias = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM public."categoria" WHERE "isDeleted" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getCategorias = async (req, res, next) => {
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "categoria" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

//crear un estatus 
const createCategorias = async (req, res, next) => {
    const { nombre, sku } = req.body

    try {
        const result = await pool.query(
            `INSERT INTO "categoria" (nombre, "isUpdated", "isDeleted", "DateCreation", "DateModification", sku) VALUES ($1, '0', '0', NOW() , NOW(), $2 ) RETURNING *`,
            [nombre, sku]
        );

        res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableCategorias = async (req, res, next) => {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "categoria" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateCategorias = async (req, res, next) => {
    const { id } = req.params;
    const { nombre, sku } = req.body;

    const result = await pool.query(
        'UPDATE "categoria" SET "nombre" = $1, "sku" = $2, "DateModification" = CURRENT_DATE WHERE id = $3 RETURNING *',
        [nombre, sku, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE REPORTE DE COMISION


///////////////////////////// CONTROLADORES PARA LISTADO DE PRODUCTOS
const getAllListadoProductos = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM public."productos" WHERE "isDeleted" = '0'`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}



const getListadoProductos = async (req, res, next) => {
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "productos" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message
            });

        res.json(result.rows[0]);
    } catch (error) {
        console.log("falle");
    }
};
//mostrar un estatus
const getImageProducto = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "productos" WHERE "isDeleted" = '0'`, [
            id,
        ]);
        if (result.rows.length === 0)
            return res.status(404).json({
                message: error.message,
            });
        res.send(result.rows[0].imagen);
    } catch (error) {
        console.log(error.message);
    }
};
//crear un estatus 
const createListadoProductos = async (req, res, next) => {
    console.log("entro la funcion de crear producto");
    const imagen = req.file.buffer;

    const document = JSON.parse(req.body.document);
    console.log(document);
    const { nombreProducto, codigoFab, codigoEmp, marcaProd, categoriaProd, codigoSAT, actualizado, precio, existencia, cantidad, descuento, total, activo, web, pos, venta, backOrder } = document;

    if (!!!nombreProducto || !!!codigoFab || !!!codigoEmp || !!!marcaProd || !!!categoriaProd || !!!codigoSAT || !!!actualizado || !!!precio || !!!existencia || !!!cantidad || !!!descuento || !!!total || !!!imagen) {
        return res.status(400).json(
            jsonResponse(400, {
                error: "Faltan datos",
            })
        );
    }
    try {
        const result = await pool.query(
            `INSERT INTO "productos" ("nombre", "codigoFabricante", "codigoEmpresa", "marca", "categoria", "codigoSat", "actualizado", "precio", "existencia", "cantidad", "descuento", "total", "activo", "web", "pos", "venta", "backOrder", "imagen", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, '0', '0', NOW() , NOW() ) RETURNING *`,
            [nombreProducto, codigoFab, codigoEmp, marcaProd, categoriaProd, codigoSAT, actualizado, precio, existencia, cantidad, descuento, total, activo, web, pos, venta, backOrder, imagen]
        );

        res.json(result.json);
    } catch (error) {
        console.log(error.message)
    }
};

//deshabilitar un estatus
const disableListadoProductos = async (req, res, next) => {
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "productos" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateListadoProductos = async (req, res, next) => {
    const { id } = req.params;
    const document = JSON.parse(req.body.document);
    const { nombreComercial, giro, telefono, whatsApp, correo, contactoPrincipal, condicionesPago, cuenta, vendedorAsignado, listaPrecios, diasCredito, limiteCredito, saldoPendiente, creditoDisponible } = document;
    console.log(document);

    const result = await pool.query(
        'UPDATE "productos" SET "nombreComercial" = $1, "giro" = $2, "telefono" = $3, "whatsApp" = $4, "email" = $5, "contacto" = $6, "condicionesPago" = $7, "cuenta" = $8, "vendedor" = $9, "listaPrecios" = $10, "diasCredito"= $11, "limiteCredito" = $12, "saldoPentiente" = $13, "creditoDisponible" = $14, "actualizacion" = CURRENT_DATE, "DateModification" = CURRENT_DATE WHERE id = $15 RETURNING *',
        [nombreComercial, giro, telefono, whatsApp, correo, contactoPrincipal, condicionesPago, cuenta, vendedorAsignado, listaPrecios, diasCredito, limiteCredito, saldoPendiente, creditoDisponible, id]
    );

    if (result.rows.length === 0)
        return res.status(404).json({
            message: "La tarea no se pudo actualizar"
        });

    return res.json(result.rows[0]);
};




////////////////////////////////////////////// FIN DE MICROSERVICIO DE VENTAS  ///////////////////////////////////////////////////



module.exports = {

    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO VENTAS ////////////////////////////////////////////
    getAllCotizaciones, getCotizaciones, createCotizaciones, disableCotizaciones, cotizacionGanada, cotizacionCancelada, updateCotizaciones, cotizacionVencida, cotizacionPerdida, createProductosCotizados,
    getAllPedido, getPedido, createPedido, disablePedido, updatePedido,
    getAllPedidos, getPedidos, createPedidos, disablePedidos, pedidoGanado, pedidoCancelado, updatePedidos, PedidosPendientes, PedidosDevueltos, PedidosDespachados, PedidosEntregado, pedidoCerrado, pedidoDevuelto, pedidoSurtido, pedidoFacturado,
    getAllDetallePedido, getDetallePedido, createDetallePedido, disableDetallePedido, updateDetallePedido,
    getAllFormasPagoPedido, getFormasPagoPedido, createFormasPagoPedido, disableFormasPagoPedido, updateFormasPagoPedido,
    getAllVerPedido, getVerPedido, createVerPedido, disableVerPedido, updateVerPedido,
    getAllLogisticaPedidos, getLogisticaPedidos, createLogisticaPedidos, disableLogisticaPedidos, updateLogisticaPedidos,
    getAllPedidosPendientesSurt, getPedidosPendientesSurt, createPedidosPendientesSurt, disablePedidosPendientesSurt, updatePedidosPendientesSurt,
    getAllAgregarProveedor, getAgregarProveedor, createAgregarProveedor, disableAgregarProveedor, updateAgregarProveedor,
    getAllProveedores, getProveedores, createProveedores, disableProveedores, updateProveedores,
    getAllProveedoresProducto, getProveedoresProducto, createProveedoresProducto, disableProveedoresProducto, updateProveedoresProducto,
    getAllReporteComision, getReporteComision, createReporteComision, disableReporteComision, updateReporteComision,
    getAllListadoClientes, getListadoClientes, createListadoClientes, disableListadoClientes, updateListadoClientes, getImageClient,
    updatePagos, PagosPendiente2, PagosPendiente1, PagosFacturado, PagosCredito, PagosParcial, createPagos, getPagos, getAllPagos,
    getAllPromociones,setListadoPromociones,deletePromocion,
    getAllListadoVendedores, getListadoVendedores, createListadoVendedores, updateListadoVendedores, disableListadoVendedores, getSellerImage,
    getAllClientesFacturacion, getClientesFacturacion, createClientesFacturacion, disableClientesFacturacion, updateClientesFacturacion,
    getAllClientesContacto, getClientesContacto, createClientesContacto, disableClientesContacto, updateClientesContacto,
    getAllClientesDireccionEnvio,getDirFacturacionCliente, getClientesDireccionEnvio, createClientesDireccionEnvio, disableClientesDireccionEnvio, updateClientesDireccionEnvio,
    getAllClientesAccesoWeb, getClientesAccesoWeb, createClientesAccesoWeb, disableClientesAccesoWeb, updateClientesAccesoWeb,
    getAllClientesEstadoCuenta, getClientesEstadoCuenta, createClientesEstadoCuenta, disableClientesEstadoCuenta, updateClientesEstadoCuenta,
    getAllListadoProductos, getListadoProductos, createListadoProductos, getImageProducto, disableListadoProductos, updateListadoProductos,


    getAllCategorias, getCategorias, createCategorias, disableCategorias, updateCategorias,
    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO VENTAS ////////////////////////////////////////////
}