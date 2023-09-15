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
    console.log("linea de error:", error.stack.split('\n')[1])
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
    const { folio, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia,  total, productos} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "ordenesCompraListadoEntradas" (folio, "fechaRegistrada", "fechaCompra", "fechaEntrega", provedor, vendedor, referencia, total, productos, status,"isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8, $9,'0', '0', '0', NOW() , NOW()) RETURNING *`,
        [ folio, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, total, productos]
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
 

/////////Orden parcial
const parcialOrdenListadoEntrada = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."ordenesCompraListadoEntradas" SET "status" = '1' WHERE id = $1 RETURNING *`,
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
/////////orden entregada
const entregasOrdenListadoEntrada = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."ordenesCompraListadoEntradas" SET "status" = '2' WHERE id = $1 RETURNING *`,
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
    /////////Orden rutas
const rutasOrdenListadoEntrada = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."ordenesCompraListadoEntradas" SET "status" = '3' WHERE id = $1 RETURNING *`,
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
     /////////Orden embarque
const  embarqueOrdenListadoEntrada= async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(
            `UPDATE public."ordenesCompraListadoEntradas" SET "status" = '4' WHERE id = $1 RETURNING *`,
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
    /////orden surtido
    const  surtidoOrdenListadoEntrada= async (req, res, next) =>{
        try {
            const { id } = req.params;
            const result = await pool.query(
                `UPDATE public."ordenesCompraListadoEntradas" SET "status" = '5' WHERE id = $1 RETURNING *`,
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
//actualizar un folio para la nueva orden de compra
const updateOrdenListadoEntrada = async (req, res, next) =>{
    try {
    const { id } = req.params;
    const { folio, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos} = req.body;

    const result = await pool.query(
        'UPDATE "ordenesCompraListadoEntradas" SET folio = $1, fechaRegistrada = $2, fechaCompra = $3, fechaEntrega = $4, provedor = $5, vendedor = $6, referencia= $7, estatus = $8, total = $9, productos = $10, "DateModification" = NOW() WHERE id = $11 RETURNING *',
        [folio, fechaRegistrada, fechaCompra, fechaEntrega, provedor, vendedor, referencia, estatus, total, productos, id]
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
    const {nombre, precio, existencia} = req.body;

    const result = await pool.query(
        'UPDATE "buscarProducto" SET nombre = $1, precio = $2, existencia = $3, "DateModification"= NOW() WHERE id = $4 RETURNING *',
        [nombre, precio, existencia, id]
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
    const {nombre, } = req.body;

    const result = await pool.query(
        'UPDATE "categoria" SET nombre = $1, "DateModification"= NOW() WHERE sku = $2 RETURNING *',
        [nombre, sku]
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
    const {codigoEmpresa, nombre, inventario, costoMN, totalMN} = req.body;

    const result = await pool.query(
        'UPDATE "costoProductos" SET "codigoEmpresa" = $1, nombre = $2, inventario = $3, "costoMN" = $4, "totalMN"= $5, "DateModification"= NOW() WHERE id = $6 RETURNING *',
        [codigoEmpresa, nombre, inventario, costoMN, totalMN,  id]
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
    const {codigoFabricante, codigoEmpresa, estufa, marca, minimo, maximo, sucursal, almacen, entradas, salidas, existencia} = req.body;

    const result = await pool.query(
        'UPDATE "historialProducto" SET "codigoFabricante"=$1, "codigoEmpresa"=$2, estufa=$3, marca=$4, minimo=$5, maximo=$6, sucursal=$7, almacen=$8, entradas=$9, salidas=$10, existencia=$11, "DateModification"=NOW() WHERE id = $12 RETURNING *',
        [codigoFabricante, codigoEmpresa, estufa, marca, minimo, maximo, sucursal, almacen, entradas, salidas, existencia,  id]
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
    const {numeroOrdenCompra, fecha, cantidad} = req.body;

    const result = await pool.query(
        'UPDATE "historialProductoUltimasCompras" SET "numeroOrdenCompra"=$1, fecha=$2, cantidad=$3, "DateModification"=NOW() WHERE id = $4 RETURNING *',
        [numeroOrdenCompra, fecha, cantidad, id]
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
    const {numeroPedido, fecha, cantidad} = req.body;

    const result = await pool.query(
        'UPDATE "historialProductoUltimasVentas" SET "numeroPedido"=$1, fecha=$2, cantidad=$3, "DateModification"=NOW () WHERE id = $4 RETURNING *',
        [numeroPedido, fecha, cantidad,id]
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
    const {codigoFabrica, codigoEmpresa, nombre, marca, minimo, maximo, total} = req.body;

    const result = await pool.query(
        'UPDATE "inventarioGeneralReporteInventario" SET "codigoFabrica"=$1, "codigoEmpresa"=$2, nombre=$3, marca=$4, minimo=$5, maximo=$6, total=$7,  "DateModification"=NOW () WHERE id = $18 RETURNING *',
        [codigoFabrica, codigoEmpresa, nombre, marca, minimo, maximo, total, id]
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
    const {codigoFabricante, codigoEmpresa, nombre, activo, precioBaseMN, descuentoMN, precioMN, costoMN, diferenciaMN, margen} = req.body;

    const result = await pool.query(
        'UPDATE "listadoProductosMargenProductos" SET "codigoFabricante"=$1, "codigoEmpresa"=$2, nombre=$3, activo=$4, "precioBaseMN"=$5, "descuentoMN"=$6, "precioMN"=$7, "costoMN"=$8, "diferenciaMN"=$9, margen=$10, "DateModification"=NOW() WHERE id = $11 RETURNING *',
        [codigoFabricante, codigoEmpresa, nombre, activo, precioBaseMN, descuentoMN, precioMN, costoMN, diferenciaMN, margen, id]
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
    const { codigo, nombre, marca, cantidad, inventario, precioUnitario, descuento, total,} = req.body

    try {
    const result = await pool.query(
        `INSERT INTO "productosCotizados" (codigo, nombre, marca, cantidad, inventario, "precioUnitario", descuento, total, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, '0', '0' , NOW(), NOW()) RETURNING *`,
        [codigo, nombre, marca, cantidad, inventario, precioUnitario, descuento, total]
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

const getAllTransIndividual = async (req, res, next) =>{
    try{
        const allTasks = await pool.query(`SELECT * FROM "transferenciaAlmacenesListadoIndividual" WHERE "isDeleted"= '0'`);
        res.json(allTasks.rows)
        } catch (error) {
            console.log("Error",error.message);
            console.log("Linea de error: ",error.stack.split('\n')[1]);
        }
    }

    const createTransIndividual = async (req, res, next) =>{
        const { folio,fecha, codigoEmpresa, nombre, cantidad, deSucursal, delAlmacen, aSucursal, alAlmacen,} = req.body
    
        try {
        const result = await pool.query(
            `INSERT INTO "transferenciaAlmacenesListadoIndividual" (folio, fecha, "codigoEmpresa", nombre, cantidad, "deSucursal", "delAlmacen", "aSucursal", "alAlmacen", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, '0', '0' , NOW(), NOW()) RETURNING *`,
            [folio,fecha, codigoEmpresa, nombre, cantidad, deSucursal, delAlmacen, aSucursal, alAlmacen]
        );
    
        res.json(result.json);
        } catch (error) {
            console.log("Error",error.message);
            console.log("Linea de error: ",error.stack.split('\n')[1]);
            next(error)
        }
    };

    const getAllListadoEntradas = async (req, res, next) =>{
        try{
            const allTasks = await pool.query(`SELECT * FROM "listadoEntradas" WHERE "isDeleted"= '0'`);
            res.json(allTasks.rows)
            } catch (error) {
                console.log("Error",error.message);
                console.log("Linea de error: ",error.stack.split('\n')[1]);
            }
        }
    
        const createListadoEntradas = async (req, res, next) =>{
            const { folio, fecha, codigoEmpresa, producto, cantidad, sucursalAlmacen, tipo, motivo,} = req.body
        
            try {
            const result = await pool.query(
                `INSERT INTO "listadoEntradas" (folio, fecha, "codigoEmpresa", producto, cantidad, "sucursalAlmacen", tipo, motivo, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, '0', '0' , NOW(), NOW()) RETURNING *`,
                [folio, fecha, codigoEmpresa, producto, cantidad, sucursalAlmacen, tipo, motivo]
            );
        
            res.json(result.json);
            } catch (error) {
                console.log("Error",error.message);
                console.log("Linea de error: ",error.stack.split('\n')[1]);
                next(error)
            }
        };

        const getAllListadoSalidas = async (req, res, next) =>{
            try{
                const allTasks = await pool.query(`SELECT * FROM "listadoSalida" WHERE "isDeleted"= '0'`);
                res.json(allTasks.rows)
                } catch (error) {
                    console.log("Error",error.message);
                    console.log("Linea de error: ",error.stack.split('\n')[1]);
                }
            }
        
            const getAllMotivosEntrada = async (req, res, next) =>{
                try{
                    const allTasks = await pool.query(`SELECT * FROM "motivosEntrada" WHERE "isDeleted"= '0'`);
                    res.json(allTasks.rows)
                    } catch (error) {
                        console.log("Error",error.message);
                        console.log("Linea de error: ",error.stack.split('\n')[1]);
                    }
                }
            const createMotivosEntrada = async (req, res, next) =>{
                const { motivo, clase,} = req.body
            
                try {
                const result = await pool.query(
                    `INSERT INTO "motivosEntrada" (motivo, clase, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, '0', '0' , NOW(), NOW()) RETURNING *`,
                    [motivo, clase]
                );
            
                res.json(result.json);
                } catch (error) {
                    console.log("Error",error.message);
                    console.log("Linea de error: ",error.stack.split('\n')[1]);
                    next(error)
                }
            };
            const getMotivosEntrada = async (req, res, next) =>{
                try {
                    const { id,isDeleted} = req.params;
                    const result = await pool.query(`SELECT * FROM "motivosEntrada" WHERE id = $1 AND "isDeleted"='0'`, [id]);
            
                    if (result.rows.length === 0 )
                    return res.status(404).json({
                        message: "La tarea no funciona en la tabla  Motivos Entrada"
                    });
            
                    res.json(result.rows[0]);
                } catch (error) {
                    console.log("Error",error.message);
                    console.log("Linea de error: ",error.stack.split('\n')[1]);
                }
            };
            const updateMotivosEntrada = async (req, res, next) =>{
                try{
                const { id } = req.params;
                const {  motivo,clase,DateModification,} = req.body;
            
                const result = await pool.query(
                    'UPDATE "motivosEntrada" SET  motivo = $1, clase = $2, "DateModification"= NOW() WHERE id = $3 RETURNING *',
                    [ motivo,clase, id]
                );
            
                if (result.rows.length === 0)
                return res.status(404).json({
                    message: "La tarea no se pudo actualizar en la tabla Motivos Entrada"
                });
            
                return res.json(result.rows[0]);
            } catch (error) {
                console.log("Error",error.message);
                console.log("Linea de error: ",error.stack.split('\n')[1]);
            }
            };

            const getAllSucursalesAlmacen = async (req, res, next) =>{
                try{
                    const allTasks = await pool.query(`SELECT * FROM "sucursalesAlmacenesListadoProductos" WHERE "isDeleted"= '0'`);
                    res.json(allTasks.rows)
                    } catch (error) {
                        console.log("Error",error.message);
                        console.log("Linea de error: ",error.stack.split('\n')[1]);
                    }
                }
                const createSucursalesAlmacen = async (req, res, next) => {
                  const { nombre,ciudad,estado,telefono,gerente,almacenes,web } = req.body;

                  try {
                    const result = await pool.query(
                      `INSERT INTO "sucursalesAlmacenesListadoProductos" (nombre, ciudad, estado, telefono, gerente, almacenes, web, "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, '0', '0' , NOW(), NOW()) RETURNING *`,
                      [nombre,ciudad,estado,telefono,gerente,almacenes,web]
                    );

                    res.json(result.json);
                  } catch (error) {
                    console.log("Error", error.message);
                    console.log("Linea de error: ", error.stack.split("\n")[1]);
                    next(error);
                  }
                };
                const getSucursalesAlmacen = async (req, res, next) =>{
                    try {
                        const { id,isDeleted} = req.params;
                        const result = await pool.query(`SELECT * FROM "sucursalesAlmacenesListadoProductos" WHERE id = $1 AND "isDeleted"='0'`, [id]);
                
                        if (result.rows.length === 0 )
                        return res.status(404).json({
                            message: "La tarea no funciona en la sucursales almacen listado productos"
                        });
                
                        res.json(result.rows[0]);
                    } catch (error) {
                        console.log("Error",error.message);
                        console.log("Linea de error: ",error.stack.split('\n')[1]);
                    }
                };
                const updateSucursalesAlmacen = async (req, res, next) =>{
                    try{
                    const { id } = req.params;
                    const { nombre,ciudad,estado,telefono,gerente,almacenes,web,DateModification,} = req.body;
                
                    const result = await pool.query(
                        'UPDATE "sucursalesAlmacenesListadoProductos" SET  nombre=$1, ciudad=$2, estado=$3, telefono=$4, gerente=$5, almacenes=$6, web=$7, "DateModification"= NOW() WHERE id = $8 RETURNING *',
                        [ nombre,ciudad,estado,telefono,gerente,almacenes,web, id]
                    );
                
                    if (result.rows.length === 0)
                    return res.status(404).json({
                        message: "La tarea no se pudo actualizar en la tabla sucursales almacen listado productos"
                    });
                
                    return res.json(result.rows[0]);
                } catch (error) {
                    console.log("Error",error.message);
                    console.log("Linea de error: ",error.stack.split('\n')[1]);
                }
                };

                const disableSucursalesAlmacen = async (req, res, next) =>{
                    const { id } = req.params;
                
                    const result = await pool.query(
                        `UPDATE "sucursalesAlmacenesListadoProductos" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
                        [ id]
                    );
                
                    if (result.rows.length === 0)
                    return res.status(404).json({
                        message: "La tarea no se pudo actualizar"
                    });
                
                    return res.json(result.rows[0]);
                };
                ///Datos
                const getAllSucursalesDatos = async (req, res, next) =>{
                    try{
                        const allTasks = await pool.query(`SELECT * FROM "sucursalesDatos" WHERE "isDeleted"= '0'`);
                        res.json(allTasks.rows)
                        } catch (error) {
                            console.log("Error",error.message);
                            console.log("Linea de error: ",error.stack.split('\n')[1]);
                        }
                    }
                    const createSucursalesDatos= async (req, res, next) => {
                      const { nombreCorto, direccion, colonia, codigoPostal, emailSucursal, rfc, geoUrlMaps, limiteCredito, encabezadoPos, notaEnviosPos, notaTicketPos } = req.body;
    
                      try {
                        const result = await pool.query(
                          `INSERT INTO "sucursalesDatos" ("nombreCorto", direccion, colonia, "codigoPostal", "emailSucursal", rfc, "geoUrlMaps", "limiteCredito", "encabezadoPos", "notaEnviosPos", "notaTicketPos", "isUpdated", "isDeleted", "DateCreation", "DateModification") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, '0', '0' , NOW(), NOW()) RETURNING *`,
                          [nombreCorto, direccion, colonia, codigoPostal, emailSucursal, rfc, geoUrlMaps, limiteCredito, encabezadoPos, notaEnviosPos, notaTicketPos]
                        );
    
                        res.json(result.rows[0]);
                      } catch (error) {
                        console.log("Error", error.message);
                        console.log("Linea de error: ", error.stack.split("\n")[1]);
                        next(error);
                      }
                    };
                    const getSucursalesDatos = async (req, res, next) =>{
                        try {
                            const { id,isDeleted} = req.params;
                            const result = await pool.query(`SELECT * FROM "sucursalesDatos" WHERE id = $1 AND "isDeleted"='0'`, [id]);
                    
                            if (result.rows.length === 0 )
                            return res.status(404).json({
                                message: "La tarea no funciona en la tbla sucursalesDatos"
                            });
                    
                            res.json(result.rows[0]);
                        } catch (error) {
                            console.log("Error",error.message);
                            console.log("Linea de error: ",error.stack.split('\n')[1]);
                        }
                    };
                    const updateSucursalesDatos = async (req, res, next) =>{
                        try{
                        const { id } = req.params;
                        const { nombreCorto, direccion, colonia, codigoPostal, emailSucursal, rfc, geoUrlMaps, limiteCredito, encabezadoPos, notaEnviosPos, notaTicketPos,DateModification,} = req.body;
                    
                        const result = await pool.query(
                            'UPDATE "sucursalesDatos" SET  "nombreCorto"=$1, direccion=$2, colonia=$3, "codigoPostal"=$4, "emailSucursal"=$5, rfc=$6, "geoUrlMaps"=$7, "limiteCredito"=$8, "encabezadoPos"=$9, "notaEnviosPos"=$10, "notaTicketPos"=$11, "DateModification"= NOW() WHERE id = $12 RETURNING *',
                            [ nombreCorto, direccion, colonia, codigoPostal, emailSucursal, rfc, geoUrlMaps, limiteCredito, encabezadoPos, notaEnviosPos, notaTicketPos, id]
                        );
                    
                        if (result.rows.length === 0)
                        return res.status(404).json({
                            message: "La tarea no se pudo actualizar en la tabla sucursalesDatos"
                        });
                    
                        return res.json(result.rows[0]);
                    } catch (error) {
                        console.log("Error",error.message);
                        console.log("Linea de error: ",error.stack.split('\n')[1]);
                    }
                    };
    
                    const disableSucursalesDatos = async (req, res, next) =>{
                        const { id } = req.params;
                        const {isDeleted}=req.body;
                        
                    
                        const result = await pool.query(
                            `UPDATE "sucursalesDatos" SET "isDeleted"= '1' WHERE id = $1 RETURNING *`, 
                            [isDeleted,id]
                        );
                    
                        if (result.rowCount === 0)
                        return res.status(404).json({
                            message: "La tarea no se pudo actualizar en la tabla sucursalesDatos"
                        });
                    
                        return res.json(result.rows[0]);
                         
                    };
///////////////////////////////////////////// FIN DE MICROSERVICIO DE COMPRAS  ////////////////////////////////////////////////////




module.exports = {

    ///////////////////////////////////////////// CONTROLADORES DE MICROSERVICIO COMPRAS ////////////////////////////////////////////
    getAllOrcFoliosSur, getOrcFoliosSur, createOrcFoliosSur, disableOrcFoliosSur, updateOrcFoliosSur,
    getAllOrcArchvivosAdj,getOrcArchvivosAdj, createOrcArchvivosAdj, disableOrcArchvivosAdj,updateOrcArchvivosAdj,
    getAllOrdenArchivosAdjuntos,getOrdenArchvivosAdj, createOrdenArchivosAdjuntos, disableOrdenArchivosAdjuntos, updateOrdenArchivosAdjuntos,
    getAllOrdenFoliosSurtidos,getOrdenFoliosSurtidos,createOrdenFoliosSurtidos, disableOrdenFoliosSurtidos, updateOrdenFoliosSurtidos,
    getAllOrdenListadoEntrada, getOrdenListadoEntrada, createOrdenListadoEntrada, disableOrdenListadoEntrada, updateOrdenListadoEntrada,parcialOrdenListadoEntrada,entregasOrdenListadoEntrada,rutasOrdenListadoEntrada,embarqueOrdenListadoEntrada,surtidoOrdenListadoEntrada,
    getAllListadoProduct,getListadoProduct,createListadoProduct,disableListadoProduct,updateListadoProduct,
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


    getAllTransMasProdTrans,getTransMasProdTrans,createTransMasProdTrans,disableTransMasProdTrans,updateTransMasProdTrans,
    getAllMarcasproducto,getMarcasproducto,createMarcasproducto,disableMarcasproducto,updateMarcasproducto,
    getAllProductoscotizados,getProductoscotizados,createProductoscotizados,disableProductoscotizados,updateProductoscotizados,
    getAllProductosPedido,getProductosPedido,createProductosPedido,disableProductosPedido,updateProductosPedido,
    getAllProductosRelacionados,getProductosRelacionados,createProductosRelacionados,disableProductosRelacionados,updateProductosRelacionados,
    getAllProductosSurtidosPedido,getProductosSurtidosPedido,createProductosSurtidosPedido,disableProductosSurtidosPedido,updateProductosSurtidosPedido,
    getAllProductosSurtirPedido,getProductosSurtirPedido,createProductosSurtirPedido,disableProductosSurtirPedido,updateProductosSurtirPedido,
    getAllProductosTransRecordProd,getProductosTransRecordProd,createProductosTransRecordProd,disableProductosTransRecordProd,updateProductosTransRecordProd,
    getAllRecordProducto,getRecordProducto,createRecordProducto,disableRecordProducto,updateRecordProducto, getAllTransIndividual, createTransIndividual,
    getAllListadoEntradas,getAllListadoSalidas,getAllMotivosEntrada,createMotivosEntrada, getMotivosEntrada, updateMotivosEntrada, createListadoEntradas,
    getAllSucursalesAlmacen, createSucursalesAlmacen, getSucursalesAlmacen, updateSucursalesAlmacen, disableSucursalesAlmacen,getSucursalesDatos,
    getAllSucursalesDatos,createSucursalesDatos,updateSucursalesDatos,disableSucursalesDatos,

    

    ///////////////////////////////////////////// FIN DE CONTROLADORES DE MICROSERVICIO COMPRAS ////////////////////////////////////////////
}