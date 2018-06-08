export default {
    set(name, value) {
        document.cookie = `${name}=${value}`;
    },
    get(name) {
        const value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
        return value ? value[2] : null;
    }
};

