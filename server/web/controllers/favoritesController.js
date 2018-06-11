const jwtHelper = require('../../helpers/jwtHelper');
const favoritesService = require('../../business/services/favoritesService');

module.exports = {
    getFavoritesIds(req, res) {
        const token = req.body.token;
        if (token) {
            jwtHelper.verifyToken(token).then((decodedToken) => {
                favoritesService
                    .getFavoritesIds(decodedToken.id)
                    .then(favoritesIds => res.status(200).send(favoritesIds));
            });
        } else {
            res.status(200).send([]);
        }
    },
    getFavorites(req, res) {
        const token = req.body.token;
        if (token) {
            jwtHelper.verifyToken(token).then((decodedToken) => {
                favoritesService
                    .getFavorites(decodedToken.id)
                    .then(favorites => res.status(200).send(favorites));
            }); // catch 401
        } else {
            res.status(400).send();
        }
    }
};
