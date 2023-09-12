const { Router } = require("express")
const pool = require('../database')

const { 
    
    
    getAllAlmacen, getAlmacenes, createAlmacenes, disableAlmacenes, updateAlmacenes,
    getAllContenedores,getContenedores,createContenedores,disableContenedores,updateContenedores,
    getAllCostoEnvio, getCostosEnvios, createCostosEnvios, disableCostosEnvios, updateCostosEnvios, 
    getAllGastosEnvio, getGastosEnvios, createGastosEnvios, disableGastosEnvios, updateGastosEnvios, 
    
    createImagen,
    getImagenPrueba, 
    
    
    
            


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



const multer = require("multer"); // Importar multer

const upload = multer(); // Crear una instancia de multer


router.post('/ImagenUsuario', upload.single("image"), createImagen)

router.get('/ImagenUsuario/:id', getImagenPrueba)






//////////////////////////// DE AQUI HACIA ABAJO SON LAS RUTAS PARA ADMINISTRACION //////////////////////////////////////
const { 
        getAllNotasCredito, getNotasCredito, 
        getAllEstadosCuenta, getEstadosCuenta, 
        getAllMargenVentas, getMargenVentas, 
        getAllReporteVentas, getReporteVentas, 
        getAllComisiones, getComisiones,
        getAllListadoPrecios, getListadoPrecios, createListadoPrecios, disableListadoPrecios, updateListadoPrecios, 
        getAllFormasPago, getFormasPago, createFormasPago, disableFormasPago, updateFormasPago 
    
    } = require("../controllers/controllersAdministracion");


////////////////////////////////////////// CREDITOS
router.get('/Creditos', getAllNotasCredito)

router.get('/Creditos/:id', getNotasCredito)
//////////////////////////////// FIN DE CREDITOS

///////////////////////////////////////// ESTADOS DE CUENTA
router.get('/EstadosCuenta', getAllEstadosCuenta)

router.get('/EstadosCuenta/:id', getEstadosCuenta)
//////////////////////////// FIN DE ESTADOS DE CUENTA


///////////////////////////////////////// MARGEN DE VENTAS
router.get('/MargenVenta', getAllMargenVentas)

router.get('/MargenVenta/:id', getMargenVentas)
//////////////////////////// FIN DE MARGEN DE VENTAS


///////////////////////////////////////// REPORTE DE VENTAS
router.get('/ReporteVentas', getAllReporteVentas)

router.get('/ReporteVentas/:id', getReporteVentas)
//////////////////////////// FIN DE REPORTE DE VENTAS


///////////////////////////////////////// COMISIONES
router.get('/Comisiones', getAllComisiones)

router.get('/Comisiones/:id', getComisiones)
//////////////////////////// FIN DE COMISIONES


///////////////////////////////////////// LISTADO DE PRECIOS
router.get('/ListadoPrecios', getAllListadoPrecios)

router.get('/ListadoPrecios/:id', getListadoPrecios)

//crear estatus
router.post('/ListadoPrecios', createListadoPrecios)

//deshabilita  estatus
router.post('/ListadoPreciosDisable/:id',  disableListadoPrecios)

//actualizar estatus
router.put('/ListadoPrecios/:id', updateListadoPrecios)
//////////////////////////// FIN DE LISTADO DE PRECIOS



///////////////////////////////////////// FORMAS DE PAGO
router.get('/FormasPago', getAllFormasPago)

router.get('/FormasPago/:id', getFormasPago)

//crear estatus
router.post('/FormasPago', createFormasPago)
 
//deshabilita  estatus
router.post('/FormasPagoDisable/:id',  disableFormasPago)

//actualizar estatus
router.put('/FormasPagoEdit/:id', updateFormasPago)
//////////////////////////// FIN DE LISTADO DE PRECIOS



module.exports  =  router;