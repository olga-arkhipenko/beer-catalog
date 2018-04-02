import ajaxHelper from 'common/helpers/ajaxHelper';
import urlMapper from 'features/punkApiManagement/urlMapper';
import urlCreator from 'common/helpers/utilities/urlCreator';
import { apiUrl } from 'features/punkApiManagement/punkApiUrl';
import favoritesCardMapper from 'features/punkApiManagement/favoritesCardMapper';

export default {
    fetchBeers(beerParams) {
        const mappedParams = urlMapper.Map(beerParams);
        const url = urlCreator.create(apiUrl, mappedParams);
        return ajaxHelper.get(url).then(beers => favoritesCardMapper.Map(JSON.parse(beers)));
    }
};
