import ajaxHelper from 'common/helpers/ajaxHelper';
import beerMapper from 'common/api/mappers/beerMapper';
import urlCreator from 'common/utilities/urlCreator';
import urls from 'common/api/constants/urls';

export default {
    fetchBeer(beerId) {
        const url = urlCreator.createUrl(urls.prefix, urls.beer, { beerId });
        return ajaxHelper
            .get(url)
            .then(beer => beerMapper.mapToBeerDetails(beer));
    }
};
