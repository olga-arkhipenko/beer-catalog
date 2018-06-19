import Noty from 'noty';

export default {
    showError(errorMessage) {
        new Noty({
            type: 'error',
            theme: 'sunset',
            layout: 'topCenter',
            timeout: 3000,
            text: errorMessage
        }).show();
    },
    showWarning(warningMessage) {
        new Noty({
            type: 'warning',
            theme: 'sunset',
            layout: 'topRight',
            timeout: 3000,
            text: warningMessage
        }).show();
    },
    showSuccess(successMessage) {
        new Noty({
            type: 'success',
            theme: 'sunset',
            layout: 'topCenter',
            timeout: 3000,
            text: successMessage
        }).show();
    }
};

