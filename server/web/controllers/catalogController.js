const QUERY_PARAMS_MAP = require('../../integration/punkApiManagement/queryParamsMap');
const URL = require('../../integration/punkApiManagement/url');
const beerMapper = require('../../integration/punkApiManagement/mappers/beerMapper');
const urlCreator = require('../../utils/urlCreator');
const paramsMapper = require('../../utils/paramsMapper');
const requestHelper = require('../../helpers/requestHelper');

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
