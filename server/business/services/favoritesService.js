const favoritesRepository = require('../../dataAccess/repositories/favoritesRepository');
// const QUERY_PARAMS_MAP = require('../../integration/punkApiManagement/queryParamsMap');
// const URL = require('../../integration/punkApiManagement/url');
// const beerMapper = require('../../integration/punkApiManagement/mappers/beerMapper');
// const urlCreator = require('../../utils/urlCreator');
// const paramsMapper = require('../../utils/paramsMapper');
// const requestHelper = require('../../helpers/requestHelper');

module.exports = {
    addFavorite(beerId, userId) {
        return favoritesRepository
            .addFavorite(beerId, userId);
    },
    removeFavorite(beerId, userId) {
        return favoritesRepository
            .removeFavorite(beerId, userId);
    },
    getFavorites(userId) {
        return favoritesRepository
            .findFavoriteIds(userId);
        // .then((favoritesIds) => {
        //     const mappedParams = paramsMapper.mapParams(QUERY_PARAMS_MAP, favoritesIds);
        //     const url = urlCreator.create(URL, mappedParams);
        //     console.log(url);
        //     requestHelper
        //         .get(url)
        //         .then(beers => beers.map(beerMapper.mapToBeer));
        // });
    },
    getFavoritesIds(userId) {
        return favoritesRepository
            .findFavoriteIds(userId);
    }
};

