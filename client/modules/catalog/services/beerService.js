import ajaxHelper from 'common/helpers/ajaxHelper';
import urlMapper from 'common/utilities/urlMapper';
import urlCreator from 'common/utilities/urlCreator';
import queryParamsMap from 'common/api/constants/queryParamsMap';
import urls from 'common/api/constants/urls';
import beerMapper from 'common/api/mappers/beerMapper';

export default {
    fetchBeers(beerParams) {
        const mappedParams = urlMapper.mapParams(queryParamsMap, beerParams);
        const url = urlCreator.create(urls.beers, mappedParams);
        return ajaxHelper
            .get(url)
            .then(beers => beers.map(beerMapper.mapToBeer));
    },
    addFavoriteBeer(beerId) {
        const url = `${urls.favorites}/${beerId}`;
        return ajaxHelper
            .postJson(url, { beerId })
            .then(beer => beer.beerId);
    },
    removeFavoriteBeer(beerId) {
        const url = `${urls.favorites}/${beerId}`;
        return ajaxHelper
            .delete(url, { beerId })
            .then(beer => beer.beerId);
    }
};
