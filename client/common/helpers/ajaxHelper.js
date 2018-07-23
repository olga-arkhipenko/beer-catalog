import requestHelper from './requestHelper';
import responseHelper from './responseHelper';

export default {
    get(url) {
        const promise = requestHelper.sendRequest(url);
        return responseHelper.getResponse(promise);
    },
    post(url, data) {
        const promise = requestHelper.sendRequest(url, 'post', data);
        return responseHelper.getResponse(promise);
    },
    delete(url, data) {
        const promise = requestHelper.sendRequest(url, 'delete', data);
        return responseHelper.getResponse(promise);
    }
};
