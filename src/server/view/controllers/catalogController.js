const QUERY_PARAMS_MAP = require('../../punkApiManagement/queryParamsMap');
const paramsMapper = require('../../utils/paramsMapper');
const urlCreator = require('../../utils/urlCreator');
const URL = require('../../punkApiManagement/url');
const requestHelper = require('../../helpers/requestHelper');

module.exports = {
    getBeers(req, res) {
        const mappedParams = paramsMapper.mapParams(QUERY_PARAMS_MAP, req.query);
        const url = urlCreator.create(URL, mappedParams);
        console.log(`url${url}`);
        requestHelper.get(url, (data) => {
            console.log(data);
            res.json(data);
        });
    }
};
