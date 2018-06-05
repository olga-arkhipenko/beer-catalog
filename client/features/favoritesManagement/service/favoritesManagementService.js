import ajaxHelper from 'common/helpers/ajaxHelper';

export default {
    fetchFavoriteBeerIds(userData) {
        const url = '/api/favorites/ids';
        return ajaxHelper
            .postJson(url, userData)
            .catch(err => console.error(err));
    }
    // updateFavoriteBeerIds(newFavoriteBeerIds) {
    //     localStorageHelper.update('favoriteBeerIds', newFavoriteBeerIds);
    // }
};

