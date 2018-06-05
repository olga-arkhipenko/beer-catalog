const router = require('express').Router();
const favoritesController = require('../../controllers/favoritesController');


router.post('/ids', favoritesController.getFavoritesIds);
router.post('/', favoritesController.getFavorites);


module.exports = router;
