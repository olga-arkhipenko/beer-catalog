const jwtHelper = require('../../helpers/jwtHelper');
const favoritesService = require('../../business/services/favoritesService');
const cookieParams = require('../configs/cookieParams');
const responseHandler = require('../handler/responseHandler');

module.exports = {
    addFavorite(req, res) {
        const token = req.cookies[cookieParams.name];
        const beerId = req.body.beerId;
        if (token) {
            const promise = jwtHelper.verifyToken(token)
                .then(decodedToken =>
                    favoritesService
                        .addFavorite(beerId, decodedToken.id)
                        .then((favoriteBeerId) => {
                            responseHandler.sendResponse(res, 200, { beerId: favoriteBeerId });
                        }));
            promise.catch(err => responseHandler.sendResponse(res, 500, err));
        } else {
            responseHandler.sendResponse(res, 401);
        }
    },
    removeFavorite(req, res) {
        const token = req.cookies[cookieParams.name];
        const beerId = req.body.beerId;
        if (token) {
            const promise = jwtHelper.verifyToken(token)
                .then((decodedToken) => {
                    favoritesService
                        .removeFavorite(beerId, decodedToken.id)
                        .then((unfavoriteBeerId) => {
                            responseHandler.sendResponse(res, 200, { beerId: unfavoriteBeerId });
                        });
                });
            promise.catch(err => responseHandler.sendResponse(res, 401, err));
        } else {
            responseHandler.sendResponse(res, 401);
        }
    },
    getFavorites(req, res) {
        const token = req.cookies[cookieParams.name];
        const query = req.query;
        if (token) {
            const promise = jwtHelper.verifyToken(token)
                .then((decodedToken) => {
                    favoritesService
                        .getFavorites(decodedToken.id, query)
                        .then((favoritesData) => {
                            responseHandler.sendResponse(res, 200, favoritesData);
                        });
                });
            promise.catch(err => responseHandler.sendResponse(res, 401, err));
        } else {
            responseHandler.sendResponse(res, 401);
        }
    }
};
