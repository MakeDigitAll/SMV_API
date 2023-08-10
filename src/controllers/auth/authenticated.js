const getTokenFromHeader = require("./getTokenFromHeader");
const jwt = require("jsonwebtoken");
function authenticate(req, res, next) {
  const token = getTokenFromHeader(req.headers);
  if (token) {
    const decoded = jwt.verify(token, "01f4fd03-9f0f-4ec9-9d65-005331fb627aa");
    if(decoded){
        req.user = { ...decoded};
        next();
    }else{
      res.status(401).json({
        message: "You are not authenticated",
      })
    }
  } else {
    res.status(401).json({
      message: "You are not authenticated",
    });
  }
}
module.exports = authenticate;