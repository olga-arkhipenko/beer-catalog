import { NotificationManager } from './NotificationManager';

export default {
    showNotification(promise, config) {
        const notificationManager = new NotificationManager(promise);
        return notificationManager.createNotification(config);
    }
};

