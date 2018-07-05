import mutations from './mutations/index';
import actions from './actions/index';

export default {
    // namespaced: true,
    state: {
        name: '',
        profilePictureUrl: null
    },
    mutations,
    actions
};
