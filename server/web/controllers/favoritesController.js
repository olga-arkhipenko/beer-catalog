const jwtHelper = require('../../helpers/jwtHelper');

module.exports = {
    getIds(req, res) {
        const token = req.body.token;
        if (token) {
            jwtHelper.verifyToken(token).then((/* decodedToken */) => {
                // const userId = decodedToken.id;
            });
        } else {
            res.send(400);
        }
    }
};
