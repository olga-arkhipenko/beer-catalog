import ajaxHelper from 'common/helpers/ajaxHelper';
import urlCreator from 'common/utilities/urlCreator';
import urls from 'common/api/constants/urls';
import userMapper from 'common/api/mappers/userMapper';

export default {
    register(registrationData) {
        const imageUploadUrl = urlCreator.createUrl(urls.prefix, urls.imageUpload);
        const registrationUrl = urlCreator.createUrl(urls.prefix, urls.registration);
        return ajaxHelper.post(imageUploadUrl, registrationData.profilePicture)
            .then(profilePicture =>
                ajaxHelper.post(registrationUrl, { ...registrationData, profilePicture }))
            .then(userData => userMapper.mapToUser(userData));
    },
    login(loginData) {
        const loginUrl = urlCreator.createUrl(urls.prefix, urls.login);
        return ajaxHelper.post(loginUrl, loginData)
            .then((userData) => {
                const mappedUser = userMapper.mapToUserDetails(userData);
                return mappedUser;
            });
    },
    signOut() {
        const signOutUrl = urlCreator.createUrl(urls.prefix, urls.signOut);
        return ajaxHelper.post(signOutUrl);
    },
    getCurrentUser() {
        const userUrl = urlCreator.createUrl(urls.prefix, urls.user);
        return ajaxHelper
            .get(userUrl)
            .then(userData => userMapper.mapToUserDetails(userData));
    }
};

