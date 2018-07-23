import mutationTypes from './constants';

export default {
    [mutationTypes.SET_FAVORITE_BEERS](state, favoriteBeers) {
        state.favoriteBeers = favoriteBeers;
    },
    [mutationTypes.SET_AMOUNT_OF_PAGES](state, amount) {
        state.amountOfPages = amount;
    },
    [mutationTypes.RESET_BEERS](state) {
        state.favoriteBeers = [];
    }
};

