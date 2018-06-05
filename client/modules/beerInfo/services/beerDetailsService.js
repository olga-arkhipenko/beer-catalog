import ajaxHelper from 'common/helpers/ajaxHelper';
import beerMapper from 'common/api/mappers/beerMapper';

export default {
    fetchBeer(beerId) {
        const url = `/api/beers/${beerId}`;
        return ajaxHelper
            .get(url)
            .then(beer => beerMapper.mapToBeerDetails(beer));
        // .catch(err => console.error(err));
    }
};
