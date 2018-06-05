import Noty from 'noty';

export default {
    showError(errorMessage) {
        new Noty({
            theme: 'sunset',
            layout: 'center',
            text: errorMessage
        }).show();
    }
};

