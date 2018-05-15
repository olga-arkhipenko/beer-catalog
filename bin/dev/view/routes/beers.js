var express = require('express');
var catalogController = require('../controllers/catalogController');

var router = express.Router();

router.get('/', catalogController.getBeers);

module.exports = router;