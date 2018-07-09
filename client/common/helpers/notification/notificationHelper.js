import notificationCreator from './notificationCreator';

export default {
    showNotification(promise, config) {
        return promise
            .then(() => {
                if (config && config.success) {
                    notificationCreator.showSuccess(config.success);
                }
            })
            .catch(() => {
                if (config && config.error) {
                    notificationCreator.showError(config.error);
                }
            });
    }
};

