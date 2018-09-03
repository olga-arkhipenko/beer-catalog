const router = require('express').Router();
const userController = require('../../controllers/userController');

router.post('/login', userController.login);
router.post('/registration', userController.register);
router.post('/uploadImage', userController.uploadProfilePicture);
router.post('/signout', userController.signOut);
router.get('/', userController.getUser);

module.exports = router;
