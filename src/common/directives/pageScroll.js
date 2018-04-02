import pageUtil from 'common/utilities/pageUtil';

function handlePageBottom(handler) {
    if (pageUtil.isBottom()) {
        handler();
    }
}

export default {
    isFn: true,
    bind(el, binding) {
        if (binding.value) {
            window.addEventListener('scroll', handlePageBottom(binding.value));
        }
    },
    unbind(el, binding) {
        window.removeEventListener('scroll', handlePageBottom(binding.value));
    }
};

