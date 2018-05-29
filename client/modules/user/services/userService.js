import ajaxHelper from 'common/helpers/ajaxHelper';

export default {
    register(registrationData, profilePicture) {
        const registrationUrl = '/api/registration';
        const imageUploadUrl = '/api/upload';
        const jsonRegistrationData = JSON.stringify(registrationData);
        return ajaxHelper
            .postImage(imageUploadUrl, profilePicture)
            .then(() => ajaxHelper.postJson(registrationUrl, jsonRegistrationData))
            .catch(() => 'something wrong with image upload');
    },
    login(loginData) {
        const url = '/api/login';
        const jsonLoginData = JSON.stringify(loginData);
        return ajaxHelper.post(url, jsonLoginData);
    }
    // addFavoriteBeer(beerId) {
    //     console.log(`add ${beerId}`);
    // },
    // removeFavoriteBeer(beerId) {
    //     console.log(`remove ${beerId}`);
    // }
};

