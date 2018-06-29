import Noty from 'noty';

class NotificationManager {
    constructor(promise) {
        this.promise = promise;
    }

    createNotification(config) {
        return this.promise
            .then(() =>
                new Noty({
                    type: config.success.type,
                    theme: 'sunset',
                    layout: 'topCenter',
                    timeout: 3000,
                    text: config.success.message
                }).show())
            .catch(() =>
                new Noty({
                    type: config.error.type,
                    theme: 'sunset',
                    layout: 'topCenter',
                    timeout: 3000,
                    text: config.error.message
                }).show());
    }
}

export default {
    showNotification(promise, config) {
        const notificationManager = new NotificationManager(promise);
        return notificationManager.createNotification(config);
    }
};

