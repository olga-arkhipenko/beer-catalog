const fetch = require('node-fetch');

module.exports = {
    get(url) {
        return fetch(url)
            .then(result => result.json());
    }
};
