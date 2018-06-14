import ajaxHelper from 'common/helpers/ajaxHelper';
import urlMapper from 'common/utilities/urlMapper';
import urlCreator from 'common/utilities/urlCreator';
import queryParamsMap from 'common/api/constants/queryParamsMap';
import urls from 'common/api/constants/urls';
import beerMapper from 'common/api/mappers/beerMapper';
import notificationHelper from 'common/helpers/notification/notificationHelper';
import warnings from 'common/helpers/notification/warnings';

export default {
    fetchFavoriteBeers(pageParams, userData) {
        const mappedParams = urlMapper.mapParams(queryParamsMap, pageParams);
        const url = urlCreator.create(urls.favorites, mappedParams);
        const promise = ajaxHelper
            .postJson(url, userData)
            .then(favoriteBeers => favoriteBeers.map(beerMapper.mapToBeer));
        promise.catch(() => notificationHelper.showWarning(warnings.authorization));

        return promise;
    },
    addFavoriteBeer(beerId) {
        const url = `${urls.favorites}/${beerId}`;
        const promise =
        ajaxHelper
            .postJson(url, { beerId })
            .then(beer => beer.beerId);
        promise.catch(() => notificationHelper.showWarning(warnings.authorization));

        return promise;
    },
    removeFavoriteBeer(beerId) {
        const url = `${urls.favorites}/${beerId}`;
        const promise = ajaxHelper
            .delete(url, { beerId })
            .then(beer => beer.beerId);
        promise.catch(() => notificationHelper.showWarning(warnings.authorization));

        return promise;
    }
};
