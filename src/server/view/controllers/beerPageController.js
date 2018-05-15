const URL = require('../../punkApiManagement/url');
const requestHelper = require('../../helpers/requestHelper');
const beerMapper = require('../../punkApiManagement/mappers/beerMapper');

module.exports = {
    getBeer(req, res) {
        const url = `${URL}/${req.params.id}`;
        console.log(`url${url}`);
        requestHelper.get(url, (beer) => {
            const mappedBeer = beerMapper.mapToBeer(beer[0]);
            res.json(mappedBeer);
        });
    }
};
