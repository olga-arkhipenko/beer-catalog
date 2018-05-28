import ajaxHelper from 'common/helpers/ajaxHelper';

export default {
    fetchFavoriteBeerIds(userData) {
        const url = '/api/favorites';
        const jsonUserData = JSON.stringify(userData);
        console.log(`user${jsonUserData}`);
        return ajaxHelper.post(url, jsonUserData);
    }
    // updateFavoriteBeerIds(newFavoriteBeerIds) {
    //     localStorageHelper.update('favoriteBeerIds', newFavoriteBeerIds);
    // }
};

