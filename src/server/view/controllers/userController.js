const userService = require('../../services/userService');

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
                console.log(`user before then ${user}`);
                if (user) {
                    res.sendStatus(200);
                    res.end('yes');
                }
            })
            .catch((error) => {
                console.error(`Registration error. ${error}`);
                res.sendStatus(500);
            });
        // User.create(
        //     {
        //         name: req.body.name,
        //         email: req.body.email,
        //         password: hashedPassword
        //     },
        //     (err, user) => {
        //         if (err) return res.status(500)
        // .send('There was a problem registering the user.');
        //         // create a token
        //         const token = jwt.sign({ id: user._id }, config.secret, {
        //             expiresIn: 86400 // expires in 24 hours
        //         });
        //         res.status(200).send({ auth: true, token });
        //     }
        // );
    }
};

