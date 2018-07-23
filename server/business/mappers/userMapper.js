const User = require('../models/user');
const UserDetails = require('../models/userDetails');
const imageMapper = require('./imageMapper');

const mapUser = function (dataEntity, TargetType) {
    const mappedUser = new TargetType();
    mappedUser.id = dataEntity.id;
    mappedUser.name = dataEntity.name;
    mappedUser.email = dataEntity.email;
    mappedUser.birthdate = dataEntity.birthdate;

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

