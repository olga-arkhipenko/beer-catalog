const userService = require('../../business/services/userService');
const jwt = require('jsonwebtoken');

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
            .then((user) => {
                if (user) {
                    res.status(200).send(user);
                }
            })
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
                const token = jwt.sign({ id: user.id }, 'secret', {
                    expiresIn: 86400
                });
                res.status(200).send({ token, ...user });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    }
};
