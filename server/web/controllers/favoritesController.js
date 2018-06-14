const jwtHelper = require('../../helpers/jwtHelper');
const favoritesService = require('../../business/services/favoritesService');
const cookieParams = require('../configs/cookieParams');

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
                            res.status(200).send({ beerId: favoriteBeerId });
                        }));
            promise.catch(err => res.status(500).send(err));
        } else {
            res.status(401).send();
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
                            res.status(200).send({ beerId: unfavoriteBeerId });
                        });
                });
            promise.catch(err => res.status(401).send(err));
        } else {
            res.status(401).send();
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
                            res.status(200).send(favoritesData);
                        });
                });
            promise.catch(err => res.status(401).send(err));
        } else {
            res.status(401).send();
        }
    }
};
