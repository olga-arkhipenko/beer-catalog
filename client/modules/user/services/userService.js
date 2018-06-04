import ajaxHelper from 'common/helpers/ajaxHelper';

export default {
    register(registrationData) {
        const registrationUrl = '/api/registration';
        const imageUploadUrl = '/api/uploadImage';
        return ajaxHelper
            .postImage(imageUploadUrl, registrationData.profilePicture)
            .then(profilePicture =>
                ajaxHelper
                    .postJson(registrationUrl, { ...registrationData, profilePicture }))
            .catch(err => console.error(err));
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

