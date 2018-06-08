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
            .catch(err => res.status(500).send(err));
    },
    uploadProfilePicture(req, res) {
        userService
            .uploadProfilePicture(req.body)
            .then(image => res.status(200).send(image))
            .catch(err => res.status(500).send(err));
    },
    login(req, res) {
        userService
            .login({
                email: req.body.email,
                password: req.body.password
            })
            .then((user) => {
                const token = jwtHelper.createToken({ id: user.id });
                res.status(200).send({ token, ...user });
            })
            .catch(err => res.status(500).send(err));
    },
    getUser(req, res) {
        const token = req.cookies.accessToken;
        if (token) {
            jwtHelper.verifyToken(token)
                .then((decodedToken) => {
                    userService
                        .getUser(decodedToken.id)
                        .then(user => res.status(200).send(user));
                })
                .catch(err => res.status(401).send(err));
        } else {
            res.status(401).send();
        }
    }
};
