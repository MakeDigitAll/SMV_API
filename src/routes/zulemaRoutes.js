const { Router } = require("express")
const pool = require('../database')

const { 
    ///////////////////////////////////////////// RUTAS DE MICROSERVICIO PRODUCTOS ////////////////////////////////////////////
    
    ///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO PRODUCTOS////////////////////////////////////////////
} = require('../controllers/zulemaController');

const router =  Router();


/* ESTE ARCHIVO SE UTILIZARA ESPECIALMENTE PARA LA CREACION Y PRUEBAS DE FUNCIONAMIENTO
   DE NUEVAS APIS SIN TENER QUE ESTAR MODIFICANDO LOS ARCHIVOS
   GENERALES Y ALTEREN SU OPTIMO FUNCIONAMIENTO */


module.exports  =  router;