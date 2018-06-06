import beersService from '../services/beersService';

export default {
    loadBeers({ commit }, beerParams) {
        beersService.fetchBeers(beerParams)
            .then((beers) => {
                commit('pushBeers', beers);
            });
    },
    resetBeers({ commit }) {
        commit('resetBeers');
    }
};

