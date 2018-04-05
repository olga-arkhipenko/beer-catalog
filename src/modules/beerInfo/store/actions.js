import beerInfoService from 'beerInfoModule/services/beerInfoService';

export default {
    loadBeer({ commit }, beerId) {
        beerInfoService.fetchBeer(beerId).then((beer) => {
            commit('setBeer', beer);
        });
    },
    resetBeer({ commit }) {
        commit('resetBeer');
    }
};
