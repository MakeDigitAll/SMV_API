const { Router } = require("express")
const pool = require('../database')

const { getAllStatus, getStatus, createStatus, deleteStatus, updateStatus, 
    getAllOrcFoliosSur,getOrcFoliosSur, createOrcFoliosSur, deleteOrcFoliosSur, updateOrcFoliosSur, 
    getAllOrcArchvivosAdj,getOrcArchvivosAdj,createOrcArchvivosAdj,deleteOrcArchvivosAdj,updateOrcArchvivosAdj,
    getAllOrdenArchivosAdjuntos, getOrdenArchvivosAdj, createOrdenArchivosAdjuntos, deleteOrdenArchivosAdjuntos, updateOrdenArchivosAdjuntos,
    getAllOrdenFoliosSurtidos, getOrdenFoliosSurtidos, createOrdenFoliosSurtidos, deleteOrdenFoliosSurtidos, updateOrdenFoliosSurtidos, 
    getAllOrdenListadoEntrada, getOrdenListadoEntrada, createOrdenListadoEntrada, deleteOrdenListadoEntrada, updateOrdenListadoEntrada, 
    getAllProductos, getProducto, createProducto, deleteProducto, updateProducto, 
    getAllProductosOrdenCompra, getProductosOrdenCompra, createProductosOrdenCompra, deleteProductosOrdenCompra, updateProductosOrdenCompra, 
    getAllListadoProduct, getListadoProduct, createListadoProduct, deleteListadoProduct, updateListadoProduct} = require('../controllers/task.controller');

const router =  Router();

/*const { getUsers }= require("../controllers/index.controller");

router.get('/users', getUsers); */


/////////////////////////////////////// RUTAS PARA TABLA DE ESTATUS ////////////////////////////////////////

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



/////////////////////////////////////// RUTAS PARA TABLA DE NUEVA ORDEN DE COMPRA - FOLIOS DE SURTIDO ////////////////////////////////////////
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


/////////////////////////////////////// RUTAS PARA TABLA DE NUEVA ORDEN DE COMPRA - ARCHIVOS ADJUNTOS ////////////////////////////////////////
router.get('/NuevaOrdenCompra/ArchivosAdjuntos', getAllOrcArchvivosAdj)

//ver un estatus
router.get('/NuevaOrdenCompra/ArchivosAdjuntos/:id', getOrcArchvivosAdj)

//crear estatus
router.post('/NuevaOrdenCompra/ArchivosAdjuntos', createOrcArchvivosAdj)

//eliminar estatus
router.delete('/NuevaOrdenCompra/ArchivosAdjuntos/:id', deleteOrcArchvivosAdj)

//actualizar estatus
router.put('/NuevaOrdenCompra/ArchivosAdjuntos/:id', updateOrcArchvivosAdj)




/////////////////////////////////////// RUTAS PARA TABLA DE ORDEN DE COMPRA - ARCHIVOS ADJUNTOS  ////////////////////////////////////////
router.get('/OrdenCompra/ArchivosAdjuntos', getAllOrdenArchivosAdjuntos)

//ver un estatus
router.get('/OrdenCompra/ArchivosAdjuntos/:id', getOrdenArchvivosAdj)

//crear estatus
router.post('/OrdenCompra/ArchivosAdjuntos', createOrdenArchivosAdjuntos)

//eliminar estatus
router.delete('/OrdenCompra/ArchivosAdjuntos/:id', deleteOrdenArchivosAdjuntos)

//actualizar estatus
router.put('/OrdenCompra/ArchivosAdjuntos/:id', updateOrdenArchivosAdjuntos)



/////////////////////////////////////// RUTAS PARA TABLA DE ORDEN DE COMPRA - FOLIOS SURTIDOS  ////////////////////////////////////////
router.get('/OrdenCompra/FoliosSurtidos', getAllOrdenFoliosSurtidos)

//ver un estatus
router.get('/OrdenCompra/FoliosSurtidos/:id', getOrdenFoliosSurtidos)

//crear estatus
router.post('/OrdenCompra/FoliosSurtidos', createOrdenFoliosSurtidos)

//eliminar estatus
router.delete('/OrdenCompra/FoliosSurtidos/:id', deleteOrdenFoliosSurtidos)

//actualizar estatus
router.put('/OrdenCompra/FoliosSurtidos/:id', updateOrdenFoliosSurtidos)



/////////////////////////////////////// RUTAS PARA TABLA DE ORDEN DE COMPRA - LISTADO DE ENTRADAS  ////////////////////////////////////////
router.get('/OrdenCompra/ListadoEntradas', getAllOrdenListadoEntrada)

//ver un estatus
router.get('/OrdenCompra/ListadoEntradas/:id', getOrdenListadoEntrada)

//crear estatus
router.post('/OrdenCompra/ListadoEntradas', createOrdenListadoEntrada)

//eliminar estatus
router.delete('/OrdenCompra/ListadoEntradas/:id', deleteOrdenListadoEntrada)

//actualizar estatus
router.put('/OrdenCompra/ListadoEntradas/:id', updateOrdenListadoEntrada)



/////////////////////////////////////// RUTAS PARA TABLA DE LISTADO PRODUCTOS  ////////////////////////////////////////
router.get('/ListadoProductos', getAllListadoProduct)

//ver un estatus
router.get('/ListadoProductos/:id', getListadoProduct)

//crear estatus
router.post('/ListadoProductos', createListadoProduct)

//eliminar estatus
router.delete('/ListadoProductos/:id', deleteListadoProduct)

//actualizar estatus
router.put('/ListadoProductos/:id', updateListadoProduct)



/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS  ////////////////////////////////////////
router.get('/Productos', getAllProductos)

//ver un estatus
router.get('/Productos/:id', getProducto)

//crear estatus
router.post('/Productos', createProducto)

//eliminar estatus
router.delete('/Productos/:id', deleteProducto)

//actualizar estatus
router.put('/Productos/:id', updateProducto)


/////////////////////////////////////// RUTAS PARA TABLA DE PRODUCTOS EN LA ORDEN DE COMPRA  ////////////////////////////////////////
router.get('/OrdenCompra/ProductosOrdenCompra', getAllProductosOrdenCompra)

//ver un estatus
router.get('/OrdenCompra/ProductosOrdenCompra/:id', getProductosOrdenCompra)

//crear estatus
router.post('/OrdenCompra/ProductosOrdenCompra', createProductosOrdenCompra)

//eliminar estatus
router.delete('/OrdenCompra/ProductosOrdenCompra/:id', deleteProductosOrdenCompra)

//actualizar estatus
router.put('/OrdenCompra/ProductosOrdenCompra/:id', updateProductosOrdenCompra)




module.exports  =  router;