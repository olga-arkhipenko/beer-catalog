import urlMap from './urlMap';

export default {
    Map(params) {
        return Object.keys(params).reduce((accumulator, current) => {
            if (Array.isArray(params[current])) {
                accumulator[urlMap[current]] = params[current].join('|');
                return accumulator;
            }
            if (!params[current]) {
                return accumulator;
            }
            accumulator[urlMap[current]] = params[current];
            return accumulator;
        }, {});
    }
};
