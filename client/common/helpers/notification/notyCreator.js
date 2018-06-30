import Noty from 'noty';

export default {
    createNoty(type, text) {
        return (type && text) ?
            new Noty({
                type,
                theme: 'sunset',
                layout: 'topCenter',
                timeout: 3000,
                text
            })
            : null;
    }
};
