const favoritesRepository = require('../../data/repositories/favoritesRepository');

module.exports = {
    getfavoritesIds(userId) {
        return favoritesRepository
            .findFavoriteIds(userId)
            .then((ids) => {
                if (ids) {
                    console.log(`ids${ids}`);
                    return ids;
                }
                throw new Error('Unable to create user');
            });
    }
};

