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
    }
}