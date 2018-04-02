import catalogService from '../services/catalogService';

export default {
    loadBeers({ commit }, beerParams) {
        catalogService.fetchBeers(beerParams).then((beers) => {
            console.log(JSON.stringify(beers));
            commit('pushBeers', beers);
        });
    },
    resetBeers({ commit }) {
        commit('resetBeers');
    }
};

