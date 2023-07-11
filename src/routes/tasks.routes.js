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

/////////////////////////////////////// RUTAS PARA TABLA DE AGREGAR UN PRODUCTO RELACIONADO
router.get('/Agregar/ProductoRelacionado', getAllagregarProductoRelacionado)

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