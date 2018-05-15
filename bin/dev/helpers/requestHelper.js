var https = require('https');

module.exports = {
    get: function get(url, handler) {
        https.get(url, function (res) {
            var json = '';
            res.on('data', function (chunk) {
                json += chunk;
            });
            res.on('end', function () {
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
        }).on('error', function (err) {
            console.error('Error:', err);
        });
    }
};