import beerDetailsService from 'beerInfoModule/services/beerDetailsService';

export default {
    loadBeer({ commit }, beerId) {
        beerDetailsService
            .fetchBeer(beerId)
            .then((beer) => {
                commit('setBeer', beer);
            });
    },
    resetBeer({ commit }) {
        commit('resetBeer');
    }
};
