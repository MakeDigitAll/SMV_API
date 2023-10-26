const pool = require('../database')


const createPerfilSeguridad = async (req, res, next)=> {
    console.log("createPerfilSeguridad");
    //creaer perfil de seguridad

    const {nombrePerfil} = req.body;

    try{

        const newPerfil = await pool.query(`INSERT INTO "perfilesSeguridad" ("nombrePerfil") VALUES ($1) RETURNING *`, [nombrePerfil]);
        res.json(newPerfil.rows[0]);
        }
        catch (error) {
            console.log(error.message); 
        }

}
//obtener todos los perfiles de seguridad
const getPerfilSeguridad = async (req, res, next)=> {
    console.log("getPerfilSeguridad");
    try{
    const allTasks = await pool.query(`SELECT * FROM "perfilesSeguridad"`);
    res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message); 
    }
}


module.exports = {
    createPerfilSeguridad,
    getPerfilSeguridad
}