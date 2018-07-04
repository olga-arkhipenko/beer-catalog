import ajaxHelper from 'common/helpers/ajaxHelper';
import urls from 'common/api/constants/urls';
import userMapper from 'common/api/mappers/userMapper';

export default {
    register(registrationData) {
        return ajaxHelper.postImage(urls.imageUpload, registrationData.profilePicture)
            .then(profilePicture =>
                ajaxHelper.postJson(urls.registration, { ...registrationData, profilePicture }))
            .then(userData => userMapper.mapToUser(userData));
    },
    login(loginData) {
        return ajaxHelper.postJson(urls.login, loginData)
            .then((userData) => {
                const mappedUser = userMapper.mapToUserDetails(userData);
                return mappedUser;
            });
    },
    signOut() {
        return ajaxHelper.postJson(urls.signout);
    },
    getCurrentUser() {
        return ajaxHelper
            .get(urls.user)
            .then(userData => userMapper.mapToUserDetails(userData));
    }
};

