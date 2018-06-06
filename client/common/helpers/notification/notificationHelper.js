import Noty from 'noty';

export default {
    showError(errorMessage) {
        new Noty({
            type: 'error',
            theme: 'sunset',
            layout: 'topCenter',
            text: errorMessage
        }).show();
    }
};

