const { Router } = require("express")
const router =  Router();

const { getAllProviders, getProviderById, createProvider, updateProvider, deleteProvider } = require('../controllers/providersController');

router.get('/pv', getAllProviders);

router.get('/pv/:id', getProviderById);

router.post('/pv', createProvider); 
 
router.put('/pv/:id', updateProvider);

router.delete('/pv/:id', deleteProvider);

module.exports = router;