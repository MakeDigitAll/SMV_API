const { Router } = require("express")
const pool = require('../database')

const {

    ///////////////////////////////////////////// RUTAS DE MICROSERVICIO COMPRAS ////////////////////////////////////////////
    getAllOrcFoliosSur,getOrcFoliosSur, createOrcFoliosSur, disableOrcFoliosSur, updateOrcFoliosSur, 
    getAllOrcArchvivosAdj,getOrcArchvivosAdj,createOrcArchvivosAdj,disableOrcArchvivosAdj,updateOrcArchvivosAdj,
    getAllOrdenArchivosAdjuntos, getOrdenArchvivosAdj, createOrdenArchivosAdjuntos, disableOrdenArchivosAdjuntos, updateOrdenArchivosAdjuntos,
    getAllOrdenFoliosSurtidos, getOrdenFoliosSurtidos, createOrdenFoliosSurtidos, disableOrdenFoliosSurtidos, updateOrdenFoliosSurtidos, 
    getAllOrdenListadoEntrada, getOrdenListadoEntrada, createOrdenListadoEntrada, disableOrdenListadoEntrada, updateOrdenListadoEntrada,parcialOrdenListadoEntrada,entregasOrdenListadoEntrada,rutasOrdenListadoEntrada,embarqueOrdenListadoEntrada,surtidoOrdenListadoEntrada, 
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


    getAllTransMasProdTrans,getTransMasProdTrans,createTransMasProdTrans,disableTransMasProdTrans,updateTransMasProdTrans,getAllMarcasproducto,getMarcasproducto,
    createMarcasproducto,disableMarcasproducto,updateMarcasproducto,getAllProductoscotizados,getProductoscotizados,createProductoscotizados,disableProductoscotizados,
    updateProductoscotizados,getAllProductosPedido,getProductosPedido,createProductosPedido,disableProductosPedido,updateProductosPedido,
    getAllProductosRelacionados,getProductosRelacionados,createProductosRelacionados,disableProductosRelacionados,updateProductosRelacionados,
    getAllProductosSurtidosPedido,getProductosSurtidosPedido,createProductosSurtidosPedido,disableProductosSurtidosPedido,updateProductosSurtidosPedido,
    getAllProductosSurtirPedido,getProductosSurtirPedido,createProductosSurtirPedido,disableProductosSurtirPedido,updateProductosSurtirPedido,
    getAllProductosTransRecordProd,getProductosTransRecordProd,createProductosTransRecordProd,disableProductosTransRecordProd,updateProductosTransRecordProd,
    getAllRecordProducto,getRecordProducto,createRecordProducto,disableRecordProducto,updateRecordProducto, getAllTransIndividual, createTransIndividual, getAllListadoEntradas, getAllListadoSalidas, getAllMotivosEntrada, createMotivosEntrada, getMotivosEntrada, updateMotivosEntrada, createListadoEntradas, getAllSucursalesAlmacen, getSucursalesAlmacen, createSucursalesAlmacen, disableSucursalesAlmacen, updateSucursalesAlmacen, getAllSucursalesDatos, getSucursalesDatos, createSucursalesDatos, updateSucursalesDatos, disableSucursalesDatos,
    ///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO COMPRAS ////////////////////////////////////////////


}  = require('../controllers/controllersCompras');

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
router.put('/NuevaOrdenCompra/FoliosDisable/:id', disableOrcFoliosSur)

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
router.put('/NuevaOrdenCompra/ArchivosAdjuntosDisable/:id', disableOrcArchvivosAdj)

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
router.put('/OrdenCompra/ArchivosAdjuntosDisable/:id', disableOrdenArchivosAdjuntos)

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
router.put('/OrdenCompra/FoliosSurtidosDisable/:id', disableOrdenFoliosSurtidos)

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
router.put('/OrdenCompra/ListadoEntradasDisable/:id', disableOrdenListadoEntrada)

//actualizar estatus
router.put('/OrdenCompra/ListadoEntradas/:id', updateOrdenListadoEntrada)
/////////////////////// FIN DE LISTADO DE ENTRADAS

//Parcial  estatus
router.post('/OrdenCompra/ListadoEntradasParcial/:id', parcialOrdenListadoEntrada)
//Entregas  estatus
router.post('/OrdenCompra/ListadoEntradasEntregas/:id', entregasOrdenListadoEntrada)
//rutas  estatus
router.post('/OrdenCompra/ListadoEntradasRutas/:id', rutasOrdenListadoEntrada)
//Embarque  estatus
router.post('/OrdenCompra/ListadoEntradasEmbarque/:id', embarqueOrdenListadoEntrada)
//Embarque  estatus
router.post('/OrdenCompra/ListadoEntradasSurtido/:id', surtidoOrdenListadoEntrada)


/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS EN LA ORDEN DE COMPRA  
router.get('/OrdenCompra/ProductosOrdenCompra', getAllProductosOrdenCompra)

//ver un estatus
router.get('/OrdenCompra/ProductosOrdenCompra/:id', getProductosOrdenCompra)

//crear estatus
router.post('/OrdenCompra/ProductosOrdenCompra', createProductosOrdenCompra)

//deshabilita  estatus
router.put('/OrdenCompra/ProductosOrdenCompraDisable/:id', disableProductosOrdenCompra)

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
router.put('/ListadoProductosDisable/:id', disableListadoProduct)

//actualizar estatus
router.put('/ListadoProductos/:id', updateListadoProduct)
////////////////// FIN DE LISTADO PRODUCTOS


