import urlMap from './urlMap';

const punkAPIurl = 'https://api.punkapi.com/v2/beers';

export default {
    create(requestParams) {
        return punkAPIurl + Object.keys(requestParams)
            .reduce((acc, cur, i, arr) => {
                return (i === arr.length - 1)
                    ? acc.concat(`${urlMap[cur]}=${requestParams[cur]}`)
                    : acc.concat(`${urlMap[cur]}=${requestParams[cur]}&`);
            }, '?'); 
    }
}