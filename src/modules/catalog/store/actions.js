import catalogService from '../services/catalogService';

export default {
    loadBeers({ commit }, beerParams) {
        catalogService.fetchBeers(beerParams).then((beers) => {
            commit('pushBeers', beers);
        });
    },
    resetBeers({ commit }) {
        commit('resetBeers');
    }
};

