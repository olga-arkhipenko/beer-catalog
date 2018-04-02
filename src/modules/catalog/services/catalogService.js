import ajaxHelper from 'common/helpers/ajaxHelper';
import urlMapper from 'features/punkApiManagement/urlMapper';
import urlCreator from 'common/helpers/utilities/urlCreator';
import { apiUrl } from 'features/punkApiManagement/punkApiUrl';
import catalogCardMapper from 'features/punkApiManagement/catalogCardMapper';

export default {
    fetchBeers(beerParams) {
        const mappedParams = urlMapper.Map(beerParams);
        const url = urlCreator.create(apiUrl, mappedParams);
        console.log(url);
        return ajaxHelper.get(url).then(beers => catalogCardMapper.Map(JSON.parse(beers)));
    }
};

