const router = require('express').Router();
const catalogController = require('../../controllers/catalogController');
const beerController = require('../../controllers/beerController');

router.get('/', catalogController.getBeers);
router.get('/:id', beerController.getBeer);

module.exports = router;
