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
        userData: {
            name: '',
            email: '',
            birthdate: null
        }
    },
    mutations,
    actions
};
