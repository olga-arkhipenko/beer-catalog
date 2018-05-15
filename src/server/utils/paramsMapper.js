module.exports = {
    mapParams(urlMap, urlParams) {
        console.log(urlParams);
        const result = Object.keys(urlParams).reduce((accumulator, current) => {
            if (Array.isArray(urlParams[current])) {
                accumulator[urlMap[current]] = urlParams[current].join('|');
                return accumulator;
            }
            if (!urlParams[current] || !urlMap[current]) {
                return accumulator;
            }
            accumulator[urlMap[current]] = urlParams[current];
            return accumulator;
        }, {});
        console.log(`result${Object.keys(result)}`);
        return result;
    }
};
