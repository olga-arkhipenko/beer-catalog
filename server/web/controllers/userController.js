const userService = require('../../business/services/userService');
const jwtHelper = require('../../helpers/jwtHelper');

module.exports = {
    register(req, res) {
        userService
            .register({
                name: req.body.name,
                email: req.body.email,
                birthdate: req.body.birthdate,
                password: req.body.password,
                profilePicture: req.body.profilePicture
            })
            .then(user => res.status(200).send(user))
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    uploadProfilePicture(req, res) {
        userService
            .uploadProfilePicture(req.body)
            .then((image) => {
                res.status(200).send(image);
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    },
    login(req, res) {
        userService
            .login({
                email: req.body.email,
                password: req.body.password
            })
            .then((user) => {
                const token = jwtHelper.createTokent({ id: user.id });
                res.status(200).send({ token, ...user });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    }
};
