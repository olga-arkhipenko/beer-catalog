import ajaxHelper from 'common/helpers/ajaxHelper';
import urlMapper from 'common/utilities/urlMapper';
import urlCreator from 'common/utilities/urlCreator';
import queryParamsMap from 'common/api/constants/queryParamsMap';
import urls from 'common/api/constants/urls';
import beerMapper from 'common/api/mappers/beerMapper';

export default {
    fetchFavoriteBeers(pageParams) {
        const mappedParams = urlMapper.mapParams(queryParamsMap, pageParams);
        const url = urlCreator.create(urls.favorites, mappedParams);
        return ajaxHelper
            .get(url)
            .then(favoritesData => ({
                beers: favoritesData.beers.map(beerMapper.mapToBeer),
                amountOfPages: favoritesData.amountOfPages
            }));
    },
    addFavoriteBeer(beerId) {
        const url = `${urls.favorites}/${beerId}`;
        return ajaxHelper
            .post(url, { beerId })
            .then(beer => beer.beerId);
    },
    removeFavoriteBeer(beerId) {
        const url = `${urls.favorites}/${beerId}`;
        return ajaxHelper
            .delete(url, { beerId })
            .then(beer => beer.beerId);
    }
};
