const { Router } = require("express")
const pool = require('../database')

const { 
    

    ///////////////////////////////////////////// RUTAS SIN UBICAR  ////////////////////////////////////////////
    getAllStatus, getStatus, createStatus, disableStatus, updateStatus,
    
    getAllCotizaciones, getCotizaciones, createCotizaciones, disableCotizaciones, updateCotizaciones, 
    getAllPedidos, getPedidos, createPedidos, disablePedidos, updatePedidos,             


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



/////////////////////////////////////// RUTAS PARA TABLA DE COTIZACIONES 
//ver estatus
router.get('/Cotizaciones', getAllCotizaciones)

//ver un estatus
router.get('/Cotizaciones/:id', getCotizaciones)

//crear estatus
router.post('/Cotizaciones', createCotizaciones)

//deshabilita  estatus
router.put('/Cotizaciones/:id', disableCotizaciones)

//actualizar estatus
router.put('/Cotizaciones/:id', updateCotizaciones)
//////////////// FIN DE COTIZACIONES



/////////////////////////////////////// RUTAS PARA TABLA DE PEDIDOS 
//ver estatus
router.get('/Pedidos', getAllPedidos)

//ver un estatus
router.get('/Pedidos/:id', getPedidos)

//crear estatus
router.post('/Pedidos', createPedidos)

//deshabilita  estatus
router.put('/PedidosDisable/:id', disablePedidos)

//actualizar estatus
router.put('/Pedidos/:id', updatePedidos)
//////////////// FIN DE PEDIDOS




module.exports  =  router;