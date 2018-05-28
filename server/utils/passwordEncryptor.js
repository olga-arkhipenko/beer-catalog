const crypto = require('crypto');

module.exports = {
    encrypt(password, salt) {
        return crypto
            .createHmac('sha1', salt)
            .update(password)
            .digest('hex');
    },
    isMatch(password, salt, hash) {
        return this.encrypt(password, salt) === hash;
    },
    createSalt() {
        return crypto.randomBytes(8).toString('hex');
    }
};

