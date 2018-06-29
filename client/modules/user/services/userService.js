import ajaxHelper from 'common/helpers/ajaxHelper';
import urls from 'common/api/constants/urls';
import userMapper from 'common/api/mappers/userMapper';
import notificationHelper from 'common/helpers/notification/notificationHelper';
import errors from 'common/helpers/notification/errors';
import warnings from 'common/helpers/notification/warnings';
// import success from 'common/helpers/notification/success';

export default {
    register(registrationData) {
        const promise = ajaxHelper.postImage(urls.imageUpload, registrationData.profilePicture)
            .then(profilePicture =>
                ajaxHelper.postJson(urls.registration, { ...registrationData, profilePicture }))
            .then(userData =>
                // notificationHelper.showNotification('success', success.registration);
                userMapper.mapToUser(userData));
            // .catch(() => console.log('hihih'));

        // promise.catch(() => notificationHelper.showNotification('error', errors.registration));

        return promise;
    },
    login(loginData) {
        const promise =
        ajaxHelper.postJson(urls.login, loginData)
            .then((userData) => {
                const mappedUser = userMapper.mapToUserDetails(userData);
                return mappedUser;
            })
            .catch();

        promise.catch(() => notificationHelper.showNotification('error', errors.login));

        return promise;
    },
    signout() {
        const promise = ajaxHelper.postJson(urls.signout);
        promise.catch(() => notificationHelper.showNotification('warning', warnings.signout));

        return promise;
    },
    getCurrentUser() {
        const promise = ajaxHelper.get(urls.user);
        promise.then(userData => userMapper.mapToUserDetails(userData)).catch();

        promise.catch();

        return promise;
    }
};

