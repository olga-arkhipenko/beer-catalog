import api from '../api/api';
import urlCreator from '../api/utilities/urlCreator';
import dataUtils from '../utils/dataUtils';

export default {
    fetchCatalogData(requestParams) {
        const url = urlCreator.create(requestParams);
        let beers = [];
        console.log('url ' + url)
        return api.get(url).then(data => {
            const parsedData = JSON.parse(data);
            const filteredData = dataUtils.catalogFilter(parsedData);
            return filteredData;
        });
    },
    fetchFavoritesData(requestParams) {

    }
}