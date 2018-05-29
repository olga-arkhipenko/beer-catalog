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

