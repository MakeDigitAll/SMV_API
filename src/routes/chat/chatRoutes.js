const express = require("express");
const router = express.Router();
const authenticate = require("../../controllers/auth/authenticated");
const multer = require("multer"); // Importar multer
const upload = multer(); // Crear una instancia de multer
const {
  createChat,
  userChats,
  findChat,
  addMessage,
  getMessages,
} = require("../../controllers/chat/chatController");
createChat, userChats, findChat;
router.post("/api/chat/", createChat);
router.get("/api/chat/:userId", userChats);
router.get("/api/chat/find/:firstUserId/:secondUserId", findChat);
router.post("/api/chat/sendMessage", addMessage);
router.get("/api/chat/getMessages/:idChat", getMessages);
module.exports = router;
