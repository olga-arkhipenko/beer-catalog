import favoritesManagementService from 'favoritesManagement/service/favoritesManagementService';

export default {
    loadFavoriteBeerIds({ commit }) {
        return favoritesManagementService
            .fetchFavoriteBeerIds()
            .then((favoriteBeerIds) => {
                commit('setFavoriteBeerIds', favoriteBeerIds);
                return favoriteBeerIds;
            });
    },
    addFavoriteBeer({ commit, state }, favoriteBeerId) {
        if (!state.favoriteBeerIds.includes(favoriteBeerId)) {
            commit('addFavoriteBeerId', favoriteBeerId);
        }
        favoritesManagementService.updateFavoriteBeerIds(state.favoriteBeerIds);
    },
    removeFavoriteBeer({ commit, state }, favoriteBeerId) {
        return new Promise((resolve) => {
            const filteredIds = state.favoriteBeerIds.filter(beerId => beerId !== favoriteBeerId);
            commit('setFavoriteBeerIds', filteredIds);
            favoritesManagementService.updateFavoriteBeerIds(state.favoriteBeerIds);
            resolve(state.favoriteBeerIds);
        });
    }
};

