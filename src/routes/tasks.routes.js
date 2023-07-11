const { Router } = require("express")
const pool = require('../database')

const { 
    ///////////////////////////////////////////// RUTAS DE MICROSERVICIO COMPRAS ////////////////////////////////////////////
    getAllOrcFoliosSur,getOrcFoliosSur, createOrcFoliosSur, disableOrcFoliosSur, updateOrcFoliosSur, 
    getAllOrcArchvivosAdj,getOrcArchvivosAdj,createOrcArchvivosAdj,disableOrcArchvivosAdj,updateOrcArchvivosAdj,
    getAllOrdenArchivosAdjuntos, getOrdenArchvivosAdj, createOrdenArchivosAdjuntos, disableOrdenArchivosAdjuntos, updateOrdenArchivosAdjuntos,
    getAllOrdenFoliosSurtidos, getOrdenFoliosSurtidos, createOrdenFoliosSurtidos, disableOrdenFoliosSurtidos, updateOrdenFoliosSurtidos, 
    getAllOrdenListadoEntrada, getOrdenListadoEntrada, createOrdenListadoEntrada, disableOrdenListadoEntrada, updateOrdenListadoEntrada, 
    getAllProductos, getProducto, createProducto, disableProducto, updateProducto, 
    getAllProductosOrdenCompra, getProductosOrdenCompra, createProductosOrdenCompra, disableProductosOrdenCompra, updateProductosOrdenCompra, 
    getAllListadoProduct, getListadoProduct, createListadoProduct, disableListadoProduct, updateListadoProduct,
    getAllListadoProductDesc, getListadoProductDesc, createListadoProductDesc, disableListadoProductDesc, updateListadoProductDesc, 
   
    getAllagregarProductoRelacionado, getagregarProductoRelacionado, createagregarProductoRelacionado, updateagregarProductoRelacionado, disableagregarProductoRelacionado, 
    getAllbuscarProducto, getbuscarProducto, createbuscarProducto, disablebuscarProducto,updatebuscarProducto,
    getAllcategoria, getcategoria, createcategoria, disablecategoria,updatecategoria,
    getAllcostoProductos, getcostoProductos, createcostoProductos, disablecostoProductos, updatecostoProductos,
    getAllhistorialProducto, gethistorialProducto, createhistorialProducto, disablehistorialProducto, updatehistorialProducto,
    getAllhistorialProductoUltimasCompras, gethistorialProductoUltimasCompras, createhistorialProductoUltimasCompras, disablehistorialProductoUltimasCompras, updatehistorialProductoUltimasCompras,
    getAllhistorialProductoUltimasVentas, gethistorialProductoUltimasVentas, createhistorialProductoUltimasVentas, disablehistorialProductoUltimasVentas, updatehistorialProductoUltimasVentas,
    getAllinventarioGeneralReporteInventario, getinventarioGeneralReporteInventario, createinventarioGeneralReporteInventario, disableinventarioGeneralReporteInventario, updateinventarioGeneralReporteInventario,
    getAlllistadoProductosMargenProductos, getlistadoProductosMargenProductos, createlistadoProductosMargenProductos, disablelistadoProductosMargenProductos, updatelistadoProductosMargenProductos,

    ///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO COMPRAS ////////////////////////////////////////////


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


    ///////////////////////////////////////////// RUTAS DE MICROSERVICIO ADMINISTRACION ////////////////////////////////////////////

    ///////////////////////////////////////////// FIN DE RUTAS DE RUTAS ADMINISTRACION ////////////////////////////////////////////


    ///////////////////////////////////////////// RUTAS DE MICROSERVICIO ALMACEN ////////////////////////////////////////////

    ///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO ALMACEN ////////////////////////////////////////////


    ///////////////////////////////////////////// RUTAS DE MICROSERVICIO MARKETING ////////////////////////////////////////////

    ///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO MARKETING ////////////////////////////////////////////



    ///////////////////////////////////////////// RUTAS SIN UBICAR  ////////////////////////////////////////////
    getAllStatus, getStatus, createStatus, disableStatus, updateStatus,             


    } = require('../controllers/task.controller');

const router =  Router();


///////////////////////////////////////////// RUTAS DE MICROSERVICIO COMPRAS ////////////////////////////////////////////

/////////////////////////////////////// RUTAS PARA TABLA DE NUEVA ORDEN DE COMPRA - FOLIOS DE SURTIDO 
//ver estatus
router.get('/NuevaOrdenCompra/Folios', getAllOrcFoliosSur)

//ver un estatus
router.get('/NuevaOrdenCompra/Folios/:id', getOrcFoliosSur)

//crear estatus
router.post('/NuevaOrdenCompra/Folios', createOrcFoliosSur)

