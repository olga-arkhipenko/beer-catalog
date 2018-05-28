import ajaxHelper from 'common/helpers/ajaxHelper';
import urlMapper from 'common/utilities/urlMapper';
import urlCreator from 'common/utilities/urlCreator';
import { QUERY_PARAMS_MAP } from 'common/api/queryParamsMap';
import beerMapper from 'common/api/mappers/beerMapper';

export default {
    fetchBeers(beerParams) {
        const mappedParams = urlMapper.mapParams(QUERY_PARAMS_MAP, beerParams);
        const url = urlCreator.create('/api/beers', mappedParams);
        console.log(url);
        return ajaxHelper
            .get(url)
            .then(beers => beers.map(beerMapper.mapToBeer));
    }
};
