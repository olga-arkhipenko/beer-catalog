const jwt = require('jsonwebtoken');

module.exports = {
    createToken(payload) {
        return jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: 86400
        });
    },
    verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
                if (err || !decodedToken) {
                    return reject(err);
                }
                resolve(decodedToken);
            });
        });
    }
};
