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
export default {
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

