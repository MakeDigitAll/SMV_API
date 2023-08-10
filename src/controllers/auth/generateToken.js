const jwt = require("jsonwebtoken");
function generarRefreshToken(email) {
 const payload = {
    id: email.id,
    nombre: email.nombre,
    apellido: email.apellido,
    email: email.email,
 };
 const claveSecreta = process.env.REFRESH_TOKEN_SECRET
 const opciones = { algorithm: "HS256", expiresIn: "30d" }; 
 const token = jwt.sign(payload, claveSecreta, opciones);
 const prueba = jwt.verify(token, claveSecreta);
 return token;
}

module.exports = { generarRefreshToken };
