import localStorage from 'LocalStorage/localStorage';

export const actions = {
    loadFavoriteBeerIds({commit, state}) {
        const favoriteBeerIds = localStorage.fetchFavoriteBeerIds();
        commit('setFavoriteBeerIds', favoriteBeerIds);
    },
    addFavoriteBeer({commit, state}, favoriteBeerId) {
        if(state.favoriteBeerIds.every(beerId => beerId !== favoriteBeerId)) {
            commit('addFavoriteBeerId', favoriteBeerId);
        }
        localStorage.updateFavoriteBeerIds(state.favoriteBeerIds);
    },
    removeFavoriteBeer({commit, state}, favoriteBeerId) {
        const filteredIds = state.favoriteBeerIds.filter(beerId => beerId !== favoriteBeerId);
        commit('setFavoriteBeerIds', filteredIds);
        localStorage.updateFavoriteBeerIds(state.favoriteBeerIds);
    }
}