import catalogService from '../services/catalogService';

export default {
    loadBeers({ commit }, beerParams) {
        commit('setLoading');
        catalogService.fetchBeers(beerParams).then((beers) => {
            console.log(JSON.stringify(beers));
            commit('pushBeers', beers);
            commit('resetLoading');
        });
    },
    resetBeers({ commit }) {
        commit('resetBeers');
    }
};

