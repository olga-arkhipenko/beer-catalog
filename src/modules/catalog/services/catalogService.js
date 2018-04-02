import ajaxHelper from 'common/helpers/ajaxHelper';
import urlMapper from 'features/punkApiManagement/urlMapper';
import urlCreator from 'common/helpers/utilities/urlCreator';
import { apiUrl } from 'features/punkApiManagement/punkApiUrl';
import catalogCardMapper from 'features/punkApiManagement/catalogCardMapper';

export default {
    fetchBeers(beerParams) {
        const mappedParams = urlMapper.Map(beerParams);
        console.log(JSON.stringify(mappedParams));
        console.log(apiUrl);
        const url = urlCreator.create(apiUrl, mappedParams);
        console.log(url);
        return ajaxHelper.get(url).then((beers) => {
            console.log('here');
            return catalogCardMapper.Map(JSON.parse(beers));
        });
    }
};

