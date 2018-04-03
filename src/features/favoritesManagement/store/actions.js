import localStorageHelper from 'common/helpers/localStorageHelper';

export default {
    loadFavoriteBeerIds({ commit }) {
        const favoriteBeerIds = localStorageHelper.get('favoriteBeerIds');
        commit('setFavoriteBeerIds', favoriteBeerIds);
    },
    addFavoriteBeer({ commit, state }, favoriteBeerId) {
        if (state.favoriteBeerIds.every(beerId => beerId !== favoriteBeerId)) {
            commit('addFavoriteBeerId', favoriteBeerId);
        }
        localStorageHelper.update('favoriteBeerIds', state.favoriteBeerIds);
    },
    removeFavoriteBeer({ commit, state }, favoriteBeerId) {
        return new Promise((resolve) => {
            const filteredIds = state.favoriteBeerIds.filter(beerId => beerId !== favoriteBeerId);
            commit('setFavoriteBeerIds', filteredIds);
            localStorageHelper.update('favoriteBeerIds', state.favoriteBeerIds);
            resolve(state.favoriteBeerIds);
        });
    }
};

