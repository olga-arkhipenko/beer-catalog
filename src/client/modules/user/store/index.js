import mutations from './mutations';
import actions from './actions';

export default {
    namespaced: true,
    state: {
        userData: {
            name: '',
            email: '',
            birthdate: null,
            password: ''
        }
    },
    mutations,
    actions
};
