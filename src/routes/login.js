const { jsonResponse } = require("../lib/jsonResponse");
const router = require("express").Router();
router.post("/", (req, res) => {
    const { email, password } = req.body;
    if (!!!email || !!!password) {
        return res.status(400).json(
            jsonResponse(400, {
                error: "Fields are required",
            })
        )
    }
    //Autenticar un usuario en la base de datos
    const accessToken = "access_token";
    const refreshToken = "refresh_token";
    const user = {
        id: '1',
        email: 'christian@makedigitall.com',
    }
    res.status(200).json(200, { user, accessToken, refreshToken })
});
module.exports = router;