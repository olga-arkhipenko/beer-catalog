<template>
    <div>
        <slot/>
    </div>
</template>

<script>
import pageUtil from 'common/utilities/pageUtil';

export default {
    mounted() {
        this.bind();
    },
    methods: {
        bind() {
            window.addEventListener('scroll', this.handleBottom);
        },
        handleBottom() {
            if (pageUtil.isBottom()) {
                this.$emit('pageScrolled');
            }
        }
    }
};
</script>
