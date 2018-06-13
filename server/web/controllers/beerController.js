const URL = require('../../integration/punkApiManagement/url');
const QUERY_PARAMS_MAP = require('../../integration/punkApiManagement/queryParamsMap');
const beerMapper = require('../../integration/punkApiManagement/mappers/beerMapper');
const requestHelper = require('../../helpers/requestHelper');
const urlCreator = require('../../utils/urlCreator');
const paramsMapper = require('../../utils/paramsMapper');
const jwtHelper = require('../../helpers/jwtHelper');
const favoritesService = require('../../business/services/favoritesService');
const cookieParams = require('../configs/cookieParams');

module.exports = {
    getBeer(req, res) {
        const url = `${URL}/${req.params.id}`;
        requestHelper
            .get(url)
            .then((beer) => {
                const mappedBeer = beerMapper.mapToBeer(beer[0]);
                res.status(200).send(mappedBeer);
            })
            .catch(err => res.status(500).send(err));
    },
    getBeers(req, res) {
        const mappedParams = paramsMapper.mapParams(QUERY_PARAMS_MAP, req.query);
        const url = urlCreator.create(URL, mappedParams);
        requestHelper
            .get(url)
            .then((beers) => {
                const mappedBeers = beers.map(beerMapper.mapToBeer);
                const token = req.cookies[cookieParams.name];
                if (token) {
                    jwtHelper.verifyToken(token).then((decodedToken) => {
                        favoritesService
                            .getFavoritesIds(decodedToken.id)
                            .then((favoritesIds) => {
                                const mappedFavoriteBeers =
                                mappedBeers.map((beer) => {
                                    beer.isFavorite = !!favoritesIds.includes(beer.id);
                                    return beer;
                                });
                                res.status(200).send(mappedFavoriteBeers);
                            });
                    });
                } else {
                    res.status(200).send(mappedBeers);
                }
            })
            .catch(err => res.status(500).send(err));
    }
};
