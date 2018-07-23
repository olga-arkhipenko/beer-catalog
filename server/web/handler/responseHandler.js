module.exports = {
    sendResponse(response, code, data) {
        data = data || null;
        response.status(code).send(data);
    }
};

