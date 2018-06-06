import mutations from './mutations';
import actions from './actions';

export default {
    namespaced: true,
    state: {
        name: '',
        profilePictureUrl: null,
        token: ''

    },
    mutations,
    actions
};
