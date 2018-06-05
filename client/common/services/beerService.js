import ajaxHelper from 'common/helpers/ajaxHelper';
import urlMapper from 'common/utilities/urlMapper';
import urlCreator from 'common/utilities/urlCreator';
import queryParamsMap from 'common/api/constants/queryParamsMap';
import urls from 'common/api/constants/urls';
import beerMapper from 'common/api/mappers/beerMapper';
import notificationHelper from 'common/helpers/notification/notificationHelper';
import errors from 'common/helpers/notification/errors';

export default {
    fetchBeers(beerParams) {
        const mappedParams = urlMapper.mapParams(queryParamsMap, beerParams);
        const url = urlCreator.create(urls.beers, mappedParams);
        const promise = ajaxHelper
            .get(url)
            .then(beers => beers.map(beerMapper.mapToBeer));
        promise.catch(() => {
            notificationHelper.showError(errors.beersLoading);
        });

        return promise;
    }
};
