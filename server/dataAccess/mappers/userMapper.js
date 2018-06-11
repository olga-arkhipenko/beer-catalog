const User = require('../models/User');
const UserDetails = require('../models/UserDetails');
const imageMapper = require('./imageMapper');

const mapUser = function (databaseModel, TargetType) {
    const mappedUser = new TargetType();
    mappedUser.id = databaseModel.dataValues.id;
    mappedUser.email = databaseModel.dataValues.email;
    mappedUser.birthdate = databaseModel.dataValues.birthdate;
    mappedUser.name = databaseModel.dataValues.name;

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

