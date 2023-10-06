const { Router } = require("express")
const pool = require('../database')

const { 
    
    
    getAllAlmacen, getAlmacenes, createAlmacenes, disableAlmacenes, updateAlmacenes,
    getAllContenedores,getContenedores,createContenedores,disableContenedores,updateContenedores,
    getAllCostoEnvio, getCostosEnvios, createCostosEnvios, disableCostosEnvios, updateCostosEnvios, 
    getAllGastosEnvio, getGastosEnvios, createGastosEnvios, disableGastosEnvios, updateGastosEnvios, 
    
    createImagen,
    getImagenPrueba,
    getAllPagos,
    getAllPedidos,
    getAllVentasCliente,
    getAllInventarioXAlmacen,
    getAllListadoTransferencia, 
    
    
    
            


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


////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// RUTAS PARA TABLA DE Pagos 
//ver estatus
router.get('/Pagos', getAllPagos);

// //ver un estatus
// router.get('/Pagos/:id', getPagos );

// //crear estatus
// router.post('/Pagos', createPagos );

// //deshabilita  estatus
// router.post('/PagosParcial/:id', PagosParcial);

// //Editar Estatus Ganada
// router.post('/PagosGanada/:id', PagosCredito)

// //Editar Estatus Cancelada
// router.post('/PagosFacturado/:id', PagosFacturado)

// //Editar Estatus Ganada
// router.post('/PagosPendiente2/:id', PagosPendiente2)

// //Editar Estatus Cancelada
// router.post('/PagosPendiente/:id', PagosPendiente1)

// //actualizar estatus
// router.put('/Pagos/:id', updatePagos);
//////////////// FIN DE Pagos


/////////////////////////////////////// RUTAS PARA TABLA DE PEDIDOS 
//ver estatus
router.get('/Pedidos', getAllPedidos)

// //ver un estatus
// router.get('/Pedidos/:id', getPedidos)

// //crear estatus
// router.post('/Pedidos', createPedidos)

// //deshabilita  estatus
// router.post('/PedidosDisable/:id', disablePedidos)

// //Ganar pedidos
// router.post('/PedidosGanado/:id', pedidoGanado)

// //Cancelar pedidos
// router.post('/PedidosCancelado/:id',pedidoCancelado)

// //Pedidos pendientes
// router.post('/PedidosPendientes/:id',PedidosPendientes)
// //actualizar estatus
// router.put('/Pedidos/:id', updatePedidos)
// //Devolver pedidos
// router.post('/PedidosDevueltos/:id',PedidosDevueltos)
// //Despachar pedidos
// router.post('/PedidosDespachados/:id',PedidosDespachados)
// //entregar pedidos
// router.post('/PedidosEntregados/:id',PedidosEntregado)
// //cerrar pedidos
// router.post('/PedidosCerrados/:id',pedidoCerrado)
// //devolver pedidos
// router.post('/PedidosDevuelto/:id',pedidoDevuelto)
// //surtir pedidos
// router.post('/PedidosSurtido/:id',pedidoSurtido)
// //facturra pedidos
// router.post('/PedidosFacturado/:id',pedidoFacturado)

// //////////////// FIN DE PEDIDOS


// /////////////////////////////////////// RUTAS PARA TABLA DE COTIZACIONES 
// //ver estatus
// router.get('/Cotizaciones', getAllCotizaciones);

// //ver un estatus
// router.get('/Cotizaciones/:id', getCotizaciones );

// //crear estatus
// router.post('/Cotizaciones', createCotizaciones );

// //deshabilita  estatus
// router.post('/CotizacionesDisable', disableCotizaciones);

// //Editar Estatus Ganada
// router.post('/CotizacionesGanada/:id', cotizacionGanada)

// //Editar Estatus Cancelada
// router.post('/CotizacionesCancelada/:id', cotizacionCancelada)

// //Editar Estatus Ganada
// router.post('/CotizacionesVencidas/:id', cotizacionVencida)

// //Editar Estatus Cancelada
// router.post('/CotizacionesPerdidas/:id', cotizacionPerdida)

// //actualizar estatus
// router.put('/Cotizaciones/:id', updateCotizaciones);
// //////////////// FIN DE COTIZACIONES



// /////////////////////////////////////// RUTAS PARA TABLA DE ORDEN DE COMPRA - LISTADO DE ENTRADAS  
// router.get('/OrdenCompra/ListadoEntradas', getAllOrdenListadoEntrada)

// //ver un estatus
// router.get('/OrdenCompra/ListadoEntradas/:id', getOrdenListadoEntrada)

// //crear estatus
// router.post('/OrdenCompra/ListadoEntradas', createOrdenListadoEntrada)

// //deshabilita  estatus
// router.put('/OrdenCompra/ListadoEntradasDisable/:id', disableOrdenListadoEntrada)

// //actualizar estatus
// router.put('/OrdenCompra/ListadoEntradas/:id', updateOrdenListadoEntrada)
// /////////////////////// FIN DE LISTADO DE ENTRADAS

// //Parcial  estatus
// router.post('/OrdenCompra/ListadoEntradasParcial/:id', parcialOrdenListadoEntrada)
// //Entregas  estatus
// router.post('/OrdenCompra/ListadoEntradasEntregas/:id', entregasOrdenListadoEntrada)
// //rutas  estatus
// router.post('/OrdenCompra/ListadoEntradasRutas/:id', rutasOrdenListadoEntrada)
// //Embarque  estatus
// router.post('/OrdenCompra/ListadoEntradasEmbarque/:id', embarqueOrdenListadoEntrada)
// //Embarque  estatus
// router.post('/OrdenCompra/ListadoEntradasSurtido/:id', surtidoOrdenListadoEntrada)




//////////////////////////// DE AQUI HACIA ABAJO SON LAS RUTAS PARA ADMINISTRACION //////////////////////////////////////
const { 
        getAllNotasCredito, getNotasCredito, 
        getAllEstadosCuenta, getEstadosCuenta, 
        getAllMargenVentas, getMargenVentas, 
        getAllReporteVentas, getReporteVentas, 
        getAllComisiones, getComisiones,
        getAllListadoPrecios, getListadoPrecios, createListadoPrecios, disableListadoPrecios, updateListadoPrecios, 
        getAllFormasPago, getFormasPago, createFormasPago, disableFormasPago, updateFormasPago,

    
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
router.get('/ReporteVentasCliente',getAllVentasCliente)

router.get('/InventarioXAlmacen', getAllInventarioXAlmacen);
router.get('/ListadoTransferencias', getAllListadoTransferencia);




module.exports  =  router;