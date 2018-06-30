import notyCreator from './notyCreator';

export class NotificationManager {
    constructor(promise) {
        this.promise = promise;
    }

    createNotification(config) {
        return this.promise
            .then(() => {
                if (config.success) {
                    notyCreator.createNoty(config.success.type, config.success.message).show();
                }
            })
            .catch(() => {
                if (config.error) {
                    notyCreator.createNoty(config.error.type, config.error.message).show();
                }
            });
    }
}
