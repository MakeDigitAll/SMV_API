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
module.exports = router;
