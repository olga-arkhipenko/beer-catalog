// const userService = require('../../services/registrationService');

module.exports = {
    register(req, res) {
        console.log(`req ${req.body}`);
        res.send('hello');
        // userService.register({
        //     email: req.body.email,
        //     password: req.body.password,
        //     name: req.body.name
        // })
        //     .then((user) => {
        //         req.session.userId = user.id;
        //         res.send(user);
        //     })
        //     .catch((error) => {
        //         console.error(`an error occur in register handler. ${error}`);
        //         res.sendStatus(500);
        //     });

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

