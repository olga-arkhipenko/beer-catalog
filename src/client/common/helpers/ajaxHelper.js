export default {
    get(url) {
        return fetch(url)
            .then(response => response.json())
            .catch(new Error('fetch denied'));
    },
    post(url, data) {
        console.log('here');
        return fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: data
        }).then(response => response.status);
    }
};
