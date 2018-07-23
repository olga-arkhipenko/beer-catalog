import mutationTypes from './constants';

export default {
    [mutationTypes.SET_BEER](state, beer) {
        state.beer = beer;
    },
    [mutationTypes.RESET_BEER](state) {
        state.beer = {};
    },
    [mutationTypes.MAKE_BEER_FAVORITE](state) {
        state.beer.isFavorite = true;
    },
    [mutationTypes.UNMAKE_BEER_FAVORITE](state) {
        state.beer.isFavorite = false;
    }
};
