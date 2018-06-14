import Noty from 'noty';

export default {
    showError(errorMessage) {
        new Noty({
            type: 'error',
            theme: 'sunset',
            layout: 'topCenter',
            text: errorMessage
        }).show();
    },
    showWarning(warningMessage) {
        new Noty({
            type: 'warning',
            theme: 'sunset',
            layout: 'topRight',
            text: warningMessage
        }).show();
    },
    showSuccess(successMessage) {
        new Noty({
            type: 'success',
            theme: 'sunset',
            layout: 'topCenter',
            text: successMessage
        }).show();
    }
};

