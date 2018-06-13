const router = require('express').Router();
const favoritesController = require('../../controllers/favoritesController');


router.post('/:id', favoritesController.addFavorite);
router.delete('/:id', favoritesController.removeFavorite);
router.get('/', favoritesController.getFavorites);


module.exports = router;
