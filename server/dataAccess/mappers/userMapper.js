const User = require('../models/user');
const UserDetails = require('../models/userDetails');
const imageMapper = require('./imageMapper');

const mapUser = function (databaseModel, TargetType) {
    const mappedUser = new TargetType();
    mappedUser.id = databaseModel.dataValues.id;
    mappedUser.name = databaseModel.dataValues.name;
    mappedUser.email = databaseModel.dataValues.email;
    mappedUser.birthdate = databaseModel.dataValues.birthdate;
    mappedUser.password = databaseModel.dataValues.password;
    mappedUser.salt = databaseModel.dataValues.salt;

    return mappedUser;
};

module.exports = {
    mapToUser(databaseModel) {
        return mapUser(databaseModel, User);
    },
    mapToUserDetails(databaseModel) {
        const mappedUserDetails = mapUser(databaseModel, UserDetails);
        mappedUserDetails.profilePicture =
            imageMapper.mapToImage(databaseModel.dataValues.profilePicture);

        return mappedUserDetails;
    }
};

