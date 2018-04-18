import pageUtil from 'common/utilities/pageUtil';

export default {
    isFn: true,
    bind(el, binding) {
        const handler = () => {
            if (pageUtil.isBottom()) {
                binding.value();
            }
        };
        el.__VueHandlePageBottom__ = handler;
        window.addEventListener('scroll', handler);
    },
    unbind(el) {
        window.removeEventListener('scroll', el.__VueHandlePageBottom__);
        el.__VueHandlePageBottom__ = null;
    }
};
