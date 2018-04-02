export default {
    create(url, requestParams) {
        return url + Object.keys(requestParams)
            .reduce((acc, cur, i, arr) => ((i === arr.length - 1)
                ? acc.concat(`${cur}=${requestParams[cur]}`)
                : acc.concat(`${cur}=${requestParams[cur]}&`)), '?');
    }
};

