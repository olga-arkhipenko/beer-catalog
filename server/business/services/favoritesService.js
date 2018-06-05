const favoritesRepository = require('../../dataAccess/repositories/favoritesRepository');

module.exports = {
    getFavoritesIds(userId) {
        return favoritesRepository.findFavoriteIds(userId);
    },
    getFavorites(/* userId */) {
        // here
    }
};

