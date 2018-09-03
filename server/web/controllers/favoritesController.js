const jwtHelper = require('../../helpers/jwtHelper');
const favoritesService = require('../../business/services/favoritesService');
const cookieParams = require('../configs/cookieParams');
const responseHandler = require('../handler/responseHandler');

module.exports = {
    async addFavorite(request, response) {
        const token = request.cookies[cookieParams.name];
        const beerId = request.body.beerId;
        let decodedToken = null;
        try {
            decodedToken = await jwtHelper.verifyToken(token);
        } catch (err) {
            responseHandler.sendResponse(response, 401, err);
            return;
        }
        try {
            const favoriteBeerId = await favoritesService.addFavorite(beerId, decodedToken.id);
            responseHandler.sendResponse(response, 200, { beerId: favoriteBeerId });
        } catch (err) {
            responseHandler.sendResponse(response, 500, err);
        }
    },
    async removeFavorite(request, response) {
        const token = request.cookies[cookieParams.name];
        const beerId = request.body.beerId;
        let decodedToken = null;
        try {
            decodedToken = await jwtHelper.verifyToken(token);
        } catch (err) {
            responseHandler.sendResponse(response, 401, err);
            return;
        }
        try {
            const unfavoriteBeerId = favoritesService.removeFavorite(beerId, decodedToken.id);
            responseHandler.sendResponse(response, 200, { beerId: unfavoriteBeerId });
        } catch (err) {
            responseHandler.sendResponse(response, 500, err);
        }
    },
    async getFavorites(request, response) {
        const token = request.cookies[cookieParams.name];
        const query = request.query;
        let decodedToken = null;
        try {
            decodedToken = await jwtHelper.verifyToken(token);
        } catch (err) {
            responseHandler.sendResponse(response, 401, err);
            return;
        }
        try {
            const favoritesData = await favoritesService.getFavorites(decodedToken.id, query);
            responseHandler.sendResponse(response, 200, favoritesData);
        } catch (err) {
            responseHandler.sendResponse(response, 500, err);
        }
    }
};
