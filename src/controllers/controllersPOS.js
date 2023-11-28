const pool = require('../database')

//Productos Orden Compra esta en Controllers compras
//Ventas
const getAllVentasRealizadas = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM public."ventasRealizadas" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message); 
    }
}

const getVentaRealizada = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "ventasRealizadas" WHERE id = $1 AND "isDelete" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: error.message
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

const createVentasRealizadas = async (req, res, next) => {
    const { cliente, factura, monto, productosEnVenta } = req.body;
  
    try {
        const result = await pool.query(
            `INSERT INTO public."ventasRealizadas"(cliente, factura, monto, "productosEnVenta") VALUES ($1, $2, $3, $4) RETURNING *`,
            [cliente, factura, monto, productosEnVenta]
        );
  
        res.json(result.rows[0]); // Accede a la primera fila del resultado
    } catch (error) {
        console.log("Error", error.message);
        console.log("linea de error:", error.stack.split("\n")[1]);
        next(error);
    }
};

const disableVentaRealizada = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "ventasRealizadas" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

const pagadoVentaRealizada = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "ventasRealizadas" SET "estatus" = 'Pagado' WHERE id = $1 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
const pagarVentasRealizadas = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "ventasRealizadas" SET "monto"=$1 WHERE id = $2 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

///Clientes
const getAllClientesPos = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM public."listadoClientes" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message); 
    }
}

const getClientesPos = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const result = await pool.query(`SELECT * FROM "listadoClientes" WHERE id = $1 AND "isDelete" = '0' `, [id]);

        if (result.rows.length === 0 )
        return res.status(404).json({
            message: error.message
        });

        res.json(result.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
};

const createClientesPos = async (req, res, next) => {
    const { numeroCliente, numeroComercial, razonSocial, contacto, rfc, telefono, email, vendedor, giro, activo, registro, nombreCliente } = req.body;
  
    try {
      const result = await pool.query(
        `INSERT INTO "listadoClientes" ("numeroCliente", "numeroComercial", "razonSocial", contacto, rfc, telefono, email, vendedor, giro, activo, registro, actualizado, "isUpdate", "isDelete", "creationDate", "creationUpdate", "nombreCliente") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, NOW() , '0', '0', NOW() , NOW(), $12 ) RETURNING *`,
        [numeroCliente, numeroComercial, razonSocial, contacto, rfc, telefono, email, vendedor, giro, activo, registro, nombreCliente]
      );
  
      res.json(result.json);
    } catch (error) {
      console.log("Error", error.message);
      console.log("linea de error:", error.stack.split("\n")[1]);
      next(error);
    }
  };

  const updateClientePos = async (req, res, next) =>{
    const { id } = req.params;
    const { numeroCliente, numeroComercial, razonSocial, contacto, rfc, telefono, email, vendedor, giro, activo, registro, nombreCliente} = req.body;
    
    const result = await pool.query(
        'UPDATE "listadoClientes" SET "numeroCliente"=$1, "numeroComercial"=$2, "razonSocial"=$3, contacto=$4, rfc=$5, telefono=$6, email=$7, vendedor=$8, giro=$9, activo=$10, registro=$11, actualizado=NOW(), "creationUpdate"=NOW(), "nombreCliente"=$12 WHERE id = $13 RETURNING *',
        [numeroCliente, numeroComercial, razonSocial, contacto, rfc, telefono, email, vendedor, giro, activo, registro, nombreCliente, id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};

  const disableClientesPos = async (req, res, next) =>{
    const { id } = req.params;

    const result = await pool.query(
        `UPDATE "listadoClientes" SET "isDelete" = '1' WHERE id = $1 RETURNING *`,
        [ id]
    );

    if (result.rows.length === 0)
    return res.status(404).json({
        message: "La tarea no se pudo actualizar"
    });

    return res.json(result.rows[0]);
};
///Cortes de Caja
const getAllCortesdeCaja = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM public."cortesdeCaja" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message); 
    }
}

module.exports = {
    getAllVentasRealizadas,disableVentaRealizada, getVentaRealizada, createVentasRealizadas, pagadoVentaRealizada,pagarVentasRealizadas,
    getAllClientesPos, getClientesPos, createClientesPos, updateClientePos, disableClientesPos,
    getAllCortesdeCaja
}