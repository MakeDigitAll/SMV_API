const express = require("express");
const router = express.Router();
const authenticate = require("../../controllers/auth/authenticated");
const multer = require("multer"); // Importar multer
const upload = multer(); // Crear una instancia de multer
const {
  getAllUsers,
  getUserImage,
  createUser,
  updateUser,
  disableUser,
  autenticarUser,
  refreshToken,
  todos,
  userAuth,
  userLogout,
  getUser,
  getAlldatosUsuarios,
  getdatosUsuarios,
  createdatosUsuarios,
  disabledatosUsuarios,
  updatedatosUsuarios,
  getLastestUsers,
} = require("../../controllers/login/userController");
getAllUsers, getUser, createUser, updateUser, disableUser, todos;
router.get("/api/allusers", getAllUsers);
router.get("/api/user/:id", getUser);
router.get("/api/userImage/:id", getUserImage);
router.post("/api/createuser", upload.single("image"), createUser);
router.put("/api/updateuser/:id", updateUser);
router.post("/api/disableuser/:id", disableUser);
router.post("/api/login", autenticarUser);
router.post("/api/auth/refreshToken", refreshToken);
router.get("/api/auth/user", authenticate, userAuth);
router.get("/api/auth/todos", authenticate, todos);
router.delete("/api/auth/logout", userLogout);
router.get("/api/AlluserData", getAlldatosUsuarios);
router.get("/api/userData/:id", getdatosUsuarios);
router.post("/api/createUserData",  upload.single("image"), createdatosUsuarios);
router.put("/api/updateUserData/:id", updatedatosUsuarios);
router.post("/api/disableUserData/:id", disabledatosUsuarios);
router.get("/api/auth/lastestusers", getLastestUsers);
module.exports = router;
