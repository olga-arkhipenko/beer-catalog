import ajaxHelper from 'common/helpers/ajaxHelper';
import beerMapper from 'common/api/mappers/beerMapper';
import notificationHelper from 'common/helpers/notification/notificationHelper';
import errors from 'common/helpers/notification/errors';

export default {
    fetchBeer(beerId) {
        const url = `/api/beers/${beerId}`;
        const promise = ajaxHelper
            .get(url)
            .then(beer => beerMapper.mapToBeerDetails(beer));
        promise.catch(() => notificationHelper.showError(errors.beerLoading));

        return promise;
    }
};
