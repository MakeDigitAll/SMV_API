const { Router } = require("express");
const pool = require("../database");
const multer = require("multer"); // Importar multer
const upload = multer(); // Crear una instancia de multer
const {
  ///////////////////////////////////////////// RUTAS DE MICROSERVICIO PERFILES DE SEGURIDAD ////////////////////////////////////////////
  createPerfilSeguridad,
  getPerfilSeguridad,
  getPermisos_PerfilSeguridad,
  createPermisos_PerfilSeguridad,
  deshabilitarPerfilSeguridad,

  ///////////////////////////////////////////// FIN DE RUTAS DE PERFILES DE SEGURIDAD ////////////////////////////////////////////
} = require("../controllers/controllersPerfilSeguridad");

const router = Router();

///////////////////////////////////////////// RUTAS DE PERFILES DE SEGURIDAD ////////////////////////////////////////////

/////////////////////////////////////// RUTAS PARA TABLA DE NUEVA ORDEN DE COMPRA - FOLIOS DE SURTIDO
//ver estatus
router.get("/PerfilesSeguridad", getPerfilSeguridad);

//ver estatus
router.get("/PerfilesSeguridad/:idPerfilSeguridad", getPermisos_PerfilSeguridad);


// //crear estatus
router.post("/PerfilesSeguridad", createPerfilSeguridad);

// //crear estatus
router.post("/PerfilesSeguridad/:idPerfilSeguridad", createPermisos_PerfilSeguridad);

// //crear estatus
router.delete("/PerfilesSeguridad/:idPerfilSeguridad", deshabilitarPerfilSeguridad);
module.exports = router;
