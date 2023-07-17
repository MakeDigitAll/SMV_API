const { Router } = require("express")
const pool = require('../database')

const { 
    

    ///////////////////////////////////////////// RUTAS SIN UBICAR  ////////////////////////////////////////////
    getAllStatus, getStatus, createStatus, disableStatus, updateStatus,             


    } = require('../controllers/controllersDavid');

const router =  Router();





/////////////////////////////////////// RUTAS PARA TABLA DE ESTATUS 
//ver estatus
router.get('/status', getAllStatus)

//ver un estatus
router.get('/status/:id', getStatus)

//crear estatus
router.post('/status', createStatus)

//deshabilita  estatus
router.put('/status/:id', disableStatus)

//actualizar estatus
router.put('/status/:id', updateStatus)
//////////////// FIN DE ESTATUS







module.exports  =  router;