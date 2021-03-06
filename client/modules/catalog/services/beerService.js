import ajaxHelper from 'common/helpers/ajaxHelper';
import urlMapper from 'common/utilities/urlMapper';
import urlCreator from 'common/utilities/urlCreator';
import queryParamsMap from 'common/api/constants/queryParamsMap';
import urls from 'common/api/constants/urls';
import beerMapper from 'common/api/mappers/beerMapper';

export default {
    fetchBeers(beerParams) {
        const mappedParams = urlMapper.mapParams(queryParamsMap, beerParams);
        const beersUrl = urlCreator
            .createUrl(urls.prefix, urls.beers, null, mappedParams);
        return ajaxHelper
            .get(beersUrl)
            .then(beers => beers.map(beerMapper.mapToBeer));
    }
};