//deshabilita  estatus
router.put('/NuevaOrdenCompra/Folios/:id', disableOrcFoliosSur)

//actualizar estatus
router.put('/NuevaOrdenCompra/Folios/:id', updateOrcFoliosSur)
//////////////// FIN DE NUEVA ORDEN DE COMPRA - FOLIOS DE SURTIDO 



/////////////////////////////////////// RUTAS PARA TABLA DE NUEVA ORDEN DE COMPRA - ARCHIVOS ADJUNTOS 
router.get('/NuevaOrdenCompra/ArchivosAdjuntos', getAllOrcArchvivosAdj)

//ver un estatus
router.get('/NuevaOrdenCompra/ArchivosAdjuntos/:id', getOrcArchvivosAdj)

//crear estatus
router.post('/NuevaOrdenCompra/ArchivosAdjuntos', createOrcArchvivosAdj)

//deshabilita  estatus
router.put('/NuevaOrdenCompra/ArchivosAdjuntos/:id', disableOrcArchvivosAdj)

//actualizar estatus
router.put('/NuevaOrdenCompra/ArchivosAdjuntos/:id', updateOrcArchvivosAdj)
///////////////////// FIN DE NUEVA ORDEN DE COMPRA - ARCHIVOS ADJUNTOS



/////////////////////////////////////// RUTAS PARA TABLA DE ORDEN DE COMPRA - ARCHIVOS ADJUNTOS  
router.get('/OrdenCompra/ArchivosAdjuntos', getAllOrdenArchivosAdjuntos)

//ver un estatus
router.get('/OrdenCompra/ArchivosAdjuntos/:id', getOrdenArchvivosAdj)

//crear estatus
router.post('/OrdenCompra/ArchivosAdjuntos', createOrdenArchivosAdjuntos)

//deshabilita  estatus
router.put('/OrdenCompra/ArchivosAdjuntos/:id', disableOrdenArchivosAdjuntos)

//actualizar estatus
router.put('/OrdenCompra/ArchivosAdjuntos/:id', updateOrdenArchivosAdjuntos)
///////////////// FIN DE ORDEN DE COMPRA - ARCHIVOS ADJUNTOS



/////////////////////////////////////// RUTAS PARA TABLA DE ORDEN DE COMPRA - FOLIOS SURTIDOS  
router.get('/OrdenCompra/FoliosSurtidos', getAllOrdenFoliosSurtidos)

//ver un estatus
router.get('/OrdenCompra/FoliosSurtidos/:id', getOrdenFoliosSurtidos)

//crear estatus
router.post('/OrdenCompra/FoliosSurtidos', createOrdenFoliosSurtidos)

//deshabilita  estatus
router.put('/OrdenCompra/FoliosSurtidos/:id', disableOrdenFoliosSurtidos)

//actualizar estatus
router.put('/OrdenCompra/FoliosSurtidos/:id', updateOrdenFoliosSurtidos)
////////////// FIN DE FOLIOS SURTIDOS



/////////////////////////////////////// RUTAS PARA TABLA DE ORDEN DE COMPRA - LISTADO DE ENTRADAS  
router.get('/OrdenCompra/ListadoEntradas', getAllOrdenListadoEntrada)

//ver un estatus
router.get('/OrdenCompra/ListadoEntradas/:id', getOrdenListadoEntrada)

//crear estatus
router.post('/OrdenCompra/ListadoEntradas', createOrdenListadoEntrada)

//deshabilita  estatus
router.put('/OrdenCompra/ListadoEntradas/:id', disableOrdenListadoEntrada)

//actualizar estatus
router.put('/OrdenCompra/ListadoEntradas/:id', updateOrdenListadoEntrada)
/////////////////////// FIN DE LISTADO DE ENTRADAS



/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS EN LA ORDEN DE COMPRA  
router.get('/OrdenCompra/ProductosOrdenCompra', getAllProductosOrdenCompra)

//ver un estatus
router.get('/OrdenCompra/ProductosOrdenCompra/:id', getProductosOrdenCompra)

//crear estatus
router.post('/OrdenCompra/ProductosOrdenCompra', createProductosOrdenCompra)

//deshabilita  estatus
router.put('/OrdenCompra/ProductosOrdenCompra/:id', disableProductosOrdenCompra)

//actualizar estatus
router.put('/OrdenCompra/ProductosOrdenCompra/:id', updateProductosOrdenCompra)
//////////////////////////// FIN DE PRODUCTOS EN LA ORDEN DE COMPRA



/////////////////////////////////////// RUTAS PARA TABLA DE LISTADO PRODUCTOS  
router.get('/ListadoProductos', getAllListadoProduct)

//ver un estatus
router.get('/ListadoProductos/:id', getListadoProduct)

