const { Router } = require("express")
const pool = require('../database')
const multer = require("multer"); // Importar multer
const upload = multer();

const { getAllVentasRealizadas, getAllClientesPos, getAllCortesdeCaja }= require('../controllers/controllersPOS');

const router =  Router();

//ver ventas
router.get('/VentasRealizadas', getAllVentasRealizadas);



/////
router.get('/ClientesPos', getAllClientesPos);

/////
router.get('/CortesdeCaja', getAllCortesdeCaja);

module.exports  =  router;