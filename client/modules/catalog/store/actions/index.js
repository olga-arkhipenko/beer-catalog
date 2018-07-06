import beerService from 'catalogModule/services/beerService';
import mutationTypes from 'catalogModule/store/mutations/constants';
import actionTypes from './constants';

export default {
    [actionTypes.LOAD_BEERS]({ commit }, beerParams) {
        return beerService
            .fetchBeers(beerParams)
            .then((beers) => {
                commit(mutationTypes.PUSH_BEERS, beers);
            });
    },
    [actionTypes.RESET_BEERS]({ commit }) {
        commit(mutationTypes.RESET_BEERS);
    },
    [actionTypes.ADD_FAVORITE_BEER]({ commit }, beerId) {
        return beerService
            .addFavoriteBeer(beerId)
            .then(favoriteBeerId => commit(mutationTypes.MAKE_BEER_FAVORITE, favoriteBeerId));
    },
    [actionTypes.REMOVE_FAVORITE_BEER]({ commit }, beerId) {
        return beerService
            .removeFavoriteBeer(beerId)
            .then(unfavoriteBeerId => commit(mutationTypes.UNMAKE_BEER_FAVORITE, unfavoriteBeerId));
    }
};

