export const mutations = {
    pushBeers(state, beers) {
        state.beers.push(...beers);
    },
    resetBeers(state) {
        state.beers = [];
    },
    setLoading(state) {
        state.isLoading = true;
    },
    resetLoading(state) {
        state.isLoading = false;
    },
    setFavoriteBeerIds(state, favoriteBeerIds) {
        state.favoriteBeerIds = favoriteBeerIds;
    },
    addFavoriteBeerId(state, favoriteBeerId) {
        state.favoriteBeerIds.push(favoriteBeerId);
    }
}