/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS  
router.get('/Productos', getAllProductos)

//ver un estatus
router.get('/Productos/:id', getProducto)

//crear estatus
router.post('/Productos', createProducto)

router.get('/ProductosDisable', getAllProductos)

//deshabilita  estatus
router.put('/ProductosDisable/:id', disableProducto)

//actualizar estatus
router.put('/Productos/:id', updateProducto)
/////////// FIN DE PRODUCTOS


/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS  
router.get('/ListadoProductosDescuento', getAllListadoProductDesc)

//ver un estatus
router.get('/ListadoProductosDescuento/:id', getListadoProductDesc )

//crear estatus
router.post('/ListadoProductosDescuento', createListadoProductDesc)

//deshabilita  estatus
router.put('/ListadoProductosDescuentoDisable/:id', disableListadoProductDesc )

//actualizar estatus
router.put('/ListadoProductosDescuento/:id', updateListadoProductDesc)
/////////// FIN DE PRODUCTOS


/////////////////////////////////////// RUTAS PARA TABLA DE AGREGAR UN PRODUCTO RELACIONADO
router.get('/Agregar/ProductoRelacionado', getAllagregarProductoRelacionado)

//ver un estatus
router.get('/Agregar/ProductoRelacionado/:id', getagregarProductoRelacionado)

//crear estatus
router.post('/Agregar/ProductoRelacionado', createagregarProductoRelacionado)

//eliminar estatus
router.put('/Agregar/ProductoRelacionadoDisable/:id', disableagregarProductoRelacionado)

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
router.put('/BuscarProductoDisable/:id', disablebuscarProducto)

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
router.put('/CategoriaDisable/:sku', disablecategoria)

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
router.put('/costoProductosDisable/:id', disablecostoProductos)

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
router.put('/historialProductoDisable/:id', disablehistorialProducto)

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
router.put('/historialProductoUltimasComprasDisable/:id', disablehistorialProductoUltimasCompras)

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
router.put('/historialProductoUltimasVentasDisable/:id', disablehistorialProductoUltimasVentas)

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
router.put('/inventarioGeneralReporteInventarioDisable/:id', disableinventarioGeneralReporteInventario)

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
router.put('/listadoProductosMargenProductosDisable/:id', disablelistadoProductosMargenProductos)

//actualizar estatus
router.put('/listadoProductosMargenProductos/:id', updatelistadoProductosMargenProductos)
///////////////////// FIN DE INVENTARIO GENERAL REPORTE DE INVENTARIO


/////////////////////////////////////// RUTAS PARA TABLA DE Listado transferencia masiva productos transferencia  
router.get('/ListMasivaProductos', getAllTransMasProdTrans)

//ver 
router.get('/ListMasivaProductos/:id', getTransMasProdTrans)

//crear 
router.post('/ListMasivaProductos', createTransMasProdTrans)

//disable 
router.put('/ListMasivaProductosDisable/:id', disableTransMasProdTrans)

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
router.put('/MarcasProductoDisable/:id', disableMarcasproducto)

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
router.put('/ProductosCotizadosDisable/:id', disableProductoscotizados)

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
router.put('/ProductosPedidoDisable/:id', disableProductosPedido)

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
router.put('/ProductosRelacionadosDisable/:id', disableProductosRelacionados)

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
router.put('/ProductosSurtidosPedidoDisable/:id', disableProductosSurtidosPedido)

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
router.put('/ProductosSurtirPedidoDisable/:id', disableProductosSurtirPedido)

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
router.put('/ProductosSurtirPedidoDisable/:id', disableProductosSurtirPedido)

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
router.put('/ProductosTransRecordDisable/:id', disableProductosTransRecordProd)

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
router.put('/RecordProductoDisable/:id', disableRecordProducto)

//actualizar 
router.put('/RecordProducto/:id', updateRecordProducto)
/////////// FIN DE Record Producto
router.get('/TransIndividual', getAllTransIndividual)
router.post('/TransIndividual',createTransIndividual)

router.get('/ListadoEntradas',getAllListadoEntradas)
router.post('/ListadoEntradas',createListadoEntradas)
router.get('/ListadoSalida',getAllListadoSalidas)
router.get('/MotivosEntrada',getAllMotivosEntrada)
router.post('/MotivosEntrada',createMotivosEntrada)
router.get('/MotivosEntrada/:id', getMotivosEntrada)
router.put('/MotivosEntrada/:id', updateMotivosEntrada)
router.get('/SucursalesAlmacen',getAllSucursalesAlmacen)
//ver uno
router.get('/SucursalesAlmacen/:id', getSucursalesAlmacen)

//crear 
router.post('/SucursalesAlmacen', createSucursalesAlmacen)
router.put('/SucursalesAlmacen/:id', updateSucursalesAlmacen)
//disable
router.post('/SucursalesAlmacenDisable/:id', disableSucursalesAlmacen)
//vertodos
router.get('/SucursalesDatos',getAllSucursalesDatos)
//ver uno
router.get('/SucursalesDatos/:id', getSucursalesDatos)
//crear 
router.post('/SucursalesDatos', createSucursalesDatos)
router.put('/SucursalesDatos/:id', updateSucursalesDatos)
//disable
router.post('/SucursalesDatos/:id', disableSucursalesDatos)
///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO COMPRAS ////////////////////////////////////////////





///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO COMPRAS ////////////////////////////////////////////




module.exports  =  router;