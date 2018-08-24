import ajaxHelper from 'common/helpers/ajaxHelper';
import urlMapper from 'common/utilities/urlMapper';
import urlCreator from 'common/utilities/urlCreator';
import queryParamsMap from 'common/api/constants/queryParamsMap';
import urls from 'common/api/constants/urls';
import beerMapper from 'common/api/mappers/beerMapper';

export default {
    fetchFavoriteBeers(pageParams) {
        const mappedParams = urlMapper.mapParams(queryParamsMap, pageParams);
        const favoriteBeersUrl = urlCreator
            .createUrl(urls.prefix, urls.favorites, null, mappedParams);
        return ajaxHelper
            .get(favoriteBeersUrl)
            .then(favoritesData => ({
                beers: favoritesData.beers.map(beerMapper.mapToBeer),
                amountOfPages: favoritesData.amountOfPages
            }));
    },
    addFavoriteBeer(beerId) {
        const favoriteBeerUrl = urlCreator.createUrl(urls.prefix, urls.favorite, { beerId });
        return ajaxHelper
            .post(favoriteBeerUrl, { beerId })
            .then(beer => beer.beerId);
    },
    removeFavoriteBeer(beerId) {
        const favoriteBeerUrl = urlCreator.createUrl(urls.prefix, urls.favorite, { beerId });
        return ajaxHelper
            .delete(favoriteBeerUrl, { beerId })
            .then(beer => beer.beerId);
    }
};
