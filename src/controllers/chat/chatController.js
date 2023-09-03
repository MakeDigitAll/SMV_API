const pool = require("../../database");

const createChat = async (req, res, next) => {
  const { receptor, emisor } = req.body;
  try {
    const result = await pool.query(
      `Insert into "chat" (receptor, emisor) values ($1, $2) returning *`,
      [receptor, emisor]
    );
    res.json(result.rows[0]);
  } catch (error) {
    return res.status(404).json({
      message: "Hay problemas para envíar información",
    });
  }
};

const userChats = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await pool.query(
      `SELECT * from "chat" where receptor = $1 OR emisor = $1 `,
      [userId]
    );
    res.json(result.rows);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const findChat = async (req, res, next) => {
  try {
    const { firstUserId, secondUserId } = req.body;
    const result = await pool.query(
      `SELECT * from "chat" where (receptor = $1 AND emisor = $2) OR (receptor = $2 AND emisor = $1)`,
      [firstUserId, secondUserId]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
const addMessage = async (req, res, next) => {  
  const { chatId, senderId, text } = req.body.message;
  console.log(chatId, senderId, text)
  try {
    const result = await pool.query(
      `INSERT INTO "mensajes" ("remitenteId", mensaje, "idChat","createdAt") VALUES ($1, $2, $3, NOW()) returning *`,
      [senderId, text, chatId]
    );
    res.json(result.rows[0]);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
const getMessages = async (req, res, next) => {
  try {
    const { idChat } = req.params;
    const result = await pool.query(
      `SELECT * FROM "mensajes" where "idChat" = $1`,
      [idChat]
    );
    res.json(result.rows);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
module.exports = { createChat, userChats, findChat, getMessages, addMessage };
