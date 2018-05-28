const router = require('express').Router();
const favoritesController = require('../../controllers/favoritesController');


router.get('/', favoritesController.getIds);

module.exports = router;
