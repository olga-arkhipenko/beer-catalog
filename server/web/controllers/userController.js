const userService = require('../../business/services/userService');
const jwtHelper = require('../../helpers/jwtHelper');
const userMapper = require('../mappers/userMapper');
const imageMapper = require('../mappers/imageMapper');
const cookieParams = require('../configs/cookieParams');
const responseHandler = require('../handler/responseHandler');

module.exports = {
    async register(request, response) {
        const registrationData = userMapper.mapToRegistrationData(request.body);
        try {
            const userData = await userService.register(registrationData);
            const user = userMapper.mapToUser(userData);
            responseHandler.sendResponse(response, 200, user);
        } catch (err) {
            responseHandler.sendResponse(response, 500, err);
        }
    },
    uploadProfilePicture(req, res) {
        userService
            .uploadProfilePicture(req.body)
            .then((image) => {
                const mappedImage = imageMapper.mapToImage(image);
                responseHandler.sendResponse(res, 200, mappedImage);
            })
            .catch(err => responseHandler.sendResponse(res, 500, err));
    },
    login(req, res) {
        userService
            .login({
                email: req.body.email,
                password: req.body.password
            })
            .then((user) => {
                const token = jwtHelper.createToken({ id: user.id });
                const mappedUser = userMapper.mapToUserDetails(user);
                res.cookie(cookieParams.name, token);
                responseHandler.sendResponse(res, 200, mappedUser);
            })
            .catch(err => responseHandler.sendResponse(res, 500, err));
    },
    signout(req, res) {
        const token = req.cookies[cookieParams.name];
        if (token) {
            res.clearCookie(cookieParams.name);
            responseHandler.sendResponse(res, 200, {});
        } else {
            responseHandler.sendResponse(res, 401);
        }
    },
    getUser(req, res) {
        const token = req.cookies[cookieParams.name];
        if (token) {
            jwtHelper.verifyToken(token)
                .then((decodedToken) => {
                    userService
                        .getUser(decodedToken.id)
                        .then((user) => {
                            const mappedUser = userMapper.mapToUserDetails(user);
                            responseHandler.sendResponse(res, 200, mappedUser);
                        });
                })
                .catch(err => responseHandler.sendResponse(res, 401, err));
        } else {
            responseHandler.sendResponse(res, 401);
        }
    }
};
