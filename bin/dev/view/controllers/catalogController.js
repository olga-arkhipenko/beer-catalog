var QUERY_PARAMS_MAP = require('../../punkApiManagement/queryParamsMap');
var paramsMapper = require('../../utils/paramsMapper');
var urlCreator = require('../../utils/urlCreator');
var URL = require('../../punkApiManagement/url');
var requestHelper = require('../../helpers/requestHelper');
var beerMapper = require('../../punkApiManagement/mappers/beerMapper');

module.exports = {
    getBeers: function getBeers(req, res) {
        var mappedParams = paramsMapper.mapParams(QUERY_PARAMS_MAP, req.query);
        var url = urlCreator.create(URL, mappedParams);
        console.log('url' + url);
        requestHelper.get(url, function (beers) {
            var mappedBeers = beers.map(beerMapper.mapToBeer);
            res.json(mappedBeers);
        });
    }
};