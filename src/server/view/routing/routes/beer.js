const router = require('express').Router();
const beerController = require('../../controllers/beerController');

router.get('/:id', beerController.getBeer);

module.exports = router;
