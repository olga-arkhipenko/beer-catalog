import ajaxHelper from 'common/helpers/ajaxHelper';

export default {
    register(registrationData) {
        const url = '/api/registration';
        const jsonRegistrationData = JSON.stringify(registrationData);
        return ajaxHelper.post(url, jsonRegistrationData);
    },
    login(loginData) {
        const url = '/api/login';
        const jsonLoginData = JSON.stringify(loginData);
        return ajaxHelper.post(url, jsonLoginData);
    },
    addFavoriteBeer(beerId) {
        console.log(`add ${beerId}`);
    },
    removeFavoriteBeer(beerId) {
        console.log(`remove ${beerId}`);
    }
};

