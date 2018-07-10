export default {
    getResponse(promise) {
        return promise
            .then(response => (response.ok ?
                response.json()
                : (function () { throw new Error(response.statusText); }())));
    }
};

