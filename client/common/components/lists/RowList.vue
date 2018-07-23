<template>
    <section class="row-list">
        <div
            v-for="item in items"
            :key="item.id">
            <slot :item="item"/>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    }
};
</script>


<style>
.row-list {
    display: flex;
    flex-direction: column;
}
</style>
