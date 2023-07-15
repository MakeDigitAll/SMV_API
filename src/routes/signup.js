const { jsonResponse} = require("../lib/jsonResponse");
const router = require("express").Router();
router.post("/", (req,res)=>{
    const { imagen, nombre, apellido, email, password, idPerfilSeguridad, idVendedor } = req.body;
    if(!!!imagen || !!!nombre || !!!apellido || !!!email || !!!password ||!!!idPerfilSeguridad || !!!idVendedor){
        return res.status(400).json(
            jsonResponse(400,{
                error: "Fields are required",
            })
        )
    }
    //Crear un usuario en la base de datos
    res.status(200).json(200, { message: "User created succesfully"})
});
module.exports = router;