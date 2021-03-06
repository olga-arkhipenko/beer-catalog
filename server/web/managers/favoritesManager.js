const favoritesService = require('../../business/services/favoritesService');

module.exports = {
    async markBeersAsFavorite(beers, userId) {
        const favoritesIds = await favoritesService.getFavoritesIds(userId);
        return beers.map((beer) => {
            beer.isFavorite = !!favoritesIds.includes(beer.id);
            return beer;
        });
    }
};

