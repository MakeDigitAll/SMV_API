const { Router } = require("express")
const pool = require('../database')

const {

    ///////////////////////////////////////////// RUTAS DE MICROSERVICIO VENTAS ////////////////////////////////////////////
    getAllCotizaciones, getCotizaciones, createCotizaciones, disableCotizaciones, updateCotizaciones,
    getAllPedido, getPedido, createPedido, disablePedido, updatePedido,
    getAllPedidos, getPedidos, createPedidos, disablePedidos, updatePedidos,
    getAllDetallePedido, getDetallePedido, createDetallePedido, disableDetallePedido, updateDetallePedido,
    getAllVerPedido, getVerPedido, createVerPedido, disableVerPedido, updateVerPedido,
    getAllFormasPagoPedido, getFormasPagoPedido, createFormasPagoPedido, disableFormasPagoPedido, updateFormasPagoPedido,
    getAllLogisticaPedidos, getLogisticaPedidos, createLogisticaPedidos, disableLogisticaPedidos, updateLogisticaPedidos,
    getAllPedidosPendientesSurt, getPedidosPendientesSurt, createPedidosPendientesSurt, disablePedidosPendientesSurt, updatePedidosPendientesSurt,
    getAllAgregarProveedor, getAgregarProveedor, createAgregarProveedor, disableAgregarProveedor, updateAgregarProveedor,
    getAllProveedores, getProveedores, createProveedores, disableProveedores, updateProveedores,
    getAllProveedoresProducto, getProveedoresProducto, createProveedoresProducto, disableProveedoresProducto, updateProveedoresProducto,
    ///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO VENTAS ////////////////////////////////////////////


}  = require('../controllers/controllersVentas');

const router =  Router();



///////////////////////////////////////////// RUTAS DE MICROSERVICIO VENTAS ////////////////////////////////////////////

/////////////////////////////////////// RUTAS PARA TABLA DE COTIZACIONES  
router.get('/Cotizaciones', getAllCotizaciones)

//ver un estatus
router.get('/Cotizaciones/:id',  getCotizaciones)

//crear estatus
router.post('/Cotizaciones', createCotizaciones)

//deshabilita  estatus
router.put('/CotizacionesDisable/:id',  disableCotizaciones)

//actualizar estatus
router.put('/Cotizaciones/:id', updateCotizaciones)
/////////// FIN DE COTIZACIONES


/////////////////////////////////////// RUTAS PARA TABLA DE PEDIDO  
router.get('/Pedido', getAllPedido)

//ver un estatus
router.get('/Pedido/:id',  getPedido)

//crear estatus
router.post('/Pedido', createPedido)

//deshabilita  estatus
router.put('/PedidoDisable/:id',  disablePedido)

//actualizar estatus
router.put('/Pedido/:id', updatePedido)
/////////// FIN DE PEDIDO


/////////////////////////////////////// RUTAS PARA TABLA DE PEDIDOS
router.get('/Pedidos', getAllPedidos)

//ver un estatus
router.get('/Pedidos/:id',  getPedidos)

//crear estatus
router.post('/Pedidos', createPedidos)

//deshabilita  estatus
router.put('/PedidosDisable/:id',  disablePedidos)

//actualizar estatus
router.put('/Pedidos/:id', updatePedidos)
/////////// FIN DE PEDIDOS


/////////////////////////////////////// RUTAS PARA TABLA DE DETALLE DE PEDIDO  
router.get('/DetallePedido', getAllDetallePedido)

//ver un estatus
router.get('/DetallePedido/:id',  getDetallePedido)

//crear estatus
router.post('/DetallePedido', createDetallePedido)

//deshabilita  estatus
router.put('/DetallePedidoDisable/:id',  disableDetallePedido)

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
router.put('/VerPedidoDisable/:id', disableVerPedido)

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
router.put('/FormaPagoPedidoDisable/:id', disableFormasPagoPedido)

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
router.put('/LogisticaPedidosDisable/:id', disableLogisticaPedidos)

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
router.put('/PedidosPendientesSurtirDisable/:id', disablePedidosPendientesSurt)

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
router.put('/AgregarProveedorDisable/:id', disableAgregarProveedor)

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
router.put('/ProveedoresDisable/:id', disableProveedores)

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
router.put('/ProveedoresProductoDisable/:id', disableProveedoresProducto)

//actualizar estatus
router.put('/ProveedoresProducto/:id', updateProveedoresProducto)
/////////// FIN DE PROVEEDORES DEL PRODUCTO


///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO VENTAS ////////////////////////////////////////////


module.exports  =  router;