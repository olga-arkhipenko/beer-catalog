// function getRouteParams(url) {
//     const routes = [];
//     const getRouteParam = (path) => {
//         const routeParam = path.match(/:(\w+)/);
//         if (routeParam) {
//             routes.push(routeParam[1]);
//             getRouteParam(path.replace(routeParam[0], ''));
//         }
//     };
//     getRouteParam(url);

//     return routes.length ? routes : null;
// }
module.exports = {
    // create(url, params) {
    //     const routeParams = getRouteParams(url);
    //     if (routeParams) {
    //         routeParams.forEach((routeParam) => {
    //             url = url.replace(`:${routeParam}`, params[routeParam] || '');
    //         });
    //     }
    //     const allParams = Object.keys(params);
    //     const query = allParams.reduce((accumulator, queryParam) => {
    //         if (!routeParams.includes(queryParam)) {
    //             accumulator = accumulator.concat(`${queryParam}=${params[queryParam]}&`);
    //         }
    //         return accumulator;
    //     }, '?') || '';

    //     return `${url}${query}`;
    // }

    create(route, params) {
        const queryString =
        Object.keys(params)
            .reduce((accumulator, param) => {
                accumulator.push(`${param}=${params[param]}`);
                return accumulator;
            }, [])
            .join('&');
        return `${route}?${queryString}`;
    }
};

