function getRouteParams(url) {
    const routes = [];
    const getRouteParam = (path) => {
        const routeParam = path.match(/:(\w+)/);
        if (routeParam) {
            routes.push(routeParam[1]);
            getRouteParam(path.replace(routeParam[0], ''));
        }
    };
    getRouteParam(url);
    return routes.length ? routes : null;
}
export default {
    create(url, params) {
        const routeParams = getRouteParams(url);
        let fullPath = url;
        if (routeParams) {
            routeParams.forEach((routeParam) => {
                fullPath = fullPath.replace(`:${routeParam}`, params[routeParam] || '');
            });
        }
        const allParams = Object.keys(params);
        const query = allParams.reduce((accumulator, queryParam) => {
            if (!routeParams.includes(queryParam)) {
                accumulator = accumulator.concat(`${queryParam}=${params[queryParam]}&`);
            }
            return accumulator;
        }, '?') || '';
        return `${fullPath}${query}`;
    }
};

