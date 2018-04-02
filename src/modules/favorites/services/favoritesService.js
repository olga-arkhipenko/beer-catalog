import ajaxHelper from 'common/helpers/ajaxHelper';
import urlMapper from 'common/helpers/utilities/urlMapper';
import urlCreator from 'common/helpers/utilities/urlCreator';
import punkApiUrl from 'features/punkApiManagement/punkApiUrl';
import punkApiMap from 'features/punkApiManagement/punkApiUrlMap';
import favoritesCardMapper from 'features/punkApiManagement/favoritesCardMapper';

export default {
    fetchBeers(beerParams) {
        const mappedParams = urlMapper.Map(punkApiMap, beerParams);
        const url = urlCreator.create(punkApiUrl, mappedParams);
        return ajaxHelper.get(url).then(beers => favoritesCardMapper.Map(JSON.parse(beers)));
    }
};
