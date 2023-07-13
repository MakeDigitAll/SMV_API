const { Router } = require("express")
const pool = require('../database')

const { 
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
} = require('../controllers/zulema.controller');

const router =  Router();


///////////////////////////////////////////// RUTAS DE MICROSERVICIO Productos ////////////////////////////////////////////

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

///////////////////////////////////////////// FIN DE RUTAS DE MICROSERVICIO Productos ////////////////////////////////////////////

module.exports  =  router;