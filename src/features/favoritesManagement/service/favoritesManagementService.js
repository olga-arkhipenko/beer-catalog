import localStorageHelper from 'common/helpers/localStorageHelper';

export default {
    fetchFavoriteBeerIds() {
        return localStorageHelper.get('favoriteBeerIds').then(favoriteBeerIds => JSON.parse(favoriteBeerIds));
    },
    updateFavoriteBeerIds(newFavoriteBeerIds) {
        localStorageHelper.update('favoriteBeerIds', JSON.stringify(newFavoriteBeerIds));
    }
};

