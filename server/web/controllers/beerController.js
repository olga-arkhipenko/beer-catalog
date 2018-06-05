const URL = require('../../integration/punkApiManagement/url');
const beerMapper = require('../../integration/punkApiManagement/mappers/beerMapper');
const requestHelper = require('../../helpers/requestHelper');

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
    }
};
