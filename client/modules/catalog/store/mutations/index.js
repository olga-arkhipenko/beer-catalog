import mutationTypes from './constants';

export default {
    [mutationTypes.PUSH_BEERS](state, beers) {
        state.beers.push(...beers);
    },
    [mutationTypes.RESET_BEERS](state) {
        state.beers = [];
    },
    [mutationTypes.MAKE_BEER_FAVORITE](state, beerId) {
        state.beers = state.beers.map((beer) => {
            if (beer.id === beerId) {
                beer.isFavorite = true;
            }
            return beer;
        });
    },
    [mutationTypes.UNMAKE_BEER_FAVORITE](state, beerId) {
        state.beers = state.beers.map((beer) => {
            if (beer.id === beerId) {
                beer.isFavorite = false;
            }
            return beer;
        });
    }
};

