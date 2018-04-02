export default {
    create(url, requestParams) {
        return url + Object.keys(requestParams)
            .reduce((accumulator, current, i, arr) => ((i === arr.length - 1)
                ? accumulator.concat(`${current}=${requestParams[current]}`)
                : accumulator.concat(`${current}=${requestParams[current]}&`)), '?');
    }
};

