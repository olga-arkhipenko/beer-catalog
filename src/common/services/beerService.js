import ajaxHelper from 'common/helpers/ajaxHelper';
import urlMapper from 'common/utilities/urlMapper';
import urlCreator from 'common/utilities/urlCreator';
import { URL } from 'features/punkApiManagement/url';
import { PARAMS_MAP } from 'features/punkApiManagement/paramsMap';
import beerMapper from 'features/punkApiManagement/beerMapper';

export default {
    fetchBeers(beerParams) {
        const mappedParams = urlMapper.Map(PARAMS_MAP, beerParams);
        const url = urlCreator.create(URL, mappedParams);
        return ajaxHelper.get(url).then(beers => beerMapper.Map(beers));
    }
};
