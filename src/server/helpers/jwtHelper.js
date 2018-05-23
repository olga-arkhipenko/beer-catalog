const jwt = require('jsonwebtoken');

module.exports = {
    verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, 'secret', (err, decodedToken) => {
                if (err || !decodedToken) {
                    return reject(err);
                }
                resolve(decodedToken);
            });
        });
    }
};
