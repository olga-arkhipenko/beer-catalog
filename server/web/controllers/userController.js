const userService = require('../../logic/services/userService');
const jwt = require('jsonwebtoken');

module.exports = {
    register(req, res) {
        userService
            .register({
                name: req.body.name,
                email: req.body.email,
                birthdate: req.body.birthdate,
                password: req.body.password
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
    uploadImage(/* req */) {
        // console.log(`here ${req.file}`);
    },
    login(req, res) {
        userService
            .login({
                email: req.body.email,
                password: req.body.password
            })
            .then((user) => {
                if (user) {
                    const token = jwt.sign({ id: user.id }, 'secret', {
                        expiresIn: 86400
                    });
                    res.status(200).send({ token, ...user });
                }
            })
            .catch((error) => {
                res.status(400).send(error);
            });
    }
};

