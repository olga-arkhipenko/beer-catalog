import ajaxHelper from 'common/helpers/ajaxHelper';
import urlCreator from 'common/utilities/urlCreator';
import { URL } from 'features/punkApiManagement/url';
import beerMapper from 'features/punkApiManagement/mappers/beerMapper';

export default {
    fetchBeer(beerId) {
        const url = urlCreator.create(URL, { id: beerId });
        return ajaxHelper.get(url).then(beer => beerMapper.mapToBeerDetails(beer[0]));
    }
};
