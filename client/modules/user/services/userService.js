import ajaxHelper from 'common/helpers/ajaxHelper';
import urls from 'common/api/constants/urls';
import notificationHelper from 'common/helpers/notification/notificationHelper';
import errors from 'common/helpers/notification/errors';

export default {
    register(registrationData) {
        const promise = ajaxHelper.postImage(urls.imageUpload, registrationData.profilePicture);
        promise.then(profilePicture =>
            ajaxHelper.postJson(urls.registration, { ...registrationData, profilePicture }))
            .catch(() => notificationHelper.showError(errors.registration));

        return promise;
    },
    login(loginData) {
        const promise = ajaxHelper.postJson(urls.login, loginData);
        promise.catch(() => notificationHelper.showError(errors.login));

        return promise;
    }
    // addFavoriteBeer(beerId) {
    //     console.log(`add ${beerId}`);
    // },
    // removeFavoriteBeer(beerId) {
    //     console.log(`remove ${beerId}`);
    // }
};

