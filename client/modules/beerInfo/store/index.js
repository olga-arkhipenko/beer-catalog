import mutations from './mutations/index';
import actions from './actions/index';

export default {
    namespaced: true,
    state: {
        beer: {}
    },
    mutations,
    actions
};
