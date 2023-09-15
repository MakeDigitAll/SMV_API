const pool = require('../database')










///////////// CONTROLADORES PARA TABLA DE ALMACEN
//Mostrar los estatus
const getAllAlmacen = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM public."almacenSucursal" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message); 
    }
}
//mostrar un estatus
const getAlmacenes = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "almacenSucursal" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

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
const createAlmacenes = async (req, res, next) =>{
    const {nombre, tipo} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "almacenSucursal" (nombre, tipo, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, '0', '0', NOW() , NOW() ) RETURNING *`,
        [nombre, tipo]
    );

    res.json(result.rows[0]);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableAlmacenes = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "almacenSucursal" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateAlmacenes = async (req, res, next) =>{
    const { id } = req.params;
    const { nombre, tipo} = req.body;

    const result = await pool.query(
        'UPDATE "almacenSucursal" SET "nombre" = $1, tipo = $2, "DateCreation" = CURRENT_DATE WHERE id = $3 RETURNING *',
        [nombre, tipo, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE ALMACENES







///////////// CONTROLADORES PARA TABLA DE ALMACEN
//Mostrar los estatus
const getAllGastosEnvio = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM public."tiposEnvioGastosEnvio" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getGastosEnvios = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "tiposEnvioGastosEnvio" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

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
const createGastosEnvios = async (req, res, next) =>{
    const {activo, costo1, costo2, costo3} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "tiposEnvioGastosEnvio" (activo, costo1, costo2, costo3, tipoEnvio, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, '0', '0', NOW() , NOW() ) RETURNING *`,
        [activo, costo1, costo2, costo3]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableGastosEnvios = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "tiposEnvioGastosEnvio" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateGastosEnvios = async (req, res, next) =>{
    const { id } = req.params;
    const { activo, costo1, costo2, costo3} = req.body;

    const result = await pool.query(
        'UPDATE "tiposEnvioGastosEnvio" SET "activo" = $1, costo1 = $2, costo2 = $3, costo3 = $4, "tipoEnvio" = $5, "creationUpdate" = CURRENT_DATE WHERE id = $6 RETURNING *',
        [activo, costo1, costo2, costo3, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE GASTOS DE ENVIOS






///////////// CONTROLADORES PARA TABLA DE COSTOS DE ENVIOS
//Mostrar los estatus
const getAllCostoEnvio = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM public."costosEnvio" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getCostosEnvios = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "costosEnvio" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

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
const createCostosEnvios = async (req, res, next) =>{
    const {activo, nombre, estado, global, contenedor, costo} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "costosEnvio" (activo, nombre, estado, global, contenedor, costo, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4,, $5, $6, '0', '0', NOW() , NOW() ) RETURNING *`,
        [activo, nombre, estado, global, contenedor, costo]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableCostosEnvios = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "costosEnvio" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateCostosEnvios = async (req, res, next) =>{
    const { id } = req.params;
    const { activo, nombre, estado, global, contenedor, costo} = req.body;

    const result = await pool.query(
        'UPDATE "costosEnvio" SET "activo" = $1, nombre = $2, estado = $3, global = $4, contenedor = $5, costo = $6, "creationUpdate" = CURRENT_DATE WHERE id = $7 RETURNING *',
        [activo, nombre, estado, global, contenedor, costo, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE COSTOS DE ENVIOS





///////////// CONTROLADORES PARA TABLA DE ALMACEN
//Mostrar los estatus
const getAllContenedores = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM public."contenedores" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}
//mostrar un estatus
const getContenedores = async (req, res, next) =>{
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "contenedores" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

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
const createContenedores = async (req, res, next) =>{
    const {activo, nombre, inicio, fin} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "contenedores" (activo, nombre, inicio, fin, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, '0', '0', NOW() , NOW() ) RETURNING *`,
        [activo, nombre, inicio, fin]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disableContenedores = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "contenedores" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

//actualizar un estatus
const updateContenedores = async (req, res, next) =>{
    const { id } = req.params;
    const { activo, nombre, inicio, fin} = req.body;

    const result = await pool.query(
        'UPDATE "contenedores" SET "activo" = $1, nombre = $2, inicio = $3, fin = $4, "creationUpdate" = CURRENT_DATE WHERE id = $5 RETURNING *',
        [activo, nombre, inicio, fin, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE CONTENEDORES




const multer = require("multer"); // Importar multer
const upload = multer(); // Crear una instancia de multer

///////////////////// IMAGEN PRUEBA ////////////////////////
const createImagen = async (req, res, next) =>{
    const imagen = req.file.buffer
    console.log(imagen);
    try {
    const result = await pool.query(
        `INSERT INTO "ImagenPrueba" (imagen) VALUES ($1) RETURNING *`,
        [imagen]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

const getImagenPrueba = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "ImagenPrueba" WHERE id = $1`, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: error.message
        });
        res.send(result.rows[0].imagen);
    } catch (error) {
        console.log(error.message);
    }
};





/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////// CONTROLADORES PARA TABLA DE PEDIDOS
//Mostrar los estatus
const getAllPedidos = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "pedidos" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getPedidos = async (req, res, next) =>{
    try {
        const { id, isDelete } = req.params;
        const result = await pool.query(`SELECT * FROM "pedidos" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

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
const createPedidos = async (req, res, next) =>{
    const {folio, fecha, cotizacion, numeroCliente, cliente , razonSocial, rfc, monto, factura, saldo, surtido, poductos} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "pedidos" (folio, fecha, cotizacion, "numeroCliente", cliente, "razonSocial", rfc, monto, saldo, factura, surtido, poductos, status, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, '0', '0', '0', NOW() , NOW() ) RETURNING *`,
        [folio, fecha, cotizacion, numeroCliente, cliente , razonSocial, rfc, monto, factura, saldo, surtido, poductos]
    );

    res.json(result.json);
    } catch (error) {
        next(error)
    }
};

//deshabilitar un estatus
const disablePedidos = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "pedidos" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

/////////GANAR Pedido
const pedidoGanado = async (req, res, next) =>{
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
        }catch (error) {
                res.status(404).json({
                message: error             
        });
           
        }
    }; 
    /////////Facturar Pedido
const pedidoFacturado = async (req, res, next) =>{
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
        }catch (error) {
                res.status(404).json({
                message: error             
        });
           
        }
    };  
    ////////////Surtido pedido
const pedidoSurtido= async (req, res, next) =>{
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
        }catch (error) {
                res.status(404).json({
                message: error             
        });
           
        }
    };
////////////CANCELAR COTIZACION
const pedidoCancelado = async (req, res, next) =>{
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
            }catch (error) {
                    res.status(404).json({
                    message: error             
            });
               
            }
        };
////////////Devuelto
const pedidoDevuelto = async (req, res, next) =>{
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
        }catch (error) {
                res.status(404).json({
                message: error             
        });
           
        } 
    };
    ////////////Devuelto
const pedidoCerrado = async (req, res, next) =>{
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
        }catch (error) {
                res.status(404).json({
                message: error             
        });
           
        }
    };
        ////////////Pendiente
const PedidosPendientes = async (req, res, next) =>{
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
        }catch (error) {
                res.status(404).json({
                message: error             
        });
           
        }
    };
           ////////////Pendiente
const PedidosEntregado = async (req, res, next) =>{
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
        }catch (error) {
                res.status(404).json({
                message: error             
        });
           
        }
    }; 
         ////////////Despachado
const PedidosDespachados = async (req, res, next) =>{
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
        }catch (error) {
                res.status(404).json({
                message: error             
        });
           
        }
    };
            ////////////Devuelto
const PedidosDevueltos = async (req, res, next) =>{
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
        }catch (error) {
                res.status(404).json({
                message: error             
        });
           
        }
    };
//actualizar un estatus
const updatePedidos = async (req, res, next) =>{
    const { id } = req.params;
    const { folio, fecha, cotizacion, numeroCliente, cliente , razonSocial, rfc, monto, saldo, estatus, surtido, poductos} = req.body;

    const result = await pool.query(
        'UPDATE "pedidos" SET "folio" = $1, fecha = $2, cotizacion = $3, "numeroCliente" = $4, cliente = $5, "razonSocial" = $6, rfc = $7, monto = $8, estatus = $9, surtido = $10, poductos = $11, "creationUpdate" = CURRENT_DATE WHERE id = $12 RETURNING *',
        [folio, fecha, cotizacion, numeroCliente, cliente , razonSocial, rfc, monto, saldo, estatus, surtido, poductos, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE PEDIDOS


/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE Pagos
const getAllPagos = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM  "pagos"`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}

//mostrar un estatus
const getPagos = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "pagos"`, [id]);

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
const createPagos = async (req, res, next) =>{
    const {folio} = req.body

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
const PagosParcial = async (req, res, next) =>{
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
        }catch (error) {
                res.status(404).json({
                message: error             
        });
           
        }
    }; 
    /////////Pagos a Credito
const PagosCredito = async (req, res, next) =>{
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
        }catch (error) {
                res.status(404).json({
                message: error             
        });
           
        }
    }; 
    /////////Pagos a  Parcial
const PagosFacturado = async (req, res, next) =>{
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
        }catch (error) {
                res.status(404).json({
                message: error             
        });
           
        }
    }; 
     /////////Pagos pendiente
const PagosPendiente1 = async (req, res, next) =>{
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
        }catch (error) {
                res.status(404).json({
                message: error             
        });
           
        }
    }; 
       /////////Pagos pendiente
const PagosPendiente2 = async (req, res, next) =>{
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
        }catch (error) {
                res.status(404).json({
                message: error             
        });
           
        }
    };
    
//actualizar un estatus
const updatePagos= async (req, res, next) =>{
    const { id } = req.params;
    const { folio,status} = req.body;

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

/////////////////////////////////////// FIN DE CONTROLADORES PARA TABLA DE Pagos




module.exports = {
    
    getAllAlmacen, getAlmacenes, createAlmacenes, disableAlmacenes, updateAlmacenes,
    getAllGastosEnvio, getGastosEnvios, createGastosEnvios, disableGastosEnvios, updateGastosEnvios,
    getAllCostoEnvio, getCostosEnvios, createCostosEnvios, disableCostosEnvios, updateCostosEnvios,
    getAllContenedores, getContenedores, createContenedores, disableContenedores, updateContenedores,
    
 
    createImagen,getImagenPrueba,

    getAllPedidos,
    getAllPagos,
}