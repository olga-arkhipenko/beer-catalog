// import requestHelper from 'common/helpers/requstHelper';

export default {
    get(url) {
        // return requestHelper(url, 'get');
        return fetch(url, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            });
    },
    postJson(url, data) {
        return fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: data ? JSON.stringify(data) : ''
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            });
    },
    postImage(url, image) {
        return fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': image.type,
                'Content-Length': image.size
            },
            credentials: 'include',
            body: image || ''
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            });
    },
    delete(url, data) {
        return fetch(url, {
            method: 'delete',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: data ? JSON.stringify(data) : ''
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            });
    }
};
