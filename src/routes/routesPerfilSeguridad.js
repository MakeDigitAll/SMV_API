const { Router } = require("express");
const pool = require("../database");
const multer = require("multer"); // Importar multer
const upload = multer(); // Crear una instancia de multer
const {
  ///////////////////////////////////////////// RUTAS DE MICROSERVICIO PERFILES DE SEGURIDAD ////////////////////////////////////////////
  createPerfilSeguridad,
  getPerfilSeguridad

  ///////////////////////////////////////////// FIN DE RUTAS DE PERFILES DE SEGURIDAD ////////////////////////////////////////////
} = require("../controllers/controllersPerfilSeguridad");

const router = Router();

///////////////////////////////////////////// RUTAS DE PERFILES DE SEGURIDAD ////////////////////////////////////////////

/////////////////////////////////////// RUTAS PARA TABLA DE NUEVA ORDEN DE COMPRA - FOLIOS DE SURTIDO
//ver estatus
router.get("/PerfilesSeguridad", getPerfilSeguridad);


// //crear estatus
router.post("/PerfilesSeguridad", createPerfilSeguridad);

module.exports = router;
