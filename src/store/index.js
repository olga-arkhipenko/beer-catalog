import Vue from 'vue';
import Vuex from 'vuex';
import catalog from './modules/catalog/index';
import favorites from './modules/favorites/index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        catalog,
        favorites
    }
});