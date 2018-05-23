// const favoritesService = require('../../logic/services/favoritesService');
const jwtHelper = require('../../helpers/jwtHelper');

module.exports = {
    getIds(req, res) {
        const token = req.body.token;
        if (token) {
            jwtHelper.verifyToken(token).then((/* decodedToken */) => {
                // const userId = decodedToken.id;
            });
            // favoritesService
            //     .getfavoritesIds(userId)
            //     .then((ids) => {
            //         if (ids) {
            //             res.status(200).send(ids);
            //         }
            //     })
            //     .catch((error) => {
            //         res.status(500).send(error);
            //     });
        } else {
            res.send(400);
        }
    }
};
