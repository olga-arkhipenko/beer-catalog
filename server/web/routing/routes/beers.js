const router = require('express').Router();
const beerController = require('../../controllers/beerController');


router.get('/:id', beerController.getBeer);
router.get('/', beerController.getBeers);

module.exports = router;
