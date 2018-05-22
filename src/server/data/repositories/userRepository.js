const database = require('../index');

module.exports = {
    createUser(user) {
        return database.user
            .create({
                name: user.name,
                email: user.email,
                birthdate: user.birthdate,
                password: user.password,
                salt: user.salt
            });
    },
    findUser(email) {
        console.log(`hello from ligin rep ${email}`);
        return database.user
            .findOne({
                where: {
                    email
                }
            });
    }
};

