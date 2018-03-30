import catalogService from '../services/catalogService';

export const actions = {
    loadBeers({commit, state}, beerParams) {
        commit('setLoading');
        catalogService.fetchBeers(beerParams).then(beers => {
            commit('pushBeers', beers);
            commit('resetLoading');
        });
    },
    resetStore({commit, state}) {
        commit('resetBeers');
    }
}