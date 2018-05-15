const express = require('express');
const catalogController = require('../controllers/catalogController');
const beerPageController = require('../controllers/beerPageController');

const router = express.Router();

router.get('/', catalogController.getBeers);
router.get('/:id', beerPageController.getBeer);

module.exports = router;
