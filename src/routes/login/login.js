const express = require("express");
const router = express.Router();
const authenticate = require("../../controllers/auth/authenticated");
const {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  disableUser,
  autenticarUser,
  refreshToken,
  todos,
  userAuth,
  userLogout,
} = require("../../controllers/login/userController");
getAllUsers, getUser, createUser, updateUser, disableUser, todos;

router.get("/api/allusers", getAllUsers);
router.get("/api/user/:id", getUser);
router.post("/api/createuser", createUser);
router.put("/api/updateuser/:id", updateUser);
router.post("/api/disableuser/:id", disableUser);
router.post("/api/login", autenticarUser);
router.post("/api/auth/refreshToken", refreshToken);
router.get("/api/auth/user", authenticate, userAuth);
router.get("/api/auth/todos", authenticate, todos);
router.delete("/api/auth/logout",userLogout);
module.exports = router;
