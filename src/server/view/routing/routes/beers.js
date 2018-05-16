const router = require('express').Router();
const catalogController = require('../../controllers/catalogController');
const beerController = require('../../controllers/beerController');


router.get('/:id', beerController.getBeer);
router.get('/', catalogController.getBeers);

module.exports = router;
