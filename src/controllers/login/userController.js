const pool = require("../../database");
const bcrypt = require("bcryptjs");
const { jsonResponse } = require("../../lib/login/jsonResponse");
const jwt = require("jsonwebtoken");
const getUserInfo = require("../../lib/login/getUserInfo");
const { generarRefreshToken } = require("../auth/generateToken");
const getTokenFromHeader = require("../auth/getTokenFromHeader");
const e = require("express");
//Mostrar los usuarios
const getAllUsers = async (req, res, next) => {
  try {
    const allTasks = await pool.query(
      `SELECT * FROM  "usuarios" WHERE "isDeleted" = 'false'`
    );
    res.json(allTasks.rows);
  } catch (error) {
    console.log(error.message);
  }
};
//Autenticar un usuario
const autenticarUser = async (req, res) => {
  const { email, password } = req.body;
  if (!!!email || !!!password) {
    return res.status(400).json(
      jsonResponse(400, {
        error: "Faltan datos",
      })
    );
  } else {
    try {
      const result = await pool.query(
        `SELECT * FROM "usuarios" WHERE email = $1 `,
        [email]
      );
      if (result.rows.length === 0) {
        return res.status(500).json(
          jsonResponse(500, {
            error: "Correo no encontrado",
          })
        );
      }
      const user = result.rows[0];
      const realPassword = bcrypt.compareSync(password, user.password);
      if (realPassword !== true) {
        return res.status(500).json(
          jsonResponse(500, {
            error: "La contraseña es incorrecta",
          })
        );
      }
      if (realPassword === true) {
        const token = generarAccessToken(user);
        const refreshToken = createRefreshToken(user);
        const userInfo = {
          id: user.id,
          nombre: user.nombre,
          apellido: user.apellido,
          email: user.email,
        };
        return res.status(200).json(
          jsonResponse(200, {
            message: "Usuario autenticado",
            accessToken: token,
            refreshToken: refreshToken,
            userInfo: userInfo,
          })
        );
      }
    } catch (error) {
      return res.status(400).json(
        jsonResponse(400, {
          error: "Error al buscar el correo",
        })
      );
    }
  }
};
function generarAccessToken(email) {
  const payload = {
    id: email.id,
    nombre: email.nombre,
    apellido: email.apellido,
    email: email.email,
  };
  const claveSecreta = "01f4fd03-9f0f-4ec9-9d65-005331fb627aa";
  const opciones = { algorithm: "HS256", expiresIn: "1d" };
  let token = jwt.sign(payload, claveSecreta, opciones);
  return token;
}
function createRefreshToken(email) {
  const refreshToken = generarRefreshToken(email);
  try {
    const insertar = `Insert into "refreshTokens"("refreshToken") values($1)`;
    const valores = [refreshToken];
    pool.query(insertar, valores);
    return refreshToken;
  } catch (error) {
    console.log(error);
  }
}
//mostrar un usuarios
const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      `SELECT "nombre","apellido","id","perfilSeguridadId","vendedorId","email" FROM "usuarios" WHERE id = $1 AND "isDeleted" = 'false' `,
      [id]
    );

    if (result.rows.length === 0)
      return res.status(404).json({
        message: error.message,
      });

    res.json(result.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
};
//mostrar un usuarios
const getUserImage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await pool.query(`SELECT * FROM "usuarios" WHERE id = $1`, [
      id,
    ]);
    if (result.rows.length === 0)
      return res.status(404).json({
        message: error.message,
      });
    res.send(result.rows[0].imagen);
  } catch (error) {
    console.log(error.message);
  }
};
//crear un usuarios
async function verificarUsuarioExistente(email) {
  try {
    const consulta = "SELECT * FROM usuarios WHERE email = $1";
    const valores = [email];
    const resultado = await pool.query(consulta, valores);
    return resultado.rows.length > 0;
  } catch (error) {
    console.log(error);
  }
}
const createUser = async (req, res, next) => {
  const imagen = req.file.buffer
  const document = JSON.parse(req.body.document)
  
  const { nombre, apellido, email, password } = document;
  console.log("imagen", imagen, "document", document);
  var passwordhash = bcrypt.hashSync(password, 10);
  if (!!!nombre || !!!apellido || !!!email || !!!password || !!!imagen) {
    return res.status(400).json(
      jsonResponse(400, {
        error: "Faltan datos",
      })
    );
  } else {
    const usuarioExistente = await verificarUsuarioExistente(email);
    if (usuarioExistente) {
      return res
        .status(500)
        .json(jsonResponse(500, { error: "El correo ya existe" }));
    } else {
      try {
        await pool.query(
          `INSERT INTO public."usuarios" ("nombre","apellido","email","password","imagen", "isUpdated", "isDeleted", "creationDate", "updatedDate") VALUES ($1, $2, $3, $4, $5, 'false', 'false', NOW() , NOW() ) RETURNING *`,
          [nombre, apellido, email, passwordhash, imagen]
        );
        res.status(200).json(jsonResponse(200, { message: "Usuario creado" }));
      } catch (error) {
        next(error);
      }
    }
  }
};

//deshabilitar un usuario
const disableUser = async (req, res, next) => {
  const { id } = req.params;
  const { isDeleted } = req.body;

  const result = await pool.query(
    `UPDATE "usuarios" SET "isDeleted" = 'true' WHERE id = $1 RETURNING *`,
    [isDeleted, id]
  );

  if (result.rows.length === 0)
    return res.status(404).json({
      message: "El usuario no se pudo actualizar",
    });

  return res.json(result.rows[0]);
};

