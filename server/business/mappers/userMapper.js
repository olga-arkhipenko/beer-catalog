const User = require('../models/User');
const UserDetails = require('../models/UserDetails');
const imageMapper = require('./imageMapper');

const mapUser = function (dataEntity, TargetType) {
    const mappedUser = new TargetType();
    mappedUser.id = dataEntity.id;
    mappedUser.email = dataEntity.email;
    mappedUser.birthdate = dataEntity.birthdate;
    mappedUser.name = dataEntity.name;

    return mappedUser;
};

module.exports = {
    mapToUser(dataEntity) {
        return mapUser(dataEntity, User);
    },
    mapToUserDetails(dataEntity) {
        const mappedUserDetails = mapUser(dataEntity, UserDetails);
        mappedUserDetails.profilePicture =
            imageMapper.mapToImage(dataEntity.profilePicture);

        return mappedUserDetails;
    }
};

