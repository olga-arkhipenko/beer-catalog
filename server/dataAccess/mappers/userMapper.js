const User = require('../../business/models/User');

module.exports = {
    mapToUser(databaseEntity) {
        const user = new User();
        user.id = databaseEntity.dataValues.id;
        user.email = databaseEntity.dataValues.email;
        user.birthdate = databaseEntity.dataValues.birthdate;
        user.name = databaseEntity.dataValues.name;

        return user;
    }
};

