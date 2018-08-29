const fetch = require('node-fetch');

module.exports = {
    async get(url) {
        const result = await fetch(url);
        return result.json();
    }
};
