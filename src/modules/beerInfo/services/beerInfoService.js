import ajaxHelper from 'common/helpers/ajaxHelper';
import urlCreator from 'common/utilities/urlCreator';
import { URL } from 'features/punkApiManagement/url';

export default {
    fetchBeer(beerId) {
        const url = urlCreator.create(URL, { id: beerId });
        console.log(url);
        return ajaxHelper.get(url).then((beer) => {
            console.log(JSON.stringify(beer));
            beer.reduce((initialValue, beerObject) => ({ ...initialValue, ...beerObject }), {});
        });
    }
};
