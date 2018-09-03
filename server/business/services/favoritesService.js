const favoritesRepository = require('../../dataAccess/repositories/favoritesRepository');
const QUERY_PARAMS_MAP = require('../../integration/punkApiManagement/queryParamsMap');
const URL = require('../../integration/punkApiManagement/url');
const beerMapper = require('../../integration/punkApiManagement/mappers/beerMapper');
const urlCreator = require('../../utils/urlCreator');
const paramsMapper = require('../../utils/paramsMapper');
const requestHelper = require('../../helpers/requestHelper');

module.exports = {
    addFavorite(beerId, userId) {
        return favoritesRepository.addFavorite(beerId, userId);
    },
    removeFavorite(beerId, userId) {
        return favoritesRepository.removeFavorite(beerId, userId);
    },
    async getFavorites(userId, pageParams) {
        const favoritesIds = await favoritesRepository.findFavoriteIds(userId);
        const mappedParams = paramsMapper.mapParams(QUERY_PARAMS_MAP, { beerIds: favoritesIds, ...pageParams });
        const favoriteBeersUrl = urlCreator.createUrl(URL, null, mappedParams);
        const beers = await requestHelper.get(favoriteBeersUrl)
            .then(beersData => beersData.map(beerMapper.mapToBeer));
        const amountOfPages = Math.ceil(favoritesIds.length / pageParams.amount);
        return { amountOfPages, beers };
    },
    getFavoritesIds(userId) {
        return favoritesRepository.findFavoriteIds(userId);
    }
};

