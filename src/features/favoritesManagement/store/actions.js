import localStorageHelper from 'common/helpers/localStorageHelper';

export default {
    loadFavoriteBeerIds({ commit }) {
        const favoriteBeerIds = localStorageHelper.get('favoriteBeerIds');
        commit('setFavoriteBeerIds', favoriteBeerIds);
    },
    addFavoriteBeer({ commit, state, dispatch }, favoriteBeerId) {
        if (state.favoriteBeerIds.every(beerId => beerId !== favoriteBeerId)) {
            commit('addFavoriteBeerId', favoriteBeerId);
        }
        localStorageHelper.update('favoriteBeerIds', state.favoriteBeerIds);
        dispatch('loadFavoriteBeerIds');
    },
    removeFavoriteBeerId({ commit, state, dispatch }, favoriteBeerId) {
        const filteredIds = state.favoriteBeerIds.filter(beerId => beerId !== favoriteBeerId);
        commit('setFavoriteBeerIds', filteredIds);
        localStorageHelper.update('favoriteBeerIds', state.favoriteBeerIds);
        dispatch('loadFavoriteBeerIds');
    }
};

