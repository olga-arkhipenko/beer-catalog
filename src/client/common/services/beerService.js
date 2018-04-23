import ajaxHelper from 'common/helpers/ajaxHelper';
import urlMapper from 'common/utilities/urlMapper';
import urlCreator from 'common/utilities/urlCreator';
import { URL } from 'features/punkApiManagement/url';
import { QUERY_PARAMS_MAP } from 'features/punkApiManagement/queryParamsMap';
import beerMapper from 'features/punkApiManagement/mappers/beerMapper';

export default {
    fetchBeers(beerParams) {
        const mappedParams = urlMapper.mapParams(QUERY_PARAMS_MAP, beerParams);
        const url = urlCreator.create(URL, mappedParams);
        return ajaxHelper.get(url).then(beers => beers.map(beerMapper.mapToBeer));
    }
};
