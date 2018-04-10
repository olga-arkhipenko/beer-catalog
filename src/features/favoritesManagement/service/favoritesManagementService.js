import localStorageHelper from 'common/helpers/localStorageHelper';

export default {
    fetchFavoriteBeerIds() {
        return localStorageHelper.get('favoriteBeerIds');
    },
    updateFavoriteBeerIds(newFavoriteBeerIds) {
        localStorageHelper.update('favoriteBeerIds', newFavoriteBeerIds);
    }
};

