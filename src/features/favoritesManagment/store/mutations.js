export const mutations = {
    setFavoriteBeerIds(state, favoriteBeerIds) {
        state.favoriteBeerIds = favoriteBeerIds;
    },
    addFavoriteBeerId(state, favoriteBeerId) {
        state.favoriteBeerIds.push(favoriteBeerId);
    }
}