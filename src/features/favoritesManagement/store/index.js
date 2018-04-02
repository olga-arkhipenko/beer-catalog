import mutations from './mutations';
import actions from './actions';

export default {
    namespaced: true,
    state: {
        favoriteBeerIds: []
    },
    mutations,
    actions
};

