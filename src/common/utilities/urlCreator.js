export default {
    create(url, params) {
        const route = url.replace(/:(\w+)/g, (_, routeParam) => params[routeParam] || '');
        const query = Object.keys(params)
            .reduce((accumulator, queryParam, i, paramsArray) => {
                accumulator = accumulator.concat(`${queryParam}=${params[queryParam]}`);
                if (i !== paramsArray.length - 1) {
                    accumulator = accumulator.concat('&');
                }
                return accumulator;
            }, '?');
        return `${route}${query}`;
    }
};

