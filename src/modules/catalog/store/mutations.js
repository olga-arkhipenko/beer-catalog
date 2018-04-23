export default {
    pushBeers(state, beers) {
        state.beers.push(...beers);
    },
    resetBeers(state) {
        state.beers = [];
    }
};

