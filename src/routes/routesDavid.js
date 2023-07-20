const { Router } = require("express")
const pool = require('../database')

const { 
    

    ///////////////////////////////////////////// RUTAS SIN UBICAR  ////////////////////////////////////////////
    getAllStatus, getStatus, createStatus, disableStatus, updateStatus, 
    getAllVendedor, getVendedor, createVendedor, disableVendedor, updateVendedor, 
    getAllComisiones, getComisiones, createComisiones, disableComisiones, updateComisiones,             


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


/////////////////////////////////////// RUTAS PARA TABLA DE VENDEDORES 
//ver estatus
router.get('/Vendedores', getAllVendedor)

//ver un estatus
router.get('/Vendedores/:id', getVendedor)

//crear estatus
router.post('/Vendedores', createVendedor)

//deshabilita  estatus
router.put('/VendedoresDisable/:id', disableVendedor)

//actualizar estatus
router.put('/Vendedores/:id', updateVendedor)
//////////////// FIN DE VENDEDORES



/////////////////////////////////////// RUTAS PARA TABLA DE COMISIONES 
//ver estatus
router.get('/Comisiones', getAllComisiones)

//ver un estatus
router.get('/Comisiones/:id', getComisiones)

//crear estatus
router.post('/Comisiones', createComisiones)

//deshabilita  estatus
router.put('/ComisionesDisable/:id', disableComisiones)

//actualizar estatus
router.put('/Comisiones/:id', updateComisiones)
//////////////// FIN DE COMISIONES






module.exports  =  router;