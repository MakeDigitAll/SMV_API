const pool = require('../database')

const getAllVentasRealizadas = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM public."ventasRealizadas" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message); 
    }
}

const getAllClientesPos = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM public."listadoClientes" WHERE "isDelete" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message); 
    }
}

const getAllCortesdeCaja = async (req, res, next)=> {
    try{
    const allTasks = await pool.query(`SELECT * FROM public."cortesdeCaja" WHERE "isDeleted" = '0'`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message); 
    }
}

module.exports = {
    getAllVentasRealizadas, getAllClientesPos, getAllCortesdeCaja
}