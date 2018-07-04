import notificationCreator from './notificationCreator';

export default {
    showNotification(promise, config) {
        return promise
            .then(() => {
                if (config.success) {
                    notificationCreator.showSuccess(config.success);
                }
            })
            .catch(() => {
                if (config.error) {
                    notificationCreator.showError(config.error);
                }
            });
    }
};

