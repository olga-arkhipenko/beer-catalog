const jwt = require('jsonwebtoken');

module.exports = {
    createToken(payload) {
        return jwt.sign(payload, 'secret', {
            expiresIn: 86400
        });
    },
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
