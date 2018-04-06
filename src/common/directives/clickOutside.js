export default {
    isFn: true,
    bind(el, binding) {
        const handler = (e) => {
            if ((!el.contains(e.target) && el !== e.target)) {
                binding.value();
            }
        };
        el.clickOutside = handler;
        document.addEventListener('click', handler);
    },

    unbind(el) {
        document.removeEventListener('click', el.clickOutside);
        el.clickOutside = null;
    }
};