//crear estatus
router.post('/ListadoProductos', createListadoProduct)

//deshabilita  estatus
router.put('/ListadoProductos/:id', disableListadoProduct)

//actualizar estatus
router.put('/ListadoProductos/:id', updateListadoProduct)
////////////////// FIN DE LISTADO PRODUCTOS


/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS  
router.get('/Productos', getAllProductos)

//ver un estatus
router.get('/Productos/:id', getProducto)

//crear estatus
router.post('/Productos', createProducto)

//deshabilita  estatus
router.put('/Productos/:id', disableProducto)

//actualizar estatus
router.put('/Productos/:id', updateProducto)
/////////// FIN DE PRODUCTOS

/////////////////////////////////////// RUTAS PARA TABLA DE AGREGAR UN PRODUCTO RELACIONADO
router.get('/Agregar/ProductoRelacionado', getAllagregarProductoRelacionado)

/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS  
router.get('/ListadoProductosDescuento', getAllListadoProductDesc)

//ver un estatus
router.get('/ListadoProductosDescuento/:id', getListadoProductDesc )

//crear estatus
router.post('/ListadoProductosDescuento', createListadoProductDesc)

//deshabilita  estatus
router.put('/ListadoProductosDescuento/:id', disableListadoProductDesc )

//actualizar estatus
router.put('/ListadoProductosDescuento/:id', updateListadoProductDesc)
/////////// FIN DE PRODUCTOS


//ver un estatus
router.get('/Agregar/ProductoRelacionado/:id', getagregarProductoRelacionado)

//crear estatus
router.post('/Agregar/ProductoRelacionado', createagregarProductoRelacionado)

//eliminar estatus
router.delete('/Agregar/ProductoRelacionado/:id', disableagregarProductoRelacionado)

//actualizar estatus
router.put('/Agregar/ProductoRelacionado/:id', updateagregarProductoRelacionado)
///////////////////// FIN DE AGREGAR UN PRODUCTO RELACIONADO

/////////////////////////////////////// RUTAS PARA TABLA DE BUSCAR PRODUCTO
router.get('/BuscarProducto', getAllbuscarProducto)

//ver un estatus
router.get('/BuscarProducto/:id', getbuscarProducto)

//crear estatus
router.post('/BuscarProducto', createbuscarProducto)

//eliminar estatus
router.delete('/BuscarProducto/:id', disablebuscarProducto)

//actualizar estatus
router.put('/BuscarProducto/:id', updatebuscarProducto)
///////////////////// FIN DE BUSCAR PRODUCTO    

/////////////////////////////////////// RUTAS PARA CATEGORIA
router.get('/Categoria', getAllcategoria)

//ver un estatus
router.get('/Categoria/:sku', getcategoria)

//crear estatus
router.post('/Categoria', createcategoria)

//eliminar estatus
router.delete('/Categoria/:sku', disablecategoria)

//actualizar estatus
router.put('/Categoria/:sku', updatecategoria)
///////////////////// FIN DE CATEGORIA

/////////////////////////////////////// RUTAS PARA COSTO DE PRODUCTOS
router.get('/costoProductos', getAllcostoProductos)

//ver un estatus
router.get('/costoProductos/:id', getcostoProductos)

//crear estatus
router.post('/costoProductos', createcostoProductos)

//eliminar estatus
router.delete('/costoProductos/:id', disablecostoProductos)

//actualizar estatus
router.put('/costoProductos/:id', updatecostoProductos)
///////////////////// FIN DE COSTO DE PRODUCOS

/////////////////////////////////////// RUTAS PARA HISTORIAL DE PRODUCTOS
router.get('/historialProducto', getAllhistorialProducto)

//ver un estatus
router.get('/historialProducto/:id', gethistorialProducto)

//crear estatus
router.post('/historialProducto', createhistorialProducto)

//eliminar estatus
router.delete('/historialProducto/:id', disablehistorialProducto)

//actualizar estatus
router.put('/historialProducto/:id', updatehistorialProducto)
///////////////////// FIN DE HISTORIAAL DE PRODUCTOS

/////////////////////////////////////// RUTAS PARA HISTORIAL DE PRODUCTOS ULTIMAS COMPRAS
router.get('/historialProductoUltimasCompras', getAllhistorialProductoUltimasCompras)

//ver un estatus
router.get('/historialProductoUltimasCompras/:id', gethistorialProductoUltimasCompras)

//crear estatus
router.post('/historialProductoUltimasCompras', createhistorialProductoUltimasCompras)

//eliminar estatus
router.delete('/historialProductoUltimasCompras/:id', disablehistorialProductoUltimasCompras)

