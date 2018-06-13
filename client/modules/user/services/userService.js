import ajaxHelper from 'common/helpers/ajaxHelper';
import urls from 'common/api/constants/urls';
import userMapper from 'common/api/mappers/userMapper';
import notificationHelper from 'common/helpers/notification/notificationHelper';
import errors from 'common/helpers/notification/errors';
import warnings from 'common/helpers/notification/warnings';

export default {
    register(registrationData) {
        const promise = ajaxHelper.postImage(urls.imageUpload, registrationData.profilePicture);
        promise.then(profilePicture =>
            ajaxHelper.postJson(urls.registration, { ...registrationData, profilePicture }))
            .then(userData => userMapper.mapToUser(userData));
        promise.catch(() => notificationHelper.showError(errors.registration));

        return promise;
    },
    login(loginData) {
        const promise = ajaxHelper.postJson(urls.login, loginData);
        promise.then((userData) => {
            const mappedUser = userMapper.mapToUserDetails(userData);
            return mappedUser;
        });
        promise.catch(() => notificationHelper.showError(errors.login));

        return promise;
    },
    getCurrentUser() {
        const promise = ajaxHelper.get(urls.user);
        promise.then(userData => userMapper.mapToUserDetails(userData));
        promise.catch(() => notificationHelper.showWarning(warnings.authorization));

        return promise;
    }
};

