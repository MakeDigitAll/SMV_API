const { Router } = require("express")
const pool = require('../database')

const { 
    ///////////////////////////////////////////// RUTAS DE MICROSERVICIO COMPRAS ////////////////////////////////////////////
 
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



    } = require('../controllers/productosDanielTask.controller');

const router =  Router();


///////////////////////////////////////////// RUTAS DE MICROSERVICIO COMPRAS ////////////////////////////////////////////



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










module.exports  =  router;