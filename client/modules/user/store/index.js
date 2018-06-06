import mutations from './mutations';
import actions from './actions';

export default {
    namespaced: true,
    state: {
        userData: {
            name: '',
            profilePictureUrl: null,
            token: ''
        }
    },
    mutations,
    actions
};
