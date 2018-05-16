<template>
    <section class="grid-list">
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
.grid-list {
    display: grid;

    align-items: end;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
}
</style>

