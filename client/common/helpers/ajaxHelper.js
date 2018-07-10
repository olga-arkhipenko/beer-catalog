import requestHelper from './requestHelper';
import responseHelper from './responseHelper';

export default {
    get(url) {
        const promise = requestHelper.sendRequest(url);
        return responseHelper.getResponse(promise);
    },
    postJson(url, data) {
        const promise = requestHelper.sendRequest(url, 'post', data);
        return responseHelper.getResponse(promise);
    },
    postImage(url, image) {
        const promise = fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': image.type,
                'Content-Length': image.size
            },
            credentials: 'include',
            body: image || ''
        });
        return responseHelper.getResponse(promise);
    },
    delete(url, data) {
        const promise = requestHelper.sendRequest(url, 'delete', data);
        return responseHelper.getResponse(promise);
    }
};
