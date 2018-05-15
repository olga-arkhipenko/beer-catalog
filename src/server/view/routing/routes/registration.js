const router = require('express').Router();
const registrationController = require('../../controllers/registrationController');

router.get('/', registrationController.reqisterUser);

module.exports = router;
