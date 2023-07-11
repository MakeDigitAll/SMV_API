const { Router } = require("express")
const pool = require('../database')

const { 
    ///////////////////////////////////////////// RUTAS DE MICROSERVICIO COMPRAS ////////////////////////////////////////////
    getAllOrcFoliosSur,getOrcFoliosSur, createOrcFoliosSur, deleteOrcFoliosSur, updateOrcFoliosSur, 
    getAllOrcArchvivosAdj,getOrcArchvivosAdj,createOrcArchvivosAdj,deleteOrcArchvivosAdj,updateOrcArchvivosAdj,
    getAllOrdenArchivosAdjuntos, getOrdenArchvivosAdj, createOrdenArchivosAdjuntos, deleteOrdenArchivosAdjuntos, updateOrdenArchivosAdjuntos,
    getAllOrdenFoliosSurtidos, getOrdenFoliosSurtidos, createOrdenFoliosSurtidos, deleteOrdenFoliosSurtidos, updateOrdenFoliosSurtidos, 
    getAllOrdenListadoEntrada, getOrdenListadoEntrada, createOrdenListadoEntrada, deleteOrdenListadoEntrada, updateOrdenListadoEntrada, 
    getAllProductos, getProducto, createProducto, deleteProducto, updateProducto, 
    getAllProductosOrdenCompra, getProductosOrdenCompra, createProductosOrdenCompra, deleteProductosOrdenCompra, updateProductosOrdenCompra, 
    getAllListadoProduct, getListadoProduct, createListadoProduct, deleteListadoProduct, updateListadoProduct,
    getAllListadoProductDesc, getListadoProductDesc, createListadoProductDesc, deleteListadoProductDesc, updateListadoProductDesc, 
    ///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO COMPRAS ////////////////////////////////////////////


    ///////////////////////////////////////////// RUTAS DE MICROSERVICIO VENTAS ////////////////////////////////////////////
    getAllCotizaciones, getCotizaciones, createCotizaciones, deleteCotizaciones, updateCotizaciones,
    getAllPedido, getPedido, createPedido, deletePedido, updatePedido,
    getAllPedidos, getPedidos, createPedidos, deletePedidos, updatePedidos,
    getAllDetallePedido, getDetallePedido, createDetallePedido, deleteDetallePedido, updateDetallePedido,
    getAllVerPedido, getVerPedido, createVerPedido, deleteVerPedido, updateVerPedido,
    getAllFormasPagoPedido, getFormasPagoPedido, createFormasPagoPedido, deleteFormasPagoPedido, updateFormasPagoPedido,
    ///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO VENTAS ////////////////////////////////////////////


    ///////////////////////////////////////////// RUTAS DE MICROSERVICIO ADMINISTRACION ////////////////////////////////////////////

    ///////////////////////////////////////////// FIN DE RUTAS DE RUTAS ADMINISTRACION ////////////////////////////////////////////


    ///////////////////////////////////////////// RUTAS DE MICROSERVICIO ALMACEN ////////////////////////////////////////////

    ///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO ALMACEN ////////////////////////////////////////////


    ///////////////////////////////////////////// RUTAS DE MICROSERVICIO MARKETING ////////////////////////////////////////////

    ///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO MARKETING ////////////////////////////////////////////



    ///////////////////////////////////////////// RUTAS SIN UBICAR  ////////////////////////////////////////////
    getAllStatus, getStatus, createStatus, deleteStatus, updateStatus,       


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

//eliminar estatus
router.delete('/NuevaOrdenCompra/Folios/:id', deleteOrcFoliosSur)

//actualizar estatus
router.put('/NuevaOrdenCompra/Folios/:id', updateOrcFoliosSur)
//////////////// FIN DE NUEVA ORDEN DE COMPRA - FOLIOS DE SURTIDO 



/////////////////////////////////////// RUTAS PARA TABLA DE NUEVA ORDEN DE COMPRA - ARCHIVOS ADJUNTOS 
router.get('/NuevaOrdenCompra/ArchivosAdjuntos', getAllOrcArchvivosAdj)

//ver un estatus
router.get('/NuevaOrdenCompra/ArchivosAdjuntos/:id', getOrcArchvivosAdj)

//crear estatus
router.post('/NuevaOrdenCompra/ArchivosAdjuntos', createOrcArchvivosAdj)

//eliminar estatus
router.delete('/NuevaOrdenCompra/ArchivosAdjuntos/:id', deleteOrcArchvivosAdj)

//actualizar estatus
router.put('/NuevaOrdenCompra/ArchivosAdjuntos/:id', updateOrcArchvivosAdj)
///////////////////// FIN DE NUEVA ORDEN DE COMPRA - ARCHIVOS ADJUNTOS



/////////////////////////////////////// RUTAS PARA TABLA DE ORDEN DE COMPRA - ARCHIVOS ADJUNTOS  
router.get('/OrdenCompra/ArchivosAdjuntos', getAllOrdenArchivosAdjuntos)

//ver un estatus
router.get('/OrdenCompra/ArchivosAdjuntos/:id', getOrdenArchvivosAdj)

//crear estatus
router.post('/OrdenCompra/ArchivosAdjuntos', createOrdenArchivosAdjuntos)

//eliminar estatus
router.delete('/OrdenCompra/ArchivosAdjuntos/:id', deleteOrdenArchivosAdjuntos)

//actualizar estatus
router.put('/OrdenCompra/ArchivosAdjuntos/:id', updateOrdenArchivosAdjuntos)
///////////////// FIN DE ORDEN DE COMPRA - ARCHIVOS ADJUNTOS



/////////////////////////////////////// RUTAS PARA TABLA DE ORDEN DE COMPRA - FOLIOS SURTIDOS  
router.get('/OrdenCompra/FoliosSurtidos', getAllOrdenFoliosSurtidos)

//ver un estatus
router.get('/OrdenCompra/FoliosSurtidos/:id', getOrdenFoliosSurtidos)

//crear estatus
router.post('/OrdenCompra/FoliosSurtidos', createOrdenFoliosSurtidos)

//eliminar estatus
router.delete('/OrdenCompra/FoliosSurtidos/:id', deleteOrdenFoliosSurtidos)

//actualizar estatus
router.put('/OrdenCompra/FoliosSurtidos/:id', updateOrdenFoliosSurtidos)
////////////// FIN DE FOLIOS SURTIDOS



/////////////////////////////////////// RUTAS PARA TABLA DE ORDEN DE COMPRA - LISTADO DE ENTRADAS  
router.get('/OrdenCompra/ListadoEntradas', getAllOrdenListadoEntrada)

//ver un estatus
router.get('/OrdenCompra/ListadoEntradas/:id', getOrdenListadoEntrada)

//crear estatus
router.post('/OrdenCompra/ListadoEntradas', createOrdenListadoEntrada)

//eliminar estatus
router.delete('/OrdenCompra/ListadoEntradas/:id', deleteOrdenListadoEntrada)

//actualizar estatus
router.put('/OrdenCompra/ListadoEntradas/:id', updateOrdenListadoEntrada)
/////////////////////// FIN DE LISTADO DE ENTRADAS



/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS EN LA ORDEN DE COMPRA  
router.get('/OrdenCompra/ProductosOrdenCompra', getAllProductosOrdenCompra)

//ver un estatus
router.get('/OrdenCompra/ProductosOrdenCompra/:id', getProductosOrdenCompra)

//crear estatus
router.post('/OrdenCompra/ProductosOrdenCompra', createProductosOrdenCompra)

//eliminar estatus
router.delete('/OrdenCompra/ProductosOrdenCompra/:id', deleteProductosOrdenCompra)

//actualizar estatus
router.put('/OrdenCompra/ProductosOrdenCompra/:id', updateProductosOrdenCompra)
//////////////////////////// FIN DE PRODUCTOS EN LA ORDEN DE COMPRA



/////////////////////////////////////// RUTAS PARA TABLA DE LISTADO PRODUCTOS  
router.get('/ListadoProductos', getAllListadoProduct)

//ver un estatus
router.get('/ListadoProductos/:id', getListadoProduct)

//crear estatus
router.post('/ListadoProductos', createListadoProduct)

//eliminar estatus
router.delete('/ListadoProductos/:id', deleteListadoProduct)

//actualizar estatus
router.put('/ListadoProductos/:id', updateListadoProduct)
////////////////// FIN DE LISTADO PRODUCTOS


/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS  
router.get('/Productos', getAllProductos)

//ver un estatus
router.get('/Productos/:id', getProducto)

//crear estatus
router.post('/Productos', createProducto)

//eliminar estatus
router.delete('/Productos/:id', deleteProducto)

//actualizar estatus
router.put('/Productos/:id', updateProducto)
/////////// FIN DE PRODUCTOS


/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS  
router.get('/ListadoProductosDescuento', getAllListadoProductDesc)

//ver un estatus
router.get('/ListadoProductosDescuento/:id', getListadoProductDesc )

//crear estatus
router.post('/ListadoProductosDescuento', createListadoProductDesc)

//eliminar estatus
router.delete('/ListadoProductosDescuento/:id', deleteListadoProductDesc )

//actualizar estatus
router.put('/ListadoProductosDescuento/:id', updateListadoProductDesc)
/////////// FIN DE PRODUCTOS






///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO COMPRAS ////////////////////////////////////////////




///////////////////////////////////////////// RUTAS DE MICROSERVICIO VENTAS ////////////////////////////////////////////

/////////////////////////////////////// RUTAS PARA TABLA DE COTIZACIONES  
router.get('/Cotizaciones', getAllCotizaciones)

//ver un estatus
router.get('/Cotizaciones/:id',  getCotizaciones)

//crear estatus
router.post('/Cotizaciones', createCotizaciones)

//eliminar estatus
router.delete('/Cotizaciones/:id',  deleteCotizaciones)

//actualizar estatus
router.put('/Cotizaciones/:id', updateCotizaciones)
/////////// FIN DE COTIZACIONES


/////////////////////////////////////// RUTAS PARA TABLA DE PEDIDO  
router.get('/Pedido', getAllPedido)

//ver un estatus
router.get('/Pedido/:id',  getPedido)

//crear estatus
router.post('/Pedido', createPedido)

//eliminar estatus
router.delete('/Pedido/:id',  deletePedido)

//actualizar estatus
router.put('/Pedido/:id', updatePedido)
/////////// FIN DE PEDIDO


/////////////////////////////////////// RUTAS PARA TABLA DE PEDIDOS
router.get('/Pedidos', getAllPedidos)

//ver un estatus
router.get('/Pedidos/:id',  getPedidos)

//crear estatus
router.post('/Pedidos', createPedidos)

//eliminar estatus
router.delete('/Pedidos/:id',  deletePedidos)

//actualizar estatus
router.put('/Pedidos/:id', updatePedidos)
/////////// FIN DE PEDIDOS


/////////////////////////////////////// RUTAS PARA TABLA DE DETALLE DE PEDIDO  
router.get('/DetallePedido', getAllDetallePedido)

//ver un estatus
router.get('/DetallePedido/:id',  getDetallePedido)

//crear estatus
router.post('/DetallePedido', createDetallePedido)

//eliminar estatus
router.delete('/DetallePedido/:id',  deleteDetallePedido)

//actualizar estatus
router.put('/DetallePedido/:id', updateDetallePedido)
/////////// FIN DE DETALLE DE PEDIDO


/////////////////////////////////////// RUTAS PARA TABLA DE VER PEDIDO  
router.get('/VerPedido', getAllVerPedido)

//ver un estatus
router.get('/VerPedido/:id', getVerPedido)

//crear estatus
router.post('/VerPedido', createVerPedido)

//eliminar estatus
router.delete('/VerPedido/:id', deleteVerPedido)

//actualizar estatus
router.put('/VerPedido/:id', updateVerPedido)
/////////// FIN DE VER PEDIDO


/////////////////////////////////////// RUTAS PARA TABLA DE FORMAS DE PAGO DE PEDIDO
router.get('/FormaPagoPedido', getAllFormasPagoPedido)

//ver un estatus
router.get('/FormaPagoPedido/:id',getFormasPagoPedido)

//crear estatus
router.post('/FormaPagoPedido', createFormasPagoPedido)

//eliminar estatus
router.delete('/FormaPagoPedido/:id', deleteFormasPagoPedido)

//actualizar estatus
router.put('/FormaPagoPedido/:id', updateFormasPagoPedido)
/////////// FIN DE FORMAS DE PAGO DE PEDIDO

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

//eliminar estatus
router.delete('/status/:id', deleteStatus)

//actualizar estatus
router.put('/status/:id', updateStatus)
//////////////// FIN DE ESTATUS








module.exports  =  router;