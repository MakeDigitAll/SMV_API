const { Router } = require("express")
const pool = require('../database')
const multer = require("multer"); // Importar multer
const upload = multer();

const { getAllVentasRealizadas, getAllClientesPos, getAllCortesdeCaja, createClientesPos, getClientesPos, updateClientePos, disableClientesPos }= require('../controllers/controllersPOS');

const router =  Router();

//ver ventas
router.get('/VentasRealizadas', getAllVentasRealizadas);



/////Clientes
router.get('/ClientesPos', getAllClientesPos);
router.get('/ClientesPos/:id', getClientesPos);
router.post('/NuevoClientesPos',createClientesPos);
router.put('/ClientesPosEdit/:id',updateClientePos);
router.post('/ClientePosDisable/:id',disableClientesPos);
/////Cortes de Caja
router.get('/CortesdeCaja', getAllCortesdeCaja);

module.exports  =  router;