<template>
    <section>
        {{ id }}
    </section>
</template>


<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    methods: {

    }
};
</script>
