const { jsonResponse } = require("../../lib/login/jsonResponse");
const router = require("express").Router();
router.post("/", (req, res) => {
  const { nombre, apellido, email, password } = req.body;
  if (!!!nombre || !!!apellido || !!!email || !!!password){
    return res.status(400).json(jsonResponse(400,
      {
        error: "Faltan datos"
      })
    );
  }
    res.status(200).json(jsonResponse(200,{message: "Usuario creado"}));
});

module.exports = router;
