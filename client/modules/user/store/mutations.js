export default {
    setUserData(state, userData) {
        state.userData.name = userData.name;
        state.userData.email = userData.email;
        state.userData.birthdate = userData.birthdate;
        state.userData.token = userData.token;
    },
    resetUserData(state) {
        state.userData.name = '';
        state.userData.email = '';
        state.userData.birthdate = null;
        state.userData.token = '';
    },
    addFavoriteBeer(/* state, beerId */) {
        // console.log(beerId);
    },
    removeFavoriteBeer(/* state,  beerId */) {
        // console.log(beerId);
    }
};
