const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const https = require("https");
const fs = require("fs");
const path = require("path");

const davidRoutes = require("./routes/routesDavid");
const microservCompras = require("./routes/routesCompras");
const microserVentas = require("./routes/routesVentas");
const user = require("./routes/login/login");

const keyPath = path.join(__dirname, "controllers", "Security", "key.pem");
const certPath = path.join(__dirname, "controllers", "Security", "cert.pem");

const options = {
  key: fs.readFileSync(keyPath),
  cert: fs.readFileSync(certPath),
};

const app = express();
const chat = require("./routes/chat/chatRoutes");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(davidRoutes);
app.use(microserVentas);
app.use(microservCompras);
app.use(user);
app.use(chat);

app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});
// Rutas de tu aplicación Express
app.get("/", (req, res) => {
  res.send("Servidor Express ok");
});

// Configuración de tus rutas adicionales

const httpsServer = https.createServer(options, app);

const PORT = 4000;

httpsServer.listen(PORT, () => {
  console.log("Servidor Express ejecución en el puerto "+ PORT);
});
