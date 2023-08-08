const { Router } = require("express")
const pool = require('../database')

const {

    ///////////////////////////////////////////// RUTAS DE MICROSERVICIO VENTAS ////////////////////////////////////////////
    getAllPedido, getPedido, createPedido, disablePedido, updatePedido,
    getAllPedidos, getPedidos, createPedidos, disablePedidos, pedidoGanado, pedidoCancelado, updatePedidos,
    getAllDetallePedido, getDetallePedido, createDetallePedido, disableDetallePedido, updateDetallePedido,
    getAllVerPedido, getVerPedido, createVerPedido, disableVerPedido, updateVerPedido,
    getAllFormasPagoPedido, getFormasPagoPedido, createFormasPagoPedido, disableFormasPagoPedido, updateFormasPagoPedido,
    getAllLogisticaPedidos, getLogisticaPedidos, createLogisticaPedidos, disableLogisticaPedidos, updateLogisticaPedidos,
    getAllPedidosPendientesSurt, getPedidosPendientesSurt, createPedidosPendientesSurt, disablePedidosPendientesSurt, updatePedidosPendientesSurt,
    getAllAgregarProveedor, getAgregarProveedor, createAgregarProveedor, disableAgregarProveedor, updateAgregarProveedor,
    getAllProveedores, getProveedores, createProveedores, disableProveedores, updateProveedores,
    getAllProveedoresProducto, getProveedoresProducto, createProveedoresProducto, disableProveedoresProducto, updateProveedoresProducto, 
    getAllCotizaciones, getCotizaciones, createCotizaciones, disableCotizaciones, cotizacionGanada, cotizacionCancelada, updateCotizaciones, 
    getAllReporteComision, getReporteComision, createReporteComision, disableReporteComision, updateReporteComision, 
    getAllListadoClientes, getListadoClientes, createListadoClientes, disableListadoClientes, updateListadoClientes, 
    ///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO VENTAS ////////////////////////////////////////////


}  = require('../controllers/controllersVentas');

const router =  Router();



///////////////////////////////////////////// RUTAS DE MICROSERVICIO VENTAS ////////////////////////////////////////////

/////////////////////////////////////// RUTAS PARA TABLA DE COTIZACIONES 
//ver estatus
router.get('/Cotizaciones', getAllCotizaciones);

//ver un estatus
router.get('/Cotizaciones/:id', getCotizaciones );

//crear estatus
router.post('/Cotizaciones', createCotizaciones );

//deshabilita  estatus
router.post('/CotizacionesDisable', disableCotizaciones);

//Editar Estatus Ganada
router.post('/CotizacionesGanada/:id', cotizacionGanada)

//Editar Estatus Cancelada
router.post('/CotizacionesCancelada/:id', cotizacionCancelada)

//actualizar estatus
router.put('/Cotizaciones/:id', updateCotizaciones);
//////////////// FIN DE COTIZACIONES


/////////////////////////////////////// RUTAS PARA TABLA DE PEDIDO  
router.get('/Pedido', getAllPedido)

//ver un estatus
router.get('/Pedido/:id',  getPedido)

//crear estatus
router.post('/Pedido', createPedido)

//deshabilita  estatus
router.post('/PedidoDisable/:id',  disablePedido)

//actualizar estatus
router.put('/Pedido/:id', updatePedido)
/////////// FIN DE PEDIDO


/////////////////////////////////////// RUTAS PARA TABLA DE PEDIDOS 
//ver estatus
router.get('/Pedidos', getAllPedidos)

//ver un estatus
router.get('/Pedidos/:id', getPedidos)

//crear estatus
router.post('/Pedidos', createPedidos)

//deshabilita  estatus
router.post('/PedidosDisable/:id', disablePedidos)

//Ganar pedidos
router.post('/PedidosGanado/:id', pedidoGanado)

//Cancelar pedidos
router.post('/PedidosCancelado/:id',pedidoCancelado)

//actualizar estatus
router.put('/Pedidos/:id', updatePedidos)
//////////////// FIN DE PEDIDOS


/////////////////////////////////////// RUTAS PARA TABLA DE DETALLE DE PEDIDO  
router.get('/DetallePedido', getAllDetallePedido)

//ver un estatus
router.get('/DetallePedido/:id',  getDetallePedido)

//crear estatus
router.post('/DetallePedido', createDetallePedido)

//deshabilita  estatus
router.post('/DetallePedidoDisable/:id',  disableDetallePedido)

//actualizar estatus
router.put('/DetallePedido/:id', updateDetallePedido)
/////////// FIN DE DETALLE DE PEDIDO


/////////////////////////////////////// RUTAS PARA TABLA DE VER PEDIDO  
router.get('/VerPedido', getAllVerPedido)

//ver un estatus
router.get('/VerPedido/:id', getVerPedido)

//crear estatus
router.post('/VerPedido', createVerPedido)

//deshabilita  estatus
router.post('/VerPedidoDisable/:id', disableVerPedido)

