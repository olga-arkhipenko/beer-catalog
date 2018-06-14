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
        const token = req.cookies.accessToken;
        const beerId = req.body.beerId;
        if (token) {
            jwtHelper.verifyToken(token)
                .then((decodedToken) => {
                    favoritesService
                        .removeFavorite(beerId, decodedToken.id)
                        .then((favorites) => {
                            res.status(200).send(favorites);
                        });
                })
                .catch(err => res.status(401).send(err));
        } else {
            res.status(401).send();
        }
    },
    getFavorites(req, res) {
        const token = req.cookies.accessToken;
        if (token) {
            jwtHelper.verifyToken(token)
                .then((decodedToken) => {
                    favoritesService
                        .getFavorites(decodedToken.id)
                        .then((favorites) => {
                            res.status(200).send(favorites);
                        });
                })
                .catch(err => res.status(401).send(err));
        } else {
            res.status(401).send();
        }
    }
};