//actualizar estatus
router.put('/historialProductoUltimasCompras/:id', updatehistorialProductoUltimasCompras)
///////////////////// FIN DE HISTORIAAL DE PRODUCTOS ULTIMAS COMPRAS

/////////////////////////////////////// RUTAS PARA HISTORIAL DE PRODUCTOS ULTIMAS VENTAS
router.get('/historialProductoUltimasVentas', getAllhistorialProductoUltimasVentas)

//ver un estatus
router.get('/historialProductoUltimasVentas/:id', gethistorialProductoUltimasVentas)

//crear estatus
router.post('/historialProductoUltimasVentas', createhistorialProductoUltimasVentas)

//eliminar estatus
router.delete('/historialProductoUltimasVentas/:id', disablehistorialProductoUltimasVentas)

//actualizar estatus
router.put('/historialProductoUltimasVentas/:id', updatehistorialProductoUltimasVentas)
///////////////////// FIN DE HISTORIAAL DE PRODUCTOS ULTIMAS VENTAS

/////////////////////////////////////// RUTAS PARA INVENTARIO GENERAL REPORTE DE INVENTARIO
router.get('/inventarioGeneralReporteInventario', getAllinventarioGeneralReporteInventario)

//ver un estatus
router.get('/inventarioGeneralReporteInventario/:id', getinventarioGeneralReporteInventario)

//crear estatus
router.post('/inventarioGeneralReporteInventario', createinventarioGeneralReporteInventario)

//eliminar estatus
router.delete('/inventarioGeneralReporteInventario/:id', disableinventarioGeneralReporteInventario)

//actualizar estatus
router.put('/inventarioGeneralReporteInventario/:id', updateinventarioGeneralReporteInventario)
///////////////////// FIN DE INVENTARIO GENERAL REPORTE DE INVENTARIO

/////////////////////////////////////// RUTAS PARA INVENTARIO GENERAL REPORTE DE INVENTARIO
router.get('/listadoProductosMargenProductos', getAlllistadoProductosMargenProductos)

//ver un estatus
router.get('/listadoProductosMargenProductos/:id', getlistadoProductosMargenProductos)

//crear estatus
router.post('/listadoProductosMargenProductos', createlistadoProductosMargenProductos)

//eliminar estatus
router.delete('/listadoProductosMargenProductos/:id', disablelistadoProductosMargenProductos)

//actualizar estatus
router.put('/listadoProductosMargenProductos/:id', updatelistadoProductosMargenProductos)
///////////////////// FIN DE INVENTARIO GENERAL REPORTE DE INVENTARIO

///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO COMPRAS ////////////////////////////////////////////




///////////////////////////////////////////// RUTAS DE MICROSERVICIO VENTAS ////////////////////////////////////////////

/////////////////////////////////////// RUTAS PARA TABLA DE COTIZACIONES  
router.get('/Cotizaciones', getAllCotizaciones)

//ver un estatus
router.get('/Cotizaciones/:id',  getCotizaciones)

//crear estatus
router.post('/Cotizaciones', createCotizaciones)

//deshabilita  estatus
router.put('/Cotizaciones/:id',  disableCotizaciones)

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
router.put('/Pedido/:id',  disablePedido)

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
router.put('/Pedidos/:id',  disablePedidos)

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
router.put('/DetallePedido/:id',  disableDetallePedido)

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
router.put('/VerPedido/:id', disableVerPedido)

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
router.put('/FormaPagoPedido/:id', disableFormasPagoPedido)

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
router.put('/LogisticaPedidos/:id', disableLogisticaPedidos)

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
router.put('/PedidosPendientesSurtir/:id', disablePedidosPendientesSurt)

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
router.put('/AgregarProveedor/:id', disableAgregarProveedor)

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
router.put('/Proveedores/:id', disableProveedores)

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
router.put('/ProveedoresProducto/:id', disableProveedoresProducto)

//actualizar estatus
router.put('/ProveedoresProducto/:id', updateProveedoresProducto)
/////////// FIN DE PROVEEDORES DEL PRODUCTO


///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO VENTAS ////////////////////////////////////////////




///////////////////////////////////////////// RUTAS DE MICROSERVICIO ADMINISTRACION ////////////////////////////////////////////


///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO ADMINISTRACION ////////////////////////////////////////////




///////////////////////////////////////////// RUTAS DE MICROSERVICIO ALMACEN ////////////////////////////////////////////


///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO ALMACEN ////////////////////////////////////////////




///////////////////////////////////////////// RUTAS DE MICROSERVICIO MARKETING ////////////////////////////////////////////


///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO MARKETING ////////////////////////////////////////////



///////////////////////////////////////////// RUTAS DE MICROSERVICIOS SIN UBICAR ////////////////////////////////////////////

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