//actualizar un usuario
const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { nombre, apellido, email, password, updatedDate } = req.body;

  const result = await pool.query(
    'UPDATE "usuarios" SET "nombre" = $1, "apellido" = $2, "email" = $3, "password" = $4, "updatedDate" = CURRENT_DATE WHERE id = $3 RETURNING *',
    [nombre, apellido, email, password, updatedDate, id]
  );

  if (result.rows.length === 0)
    return res.status(404).json({
      message: "El usuario no se pudo actualizar",
    });

  return res.json(result.rows[0]);
};
//refreshToken
const refreshToken = async (req, res, next) => {
  const refreshTokenauth = req.headers.authorization.split(" ");
  if (refreshTokenauth) {
    try {
      const query = `SELECT * FROM "refreshTokens" WHERE "refreshToken" = $1`;
      const values = [refreshTokenauth[1]];
      const result = await pool.query(query, values);
      if (result.rows.length > 0) {
        const token = result.rows[0].refreshToken;
        const payload = verifyRefreshToken(token);
        if (payload) {
          const accessToken = generarAccessToken(payload);
          return res
            .status(200)
            .json(jsonResponse(200, { accessToken: accessToken }));
        }
      } else
        res
          .status(401)
          .json(jsonResponse(401, { error: "No se encontro el token" }));
    } catch (error) {
      console.error("Error al buscar el refresh token:", error);
      throw error;
    }
  }
};

function verifyAcessToken(token) {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
}
function verifyRefreshToken(token) {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
}

//userAuth
const userAuth = async (req, res, next) => {
  res.status(200).json(jsonResponse(200, req.user));
};

const todos = async (req, res, next) => {
  res.json([
    {
      id: 1,
      title: "Juan",
      completed: false,
    },
  ]);
};
//Logout
const userLogout = async (req, res, next) => {
  try {
    const refreshToken = getTokenFromHeader(req.headers);
    if (refreshToken) {
      try {
        const query = `DELETE FROM "refreshTokens" WHERE "refreshToken" = $1`;
        const values = [refreshToken];
        await pool.query(query, values);
        res.status(200).json(jsonResponse(200, { message: "Token deleted" }));
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .json(jsonResponse(500, { error: "Error al borrar el token" }));
      }
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(jsonResponse(500, { error: "Error al borrar el token" }));
  }
};

//////////////////////API para datosUsuarios

const getAlldatosUsuarios = async (req, res, next)=> {
  try{
  const allTasks = await pool.query(`SELECT * FROM public."datosUsuarios" WHERE "isDeleted" = '0'`);
  res.json(allTasks.rows)
  } catch (error) {
      console.log(error.message); 
  }
}
//mostrar un estatus
const getdatosUsuarios = async (req, res, next) =>{
  try {
      const { id } = req.params;
      const result = await pool.query(`SELECT * FROM "datosUsuarios" WHERE id = $1 AND "isDeleted" = '0' `, [id]);

      if (result.rows.length === 0 )
      return res.status(404).json({
          message: error.message
      });

      res.json(result.rows[0]);
  } catch (error) {
      console.log(error.message);
  }
};

//crear un estatus 
const createdatosUsuarios = async (req, res, next) =>{
  const {direccion, colonia, estado, ciudad, codigoPostal,telefonoContacto,telefonoCelular} = req.body

  try {
  const result = await pool.query(
      `INSERT INTO public."datosUsuarios"(
        direccion, colonia, estado, ciudad, "codigoPostal", "telefonoContacto", "telefonoCelular", status, "isDeleted", "isUpdated", "dateModification", "dateCreation") VALUES ($1, $2, $3, $4, $5, $6, $7, '0','0', '0', NOW() , NOW() ) RETURNING *`,
      [direccion, colonia, estado, ciudad, codigoPostal,telefonoContacto,telefonoCelular]
  );

  res.json(result.json);
  } catch (error) {
      next(error)
  }
};

//deshabilitar un estatus
const disabledatosUsuarios = async (req, res, next) =>{
  const { id } = req.params;

  const result = await pool.query(
      `UPDATE "datosUsuarios" SET "isDeleted" = '1' WHERE id = $1 RETURNING *`,
      [ id]
  );

  if (result.rows.length === 0)
  return res.status(404).json({
      message: "La tarea no se pudo actualizar"
  });

  return res.json(result.rows[0]);
};

//actualizar un estatus
const updatedatosUsuarios = async (req, res, next) =>{
  const { id } = req.params;
  const {direccion, colonia, estado, ciudad, codigoPostal,telefonoContacto,telefonoCelular} = req.body;

  const result = await pool.query(
      'UPDATE "datosUsuarios" SET "direccion" = $1, colonia = $2, estado = $3, ciudad = $4, codigoPostal = $5,  telefonoContacto = $6, telefonoCelular = $7,  "dateCreation" = CURRENT_DATE WHERE id = $8 RETURNING *',
      [direccion, colonia, estado, ciudad, codigoPostal,telefonoContacto,telefonoCelular, id]
  );

  if (result.rows.length === 0)
  return res.status(404).json({
      message: "La tarea no se pudo actualizar"
  });

  return res.json(result.rows[0]);
};
module.exports = {
  getAllUsers,
  getUser,
  createUser,
  disableUser,
  updateUser,
  autenticarUser,
  refreshToken,
  todos,
  userAuth,
  userLogout,
  getUserImage,
  getAlldatosUsuarios,
  getdatosUsuarios,
  createdatosUsuarios,
  disabledatosUsuarios,
  updatedatosUsuarios,
};
