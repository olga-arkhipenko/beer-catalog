import ajaxHelper from 'common/helpers/ajaxHelper';
import urlMapper from 'common/utilities/urlMapper';
import urlCreator from 'common/utilities/urlCreator';
import punkApiUrl from 'features/punkApiManagement/punkApiUrl';
import punkApiMap from 'features/punkApiManagement/punkApiUrlMap';
import catalogCardMapper from 'features/punkApiManagement/catalogCardMapper';

export default {
    fetchBeers(beerParams) {
        const mappedParams = urlMapper.Map(punkApiMap, beerParams);
        const url = urlCreator.create(punkApiUrl, mappedParams);
        return ajaxHelper.get(url).then(beers => catalogCardMapper.Map(JSON.parse(beers)));
    }
};

