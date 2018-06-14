export default {
    pushBeers(state, beers) {
        state.beers.push(...beers);
    },
    resetBeers(state) {
        state.beers = [];
    },
    makeBeerFavorite(state, beerId) {
        state.beers = state.beers.map((beer) => {
            if (beer.id === beerId) {
                beer.isFavorite = true;
            }
            return beer;
        });
    }
};

