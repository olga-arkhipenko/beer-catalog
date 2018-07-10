export default {
    sendRequest(url, method = 'get', data) {
        return data ?
            fetch(url, {
                method,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: data ? JSON.stringify(data) : ''
            })
            : fetch(url, {
                method,
                headers: {
                    Accept: 'application/json'
                },
                credentials: 'include'
            });
    }
};

