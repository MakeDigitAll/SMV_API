const { Router } = require("express")
const router = Router();

const {getLog, getLogById} = require('../controllers/logController');

//---------------------------------------------------------------------------------------

router.get('/log/providers', getLog);

router.get('/log/providers/:id', getLogById);
 
//---------------------------------------------------------------------------------------

module.exports = router;