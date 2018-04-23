export default {
    isFn: true,
    bind(el, binding) {
        const handler = (e) => {
            if ((!el.contains(e.target) && el !== e.target)) {
                binding.value();
            }
        };
        el.__VueClickOutside__ = handler;
        document.addEventListener('click', handler);
    },

    unbind(el) {
        document.removeEventListener('click', el.__VueClickOutside__);
        el.__VueClickOutside__ = null;
    }
};

