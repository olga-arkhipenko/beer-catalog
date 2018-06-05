const https = require('https');

module.exports = {
    get(url) {
        return new Promise((resolve, reject) => {
            https.get(url, (res) => {
                if (res.statusCode < 200 && res.statusCode > 299) {
                    reject(res.statusCode);
                }
                let json = '';
                res.on('data', (chunk) => { json += chunk; });
                res.on('end', () => resolve(JSON.parse(json)));
            }).on('error', err => reject(err));
        });
    }
};

