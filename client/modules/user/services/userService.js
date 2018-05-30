import ajaxHelper from 'common/helpers/ajaxHelper';

export default {
    register(registrationData) {
        const registrationUrl = '/api/registration';
        const imageUploadUrl = '/api/uploadImage';
        const jsonRegistrationData = JSON.stringify({
            name: registrationData.name,
            email: registrationData.email,
            birthdate: registrationData.birthdate,
            password: registrationData.password
        });
        return registrationData.profilePicture ?
            ajaxHelper.postImage(imageUploadUrl, registrationData.profilePicture)
                .then(() => ajaxHelper.postJson(registrationUrl, jsonRegistrationData))
            : ajaxHelper.postJson(registrationUrl, jsonRegistrationData);
        // .catch(() => console.error('something wrong with image upload'));
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

