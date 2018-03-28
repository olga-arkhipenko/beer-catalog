import api from 'Api/api';
import urlCreator from 'Api/utilities/urlCreator';
import dataUtils from 'Utils/dataUtils';

export default {
    fetchCatalogData(requestParams) {
        const url = urlCreator.create(requestParams);
        return api.get(url).then(data => {
            const parsedData = JSON.parse(data);
            const filteredData = dataUtils.catalogFilter(parsedData);
            return filteredData;
        });
    },
    fetchFavoritesData(requestParams) {
        const url = urlCreator.create(requestParams);
        return api.get(url).then(data => {
            const parsedData = JSON.parse(data);
            const filteredData = dataUtils.favoritesFilter(parsedData);
            return filteredData;
        });
    }
}