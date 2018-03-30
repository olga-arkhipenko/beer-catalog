import Vue from 'vue';
import Vuex from 'vuex';
import catalog from 'catalogModule/store/index';
import favorites from 'favoritesModule/store/index';
// import favoritesManagement from 'favoritesManagement/store/index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        catalog,
        favorites,
        // favoritesManagement
    }
});