import Noty from 'noty';

function createNotification(type, text) {
    return new Noty({
        type,
        theme: 'sunset',
        layout: 'topCenter',
        timeout: 3000,
        text
    });
}

export default {
    showSuccess(text) {
        createNotification('success', text).show();
    },
    showError(text) {
        createNotification('error', text).show();
    }
};
