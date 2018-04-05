<template>
    <div>
        <slot/>
    </div>
</template>

<script>
import pageUtil from 'common/utilities/pageUtil';

export default {
    props: {
        handler: {
            type: Function,
            required: true
        }
    },
    mounted() {
        this.bind(this.handler);
    },
    methods: {
        bind(handler) {
            window.addEventListener('scroll', this.handleBottom(handler));
        },
        handleBottom(handler) {
            if (pageUtil.isBottom()) {
                handler();
            }
        }
    }
};
</script>
