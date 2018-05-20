const database = require('../index');

module.exports = {
    createUser(user) {
        console.log('hello from rep');
        return database.user
            .create({
                name: user.name,
                email: user.email,
                birthdate: user.birthdate,
                password: user.password,
                salt: user.salt
            });
    }
};

