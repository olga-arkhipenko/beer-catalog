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
        return ajaxHelper
            .post(url, jsonLoginData)
            .then((userData) => {
                const accessToken = userData.token;
                window.localStorage.setItem('accessToken', accessToken);
                return {
                    name: userData.name,
                    email: userData.email,
                    birthdate: userData.birthdate
                };
            });
    }
};

