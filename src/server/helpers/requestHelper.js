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
                        const data = JSON.parse(json);
                        handler(data);
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

