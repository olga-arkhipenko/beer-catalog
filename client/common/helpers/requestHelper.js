export default {
    sendRequest(url, method = 'get', data) {
        return fetch(url, {
            method,
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     credentials: 'include',
            body: data
        });
    }
};

