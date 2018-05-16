const URL = require('../../features/punkApiManagement/url');
const requestHelper = require('../../helpers/requestHelper');
const beerMapper = require('../../features/punkApiManagement/mappers/beerMapper');

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
