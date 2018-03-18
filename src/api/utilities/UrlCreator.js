const url = 'https://api.punkapi.com/v2/beers';

export default {
    create(urlParams) {
        return url + Object.keys(urlParams)
            .reduce((acc, cur, i, arr) => {
                return (i === arr.length - 1)
                    ? acc.concat(`${cur}=${urlParams[cur]}`)
                    : acc.concat(`${cur}=${urlParams[cur]}&`);
            }, '?'); 
    },
    // createIds(beerIds) {
    //     if(beerIds) {
    //         return `${url}?ids=${beerIds.join('|')}`
    //     } else return url;
    // }
}