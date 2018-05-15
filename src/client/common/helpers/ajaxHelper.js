export default {
    get(url) {
        return fetch(url)
            .then(response => response.json())
            .catch(new Error('fetch denied'));
    }
};
