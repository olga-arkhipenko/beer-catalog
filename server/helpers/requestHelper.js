const https = require('https');

module.exports = {
    get(url, handler) {
        https.get(url, (res) => {
            let json = '';
            res.on('data', (chunk) => {
                json += chunk;
            });
            res.on('end', () => {
                if (res.statusCode >= 200 && res.statusCode <= 300) {
                    try {
                        handler(JSON.parse(json));
                    } catch (e) {
                        console.error('Error in request');
                    }
                } else {
                    console.error('Error, status:', res.statusCode);
                }
            });
        }).on('error', (err) => {
            console.error('Error:', err);
        });
    }
};

