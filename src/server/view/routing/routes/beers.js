const router = require('express').Router();
const catalogController = require('../../controllers/catalogController');
const beerPageController = require('../../controllers/beerPageController');

router.get('/', catalogController.getBeers);
router.get('/:id', beerPageController.getBeer);

module.exports = router;
