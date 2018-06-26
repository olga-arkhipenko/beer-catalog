import Noty from 'noty';

export default {
    showNotification(type, message) {
        new Noty({
            type,
            theme: 'sunset',
            layout: 'topCenter',
            timeout: 3000,
            text: message
        }).show();
    }
};

