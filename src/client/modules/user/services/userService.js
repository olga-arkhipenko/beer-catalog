import ajaxHelper from 'common/helpers/ajaxHelper';

export default {
    register(userData) {
        const url = '/api/registration';
        const jsonUserData = JSON.stringify(userData);
        console.log(jsonUserData);
        console.log(url);
        return ajaxHelper
            .post(url, jsonUserData)
            .then(res => console.log(`res ${res}`));
    }
};

