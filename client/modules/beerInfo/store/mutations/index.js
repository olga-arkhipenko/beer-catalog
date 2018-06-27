export default {
    setBeer(state, beer) {
        state.beer = beer;
    },
    resetBeer(state) {
        state.beer = {};
    },
    makeBeerFavorite(state) {
        state.beer.isFavorite = true;
    },
    unmakeBeerFavorite(state) {
        state.beer.isFavorite = false;
    }
};
