const pool = require('../database')


//obtener todos los perfiles de seguridad
const getPerfilSeguridad = async (req, res, next) => {
    try {
        const allTasks = await pool.query(`SELECT * FROM "perfilesSeguridad"`);
        res.json(allTasks.rows)
    } catch (error) {
        console.log(error.message);
    }
}


const createPerfilSeguridad = async (req, res, next) => {

    const { nombrePerfil } = req.body;

    try {

        const perfilExist = await pool.query(`SELECT * FROM "perfilesSeguridad" WHERE "nombrePerfil" = $1`, [nombrePerfil]);

        if (perfilExist.rows.length > 0) {
            const updatePerfil = await pool.query(`UPDATE "perfilesSeguridad" SET "nombrePerfil" = $1 WHERE "idPerfilSeguridad" = $2 RETURNING *`, [nombrePerfil, perfilExist.rows[0].idPerfilSeguridad]);
            res.json(updatePerfil.rows[0]);
        }
        else {
            const newPerfil = await pool.query(`INSERT INTO "perfilesSeguridad" ("nombrePerfil") VALUES ($1) RETURNING *`, [nombrePerfil]);
            res.json(newPerfil.rows[0]);
        }
    }
    catch (error) {
        console.log(error.message);
    }
}


const getPermisos_PerfilSeguridad = async (req, res, next) => {
    const { idPerfilSeguridad } = req.params;

    try {
        const getPerfil = await pool.query(`SELECT * FROM "permisos_Accesso" WHERE "permission_id" = $1`, [idPerfilSeguridad]);
        res.json(getPerfil.rows[0]);
    }
    catch (error) {
        console.log(error.message);
    }
}

const createPermisos_PerfilSeguridad = async (req, res, next) => {
    const { idPerfilSeguridad } = req.params;

    const permisos = req.body;

    const permisosAlteradosArray = permisos.map((permiso) => {
        return [permiso, value]
    }
    )

    const permisosExist = await pool.query(`SELECT * FROM "permisos_Accesso" WHERE "security_profile_id" = $1`, [idPerfilSeguridad]);

    if (permisosExist.rows.length > 0) {

        try {

            for (let i = 0; i < permisosAlteradosArray.length; i++) {
                const newPerfil = await pool.query(`UPDATE "permisos_Accesso" SET ${permisosAlteradosArray[i].permiso} = ${permisosAlteradosArray[i].value} WHERE "security_profile_id" = $1`, [idPerfilSeguridad]);
                res.json(newPerfil.rows[0]);
            }
        }
        catch (error) {
            console.log(error.message);
        }

    } else {

        try {

            await pool.query(`INSERT INTO "permisos_Accesso" ("security_profile_id") VALUES ($1) RETURNING *`, [idPerfilSeguridad]);

            for (let i = 0; i < permisosAlteradosArray.length; i++) {
                const newPerfil = await pool.query(`UPDATE "permisos_Accesso" SET ${permisosAlteradosArray[i].permiso} = ${permisosAlteradosArray[i].value} WHERE "security_profile_id" = $1`, [idPerfilSeguridad]);
                res.json(newPerfil.rows[0]);
            }
        }
        catch (error) {
            console.log(error.message);
        }
    }
}

const deshabilitarPerfilSeguridad = async (req, res, next) => {
    const { idPerfilSeguridad } = req.params;

    try {
        await pool.query(`UPDATE "perfilesSeguridad" SET isDeleted = '1' WHERE "security_profile_id" = $1`, [idPerfilSeguridad]);
        await pool.query(`UPDATE "permisos_Accesso" SET isDeleted = '1' WHERE "permission_id" = $1`, [idPerfilSeguridad]);
        res.status(200).json(`El perfil de seguridad con el id ${idPerfilSeguridad} ha sido deshabilitado`);
    }
    catch (error) {
        console.log(error.message);
    }
}




module.exports = {
    createPerfilSeguridad,
    getPerfilSeguridad,
    getPermisos_PerfilSeguridad,
    createPermisos_PerfilSeguridad,
    deshabilitarPerfilSeguridad
}