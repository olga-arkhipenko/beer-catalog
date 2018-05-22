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
        console.log(`json${jsonLoginData}`);
        return ajaxHelper.post(url, jsonLoginData);
    }
};

