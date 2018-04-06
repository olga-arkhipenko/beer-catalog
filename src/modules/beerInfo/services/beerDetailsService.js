import ajaxHelper from 'common/helpers/ajaxHelper';
import urlMapper from 'common/utilities/urlMapper';
import urlCreator from 'common/utilities/urlCreator';
import { URL } from 'features/punkApiManagement/url';
import { QUERY_PARAMS_MAP } from 'features/punkApiManagement/queryParamsMap';
import { ROUTE_PARAMS_MAP } from 'features/punkApiManagement/routeParamsMap';
import beerMapper from 'features/punkApiManagement/beerMapper';

export default {
    fetchBeer(beerId) {
        const mappedParams = urlMapper.mapParams(QUERY_PARAMS_MAP, ROUTE_PARAMS_MAP, { beerId });
        const url = urlCreator.create(URL, mappedParams);
        console.log(url);
        return ajaxHelper.get(url).then((beer) => {
            beerMapper.mapToBeerDetails(beer[0]);
        });
    }
};
