const QUERY_PARAMS_MAP = require('../../features/punkApiManagement/queryParamsMap');
const URL = require('../../features/punkApiManagement/url');
const urlCreator = require('../../utils/urlCreator');
const paramsMapper = require('../../utils/paramsMapper');
const requestHelper = require('../../helpers/requestHelper');
const beerMapper = require('../../features/punkApiManagement/mappers/beerMapper');

module.exports = {
    getBeers(req, res) {
        const mappedParams = paramsMapper.mapParams(QUERY_PARAMS_MAP, req.query);
        const url = urlCreator.create(URL, mappedParams);
        requestHelper.get(url, (beers) => {
            const mappedBeers = beers.map(beerMapper.mapToBeer);
            res.json(mappedBeers);
        });
    }
};
