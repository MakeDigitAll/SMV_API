const { Router } = require("express")
const pool = require('../database')

const { 
    

    ///////////////////////////////////////////// RUTAS SIN UBICAR  ////////////////////////////////////////////
    getAllStatus, getStatus, createStatus, disableStatus, updateStatus,
    getAllContenedores, getContenedores, createContenedores, disableContenedores, updateContenedores,
    getAllCostosEnvios, getCostosEnvios, createCostosEnvios, disableCostosEnvios, updateCostosEnvios, 
    getAllAlmacenes, getAlmacenes, createAlmacenes, disableAlmacenes, updateAlmacenes, 
    getAllGastosEnvios, getGastosEnvios, createGastosEnvios, disableGastosEnvios, updateGastosEnvios,             


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






/////////////////////////////////////// RUTAS PARA TABLA DE CONTENEDORES 
//ver estatus
router.get('/Contenedores', getAllContenedores)

//ver un estatus
router.get('/Contenedores/:id', getContenedores)

//crear estatus
router.post('/Contenedores', createContenedores)

//deshabilita  estatus
router.put('/ContenedoresDisable/:id', disableContenedores)

//actualizar estatus
router.put('/Contenedores/:id', updateContenedores)
//////////////// FIN DE CONTENEDORES



/////////////////////////////////////// RUTAS PARA TABLA DE COSTOS DE ENVIOS 
//ver estatus
router.get('/CostosEnvios', getAllCostosEnvios)

//ver un estatus
router.get('/CostosEnvios/:id', getCostosEnvios)

//crear estatus
router.post('/CostosEnvios', createCostosEnvios)

//deshabilita  estatus
router.put('/CostosEnviosDisable/:id', disableCostosEnvios)

//actualizar estatus
router.put('/CostosEnvios/:id', updateCostosEnvios)
//////////////// FIN DE COSTOS DE ENVIOS



/////////////////////////////////////// RUTAS PARA TABLA DE ALMACENES 
//ver estatus
router.get('/Almacenes', getAllAlmacenes)

//ver un estatus
router.get('/Almacenes/:id', getAlmacenes)

//crear estatus
router.post('/Almacenes', createAlmacenes)

//deshabilita  estatus
router.put('/Almacenes/:id', disableAlmacenes)

//actualizar estatus
router.put('/Almacenes/:id', updateAlmacenes)
//////////////// FIN DE ALMACENES




/////////////////////////////////////// RUTAS PARA TABLA DE GASTOS DE ENVIOS 
//ver estatus
router.get('/GastosEnvio', getAllGastosEnvios)

//ver un estatus
router.get('/GastosEnvio/:id', getGastosEnvios)

//crear estatus
router.post('/GastosEnvio', createGastosEnvios)

//deshabilita  estatus
router.put('/GastosEnvio/:id', disableGastosEnvios)

//actualizar estatus
router.put('/GastosEnvio/:id', updateGastosEnvios)
//////////////// FIN DE GASTOS DE ENVIOS




module.exports  =  router;