//actualizar estatus
router.put('/VerPedido/:id', updateVerPedido)
/////////// FIN DE VER PEDIDO


/////////////////////////////////////// RUTAS PARA TABLA DE FORMAS DE PAGO DE PEDIDO
router.get('/FormaPagoPedido', getAllFormasPagoPedido)

//ver un estatus
router.get('/FormaPagoPedido/:id',getFormasPagoPedido)

//crear estatus
router.post('/FormaPagoPedido', createFormasPagoPedido)

//deshabilita  estatus
router.post('/FormaPagoPedidoDisable/:id', disableFormasPagoPedido)

//actualizar estatus
router.put('/FormaPagoPedido/:id', updateFormasPagoPedido)
/////////// FIN DE FORMAS DE PAGO DE PEDIDO


/////////////////////////////////////// RUTAS PARA TABLA DE LOGISTICA DE PEDIDOS
router.get('/LogisticaPedidos', getAllLogisticaPedidos)

//ver un estatus
router.get('/LogisticaPedidos/:id',getLogisticaPedidos)

//crear estatus
router.post('/LogisticaPedidos', createLogisticaPedidos)

//deshabilita  estatus
router.post('/LogisticaPedidosDisable/:id', disableLogisticaPedidos)

//actualizar estatus
router.put('/LogisticaPedidos/:id', updateLogisticaPedidos)
/////////// FIN DE LOGISTICA DE PEDIDOS


/////////////////////////////////////// RUTAS PARA TABLA DE PEDIDOS PENDIENTES POR SURTIR
router.get('/PedidosPendientesSurtir', getAllPedidosPendientesSurt)

//ver un estatus
router.get('/PedidosPendientesSurtir/:id', getPedidosPendientesSurt)

//crear estatus
router.post('/PedidosPendientesSurtir', createPedidosPendientesSurt)

//deshabilita  estatus
router.post('/PedidosPendientesSurtirDisable/:id', disablePedidosPendientesSurt)

//actualizar estatus
router.put('/PedidosPendientesSurtir/:id', updatePedidosPendientesSurt)
/////////// FIN DE PEDIDOS PENDIENTES POR SURTIR


/////////////////////////////////////// RUTAS PARA TABLA DE AGREGAR PROVEEDOR
router.get('/AgregarProveedor', getAllAgregarProveedor)

//ver un estatus
router.get('/AgregarProveedor/:id', getAgregarProveedor)

//crear estatus
router.post('/AgregarProveedor', createAgregarProveedor)

//deshabilita  estatus
router.post('/AgregarProveedorDisable/:id', disableAgregarProveedor)

//actualizar estatus
router.put('/AgregarProveedor/:id', updateAgregarProveedor)
/////////// FIN DE AGREGAR PROVEEDOR


/////////////////////////////////////// RUTAS PARA TABLA DE PROVEEDORES
router.get('/Proveedores', getAllProveedores)

//ver un estatus
router.get('/Proveedores/:id', getProveedores)

//crear estatus
router.post('/Proveedores', createProveedores)

//deshabilita  estatus
router.post('/ProveedoresDisable/:id', disableProveedores)

//actualizar estatus
router.put('/Proveedores/:id', updateProveedores)
/////////// FIN DE PROVEEDORES


/////////////////////////////////////// RUTAS PARA TABLA DE PROVEEDORES DEL PRODUCTO
router.get('/ProveedoresProducto', getAllProveedoresProducto)

//ver un estatus
router.get('/ProveedoresProducto/:id', getProveedoresProducto)

//crear estatus
router.post('/ProveedoresProducto', createProveedoresProducto)

//deshabilita  estatus
router.post('/ProveedoresProductoDisable/:id', disableProveedoresProducto)

//actualizar estatus
router.put('/ProveedoresProducto/:id', updateProveedoresProducto)
/////////// FIN DE PROVEEDORES DEL PRODUCTO



/////////////////////////////////////// RUTAS PARA TABLA DE REPORTE DE COMISIONES
router.get('/ReporteComisiones', getAllReporteComision )

//ver un estatus
router.get('/ReporteComisiones/:id', getReporteComision )

//crear estatus
router.post('/ReporteComisiones', createReporteComision )

//deshabilita  estatus
router.post('/ReporteComisionesDisable/:id', disableReporteComision )

//actualizar estatus
router.put('/ReporteComisiones/:id', updateReporteComision )
/////////// FIN DE REPORTE DE COMISONES



/////////////////////////////////////// RUTAS PARA TABLA DE LISTADO CLIENTES
router.get('/ListadoClientes',  getAllListadoClientes)

//ver un estatus
router.get('/ListadoClientes/:id', getListadoClientes )

//crear estatus
router.post('/ListadoClientes', createListadoClientes )

//deshabilita  estatus
router.post('/ListadoClientesDisabled/:id', disableListadoClientes)

//actualizar estatus
router.put('/ListadoClientes/:id', updateListadoClientes )
/////////// FIN DE LISTADO CLIENTES


///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO VENTAS ////////////////////////////////////////////


module.exports  =  router;