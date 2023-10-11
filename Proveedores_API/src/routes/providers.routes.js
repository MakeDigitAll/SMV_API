const { Router } = require("express")
const router =  Router();
const multer = require('multer'); 
const upload = multer();

const { getAllProviders, getProviderById, createProvider, updateProvider, deleteProvider,getImage, updateImage } = require('../controllers/providersController');

router.get('/pv', getAllProviders);

router.get('/pv/:id', getProviderById);

router.post('/pv', createProvider); 
 
router.put('/pv/:id', updateProvider);

router.delete('/pv/:id', deleteProvider);

router.get('/image/:id', getImage);

router.put('/image/:id',upload.single('image'), updateImage);

module.exports = router;