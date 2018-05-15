import ajaxHelper from 'common/helpers/ajaxHelper';
import beerMapper from 'common/api/mappers/beerMapper';

export default {
    fetchBeer(beerId) {
        const url = `/beers/${beerId}`;
        return ajaxHelper
            .get(url)
            .then(beer => beerMapper.mapToBeerDetails(beer));
    }
};
