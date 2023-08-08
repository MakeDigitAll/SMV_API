const { Router } = require("express")
const pool = require('../database')

const { 
    
    
    getAllAlmacen, getAlmacenes, createAlmacenes, disableAlmacenes, updateAlmacenes,
    getAllContenedores,getContenedores,createContenedores,disableContenedores,updateContenedores,
    getAllCostoEnvio, getCostosEnvios, createCostosEnvios, disableCostosEnvios, updateCostosEnvios, 
    getAllGastosEnvio, getGastosEnvios, createGastosEnvios, disableGastosEnvios, updateGastosEnvios, 
    
    
    
             


    } = require('../controllers/controllersDavid');

const router =  Router();




/////////////////////////////////////// RUTAS PARA TABLA DE ALMACEN  
router.get('/Almacenes', getAllAlmacen )

//ver un estatus
router.get('/Almacenes/:id', getAlmacenes )

//crear estatus
router.post('/Almacenes', createAlmacenes)

//deshabilita  estatus
router.post('/AlmacenesDisable/:id', disableAlmacenes )

//actualizar estatus
router.put('/Almacenes/:id', updateAlmacenes )
/////////// FIN DE ALMACEN



/////////////////////////////////////// RUTAS PARA TABLA DE CONTENEDORES  
router.get('/Contenedores', getAllContenedores)


//ver un estatus
router.get('/Contenedores/:id',  getContenedores)

//crear estatus
router.post('/Contenedores', createContenedores)

//deshabilita  estatus
router.post('/ContenedoresDisable/:id',  disableContenedores)

//actualizar estatus
router.put('/Contenedores/:id', updateContenedores)
/////////// FIN DE CONTENEDORES


/////////////////////////////////////// RUTAS PARA TABLA DE COSTOS ENVIOS 
router.get('/CostosEnvios', getAllCostoEnvio)

//ver un estatus
router.get('/CostosEnvios/:id', getCostosEnvios )

//crear estatus
router.post('/CostosEnvios', createCostosEnvios)

//deshabilita  estatus
router.post('/CostosEnviosDisable/:id', disableCostosEnvios )

//actualizar estatus
router.put('/CostosEnvios/:id', updateCostosEnvios )
/////////// FIN DE COSTOS ENVIOS


/////////////////////////////////////// RUTAS PARA TABLA DE GASTOS ENVIOS 
router.get('/GastosEnvios', getAllGastosEnvio)

//ver un estatus
router.get('/GastosEnvios/:id', getGastosEnvios )

//crear estatus
router.post('/GastosEnvios', createGastosEnvios )

//deshabilita  estatus
router.post('/GastosEnvios/:id', disableGastosEnvios )

//actualizar estatus
router.put('/GastosEnvios/:id', updateGastosEnvios )
/////////// FIN DE GASTOS ENVIOS



module.exports  =  router;