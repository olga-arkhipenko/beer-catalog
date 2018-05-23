import mutations from './mutations';
import actions from './actions';

export default {
    namespaced: true,
    state: {
        registrationData: {
            name: '',
            email: '',
            birthdate: null,
            password: ''
        },
        loginData: {
            email: '',
            password: ''
        },
        userData: {
            name: '',
            email: '',
            birthdate: null,
            token: '' // shouldn't be here
        }
    },
    mutations,
    actions
};
