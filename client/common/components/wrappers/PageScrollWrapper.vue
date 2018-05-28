<template>
    <div>
        <slot/>
    </div>
</template>

<script>
import pageUtil from 'common/utilities/pageUtil';

export default {
    props: {
        scrollHandler: {
            type: Function,
            required: true
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            if (pageUtil.isBottom()) {
                this.scrollHandler();
            }
        }
    }
};
</script>
