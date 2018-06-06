export default {
    setUserData(state, userData) {
        state.name = userData.name;
        state.profilePictureUrl = userData.profilePictureUrl;
        state.token = userData.token;
    },
    resetUserData(state) {
        state.name = '';
        state.profilePictureUrl = null;
        state.userData.token = '';
    },
    addFavoriteBeer(/* state, beerId */) {
        // console.log(beerId);
    },
    removeFavoriteBeer(/* state,  beerId */) {
        // console.log(beerId);
    }
};
