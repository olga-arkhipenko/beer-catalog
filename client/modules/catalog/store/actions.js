import beerService from 'common/services/beerService';

export default {
    loadBeers({ commit }, beerParams) {
        beerService.fetchBeers(beerParams)
            .then((beers) => {
                commit('pushBeers', beers);
            });
    },
    resetBeers({ commit }) {
        commit('resetBeers');
    }
};

