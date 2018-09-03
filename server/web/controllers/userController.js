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
            const user = await userService
                .register(registrationData)
                .then(userData => userMapper.mapToUser(userData));
            responseHandler.sendResponse(response, 200, user);
        } catch (err) {
            responseHandler.sendResponse(response, 500, err);
        }
    },
    async uploadProfilePicture(request, response) {
        try {
            const image = await userService
                .uploadProfilePicture(request.body)
                .then(imageData => imageMapper.mapToImage(imageData));
            responseHandler.sendResponse(response, 200, image);
        } catch (err) {
            responseHandler.sendResponse(response, 500, err);
        }
    },
    async login(request, response) {
        const loginData = userMapper.mapToLoginData(request.body);
        try {
            const user = await userService.login(loginData);
            const token = jwtHelper.createToken({ id: user.id });
            const mappedUser = userMapper.mapToUserDetails(user);
            response.cookie(cookieParams.name, token);
            responseHandler.sendResponse(response, 200, mappedUser);
        } catch (err) {
            responseHandler.sendResponse(response, 500, err);
        }
    },
    signout(request, response) {
        const token = request.cookies[cookieParams.name];
        if (token) {
            response.clearCookie(cookieParams.name);
            responseHandler.sendResponse(response, 200, {});
        } else {
            responseHandler.sendResponse(response, 401);
        }
    },
    async getUser(request, response) {
        const token = request.cookies[cookieParams.name];
        try {
            const decodedToken = await jwtHelper.verifyToken(token);
            const user = await userService
                .getUser(decodedToken.id)
                .then(data => userMapper.mapToUserDetails(data));
            responseHandler.sendResponse(response, 200, user);
        } catch (err) {
            responseHandler.sendResponse(response, 401, err);
        }
    }
};
