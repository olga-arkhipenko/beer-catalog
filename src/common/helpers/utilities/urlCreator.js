export default {
    create(url, requestParams) {
        return url + Object.keys(requestParams)
            .reduce((accumulator, current, i, arr) => {
                accumulator = accumulator.concat(`${current}=${requestParams[current]}`);
                if (i !== arr.length - 1) {
                    accumulator = accumulator.concat('&');
                }
                return accumulator;
            }, '?');
    }
};

