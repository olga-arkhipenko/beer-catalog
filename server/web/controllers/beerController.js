const URL = require('../../integration/punkApiManagement/url');
const QUERY_PARAMS_MAP = require('../../integration/punkApiManagement/queryParamsMap');
const beerMapper = require('../../integration/punkApiManagement/mappers/beerMapper');
const favoritesManager = require('../managers/favoritesManager');
const requestHelper = require('../../helpers/requestHelper');
const urlCreator = require('../../utils/urlCreator');
const paramsMapper = require('../../utils/paramsMapper');
const jwtHelper = require('../../helpers/jwtHelper');
const cookieParams = require('../configs/cookieParams');
const responseHandler = require('../handler/responseHandler');

module.exports = {
    async getBeer(request, response) {
        const beerUrl = urlCreator.createUrl(URL, request.params.id);
        try {
            const beer = await requestHelper
                .get(beerUrl)
                .then(data => beerMapper.mapToBeer(data[0]));
            responseHandler.sendResponse(response, 200, beer);
        } catch (err) {
            responseHandler.sendResponse(response, 500, err);
        }
    },
    async getBeers(request, response) {
        const mappedParams = paramsMapper.mapParams(QUERY_PARAMS_MAP, request.query);
        const token = request.cookies[cookieParams.name];
        const beersUrl = urlCreator.createUrl(URL, null, mappedParams);
        try {
            const beers = await requestHelper
                .get(beersUrl)
                .then(data => data.map(beerMapper.mapToBeer));
            if (token) {
                const decodedToken = await jwtHelper.verifyToken(token);
                const markedAsFavoriteBeers = await favoritesManager.markBeersAsFavorite(beers, decodedToken.id);
                responseHandler.sendResponse(response, 200, markedAsFavoriteBeers);
            } else {
                responseHandler.sendResponse(response, 200, beers);
            }
        } catch (err) {
            responseHandler.sendResponse(response, 500, err);
        }
    }
};
