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
    ///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO COMPRAS ////////////////////////////////////////////

    ///////////////////////////////////////////// RUTAS DE MICROSERVICIO PRODUCTOS ////////////////////////////////////////////
    getAllTransMasProdTrans,getTransMasProdTrans,createTransMasProdTrans,disableTransMasProdTrans,updateTransMasProdTrans,getAllMarcasproducto,getMarcasproducto,
    createMarcasproducto,disableMarcasproducto,updateMarcasproducto,getAllProductoscotizados,getProductoscotizados,createProductoscotizados,disableProductoscotizados,
    updateProductoscotizados,getAllProductosPedido,getProductosPedido,createProductosPedido,disableProductosPedido,updateProductosPedido,
    getAllProductosRelacionados,getProductosRelacionados,createProductosRelacionados,disableProductosRelacionados,updateProductosRelacionados,
    getAllProductosSurtidosPedido,getProductosSurtidosPedido,createProductosSurtidosPedido,disableProductosSurtidosPedido,updateProductosSurtidosPedido,
    getAllProductosSurtirPedido,getProductosSurtirPedido,createProductosSurtirPedido,disableProductosSurtirPedido,updateProductosSurtirPedido,
    getAllProductosTransRecordProd,getProductosTransRecordProd,createProductosTransRecordProd,disableProductosTransRecordProd,updateProductosTransRecordProd,
    getAllRecordProducto,getRecordProducto,createRecordProducto,disableRecordProducto,updateRecordProducto,
    ///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO PRODUCTOS////////////////////////////////////////////


    ///////////////////////////////////////////// RUTAS DE MICROSERVICIO VENTAS ////////////////////////////////////////////

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

///////////////////////////////////////////// RUTAS DE MICROSERVICIO Productos ////////////////////////////////////////////

/////////////////////////////////////// RUTAS PARA TABLA DE Listado transferencia masiva productos transferencia  
router.get('/ListMasivaProductos', getAllTransMasProdTrans)

//ver 
router.get('/ListMasivaProductos/:id', getTransMasProdTrans)

//crear 
router.post('/ListMasivaProductos', createTransMasProdTrans)

//disable 
router.put('/ListMasivaProductos/:id', disableTransMasProdTrans)

//actualizar 
router.put('/ListMasivaProductos/:id', updateTransMasProdTrans)
/////////// FIN DE ListMasivaProductos

/////////////////////////////////////// RUTAS PARA TABLA DE Marcas Producto 
router.get('/MarcasProducto', getAllMarcasproducto)

//ver un
router.get('/MarcasProducto/:id', getMarcasproducto)

//crear  
router.post('/MarcasProducto', createMarcasproducto)

//disable 
router.put('/MarcasProducto/:id', disableMarcasproducto)

//actualizar 
router.put('/MarcasProducto/:id', updateMarcasproducto)
/////////// FIN DE Marcas Producto

/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS COTIZADOS 
router.get('/ProductosCotizados', getAllProductoscotizados)

//ver un 
router.get('/ProductosCotizados/:id', getProductoscotizados)

//crear 
router.post('/ProductosCotizados', createProductoscotizados)

//disable 
router.put('/ProductosCotizados/:id', disableProductoscotizados)

//actualizar 
router.put('/ProductosCotizados/:id', updateProductoscotizados)
/////////// FIN DE PRODUCTOS COTIZADOS

/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS PEDIDO 
router.get('/ProductosPedido', getAllProductosPedido)

//ver un 
router.get('/ProductosPedido/:id', getProductosPedido)

//crear
router.post('/ProductosPedido', createProductosPedido)

//disable 
router.put('/ProductosPedido/:id', disableProductosPedido)

//actualizar 
router.put('/ProductosPedido/:id', updateProductosPedido)
/////////// FIN DE PRODUCTOS PEDIDO 

/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS RELACIONADOS
router.get('/ProductosRelacionados', getAllProductosRelacionados)

//ver un
router.get('/ProductosRelacionados/:id', getProductosRelacionados)

//crear
router.post('/ProductosRelacionados', createProductosRelacionados)

//disable 
router.put('/ProductosRelacionados/:id', disableProductosRelacionados)

//actualizar
router.put('/ProductosRelacionados/:id', updateProductosRelacionados)
/////////// FIN DE PRODUCTOS RELACIONADOS

/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS SURTIDOS PEDIDOS
router.get('/ProductosSurtidosPedido', getAllProductosSurtidosPedido)

//ver un 
router.get('/ProductosSurtidosPedido/:id', getProductosSurtidosPedido)

//crear 
router.post('/ProductosSurtidosPedido', createProductosSurtidosPedido)

//disable 
router.put('/ProductosSurtidosPedido/:id', disableProductosSurtidosPedido)

//actualizar 
router.put('/ProductosSurtidosPedido/:id', updateProductosSurtidosPedido)
/////////// FIN DE PRODUCTOS SURTIDOS PEDIDOS

/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS SURTIR PEDIDOS
router.get('/ProductosSurtirPedido', getAllProductosSurtirPedido)

//ver un 
router.get('/ProductosSurtirPedido/:id', getProductosSurtirPedido)

//crear 
router.post('/ProductosSurtirPedido', createProductosSurtirPedido)

//disable 
router.put('/ProductosSurtirPedido/:id', disableProductosSurtirPedido)

//actualizar 
router.put('/ProductosSurtirPedido/:id', updateProductosSurtirPedido)
/////////// FIN DE PRODUCTOS SURTIR PEDIDOS

/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS SURTIR PEDIDOS
router.get('/ProductosSurtirPedido', getAllProductosSurtirPedido)

//ver un
router.get('/ProductosSurtirPedido/:id', getProductosSurtirPedido)

//crear 
router.post('/ProductosSurtirPedido', createProductosSurtirPedido)

//disable 
router.put('/ProductosSurtirPedido/:id', disableProductosSurtirPedido)

//actualizar 
router.put('/ProductosSurtirPedido/:id', updateProductosSurtirPedido)
/////////// FIN DE PRODUCTOS SURTIR PEDIDOS

////////////////////////////////////// RUTAS PARA TABLA DE ProductosTransRecordProd
router.get('/ProductosTransRecord', getAllProductosTransRecordProd)

//ver uno
router.get('/ProductosTransRecord/:id', getProductosTransRecordProd)

//crear 
router.post('/ProductosTransRecord', createProductosTransRecordProd)

//disable 
router.put('/ProductosTransRecord/:id', disableProductosTransRecordProd)

//actualizar 
router.put('/ProductosTransRecord/:id', updateProductosTransRecordProd)
/////////// FIN DE ProductosTransRecordProd

////////////////////////////////////// RUTAS PARA TABLA DE Record Producto
router.get('/RecordProducto', getAllRecordProducto)

//ver uno
router.get('/RecordProducto/:id', getRecordProducto)

//crear 
router.post('/RecordProducto', createRecordProducto)

//disable
router.put('/RecordProducto/:id', disableTransMasProdTrans)

//actualizar 
router.put('/RecordProducto/:id', updateRecordProducto)
/////////// FIN DE Record Producto

///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO Productos ////////////////////////////////////////////



///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO COMPRAS ////////////////////////////////////////////




///////////////////////////////////////////// RUTAS DE MICROSERVICIO VENTAS ////////////////////////////////////////////


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