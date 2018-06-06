import ajaxHelper from 'common/helpers/ajaxHelper';
import urlMapper from 'common/utilities/urlMapper';
import urlCreator from 'common/utilities/urlCreator';
import queryParamsMap from 'common/api/constants/queryParamsMap';
import urls from 'common/api/constants/urls';
import beerMapper from 'common/api/mappers/beerMapper';
import notificationHelper from 'common/helpers/notification/notificationHelper';
import errors from 'common/helpers/notification/errors';

export default {
    fetchFavoriteBeers(pageParams, userData) {
        const mappedParams = urlMapper.mapParams(queryParamsMap, pageParams);
        const url = urlCreator.create(urls.favorites, mappedParams);
        console.log(url);
        const promise = ajaxHelper
            .postJson(url, userData)
            .then(favoriteBeers => favoriteBeers.map(beerMapper.mapToBeer));
        promise.catch(() => notificationHelper.showError(errors.beersLoading));

        return promise;
    }
};
