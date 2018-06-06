import Vue from 'vue';
import Vuex from 'vuex';
import catalog from 'catalogModule/store/index';
import favorites from 'favoritesModule/store/index';
import beerInfo from 'beerInfoModule/store/index';
import userData from 'user/store/index';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        catalog,
        favorites,
        beerInfo,
        userData
    }
});
