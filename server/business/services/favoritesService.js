const favoritesRepository = require('../../dataAccess/repositories/favoritesRepository');

module.exports = {
    getfavoritesIds(userId) {
        return favoritesRepository
            .findFavoriteIds(userId)
            .then((ids) => {
                if (ids) {
                    return ids;
                }
                throw new Error('Unable to create user');
            });
    }
};

