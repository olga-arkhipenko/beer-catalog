const User = require('../../business/models/User');
const UserDetails = require('../../business/models/UserDetails');
const imageMapper = require('./imageMapper');

const mapUser = function (databaseEntity, TargetType) {
    const mappedUser = new TargetType();
    mappedUser.id = databaseEntity.dataValues.id;
    mappedUser.email = databaseEntity.dataValues.email;
    mappedUser.birthdate = databaseEntity.dataValues.birthdate;
    mappedUser.name = databaseEntity.dataValues.name;

    return mappedUser;
};

module.exports = {
    mapToUser(databaseEntity) {
        return mapUser(databaseEntity, User);
    },
    mapToUserDetails(databaseEntity) {
        const mappedUserDetails = mapUser(databaseEntity, UserDetails);
        mappedUserDetails.profilePicture =
        imageMapper.mapToImage(databaseEntity.dataValues.profilePicture);

        return mappedUserDetails;
    }
};

