import urlConverter from './urlConverter';

const punkAPIurl = 'https://api.punkapi.com/v2/beers';

export default {
    create(requestParams) {
        const urlParams = urlConverter.convert(requestParams);
        return punkAPIurl + Object.keys(urlParams)
            .reduce((acc, cur, i, arr) => {
                return (i === arr.length - 1)
                    ? acc.concat(`${cur}=${urlParams[cur]}`)
                    : acc.concat(`${cur}=${urlParams[cur]}&`);
            }, '?'); 
    }
}