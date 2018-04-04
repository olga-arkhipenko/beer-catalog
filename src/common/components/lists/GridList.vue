<template>
    <section class="grid-list">
        <!-- <div v-for="item in items"> -->
        <slot/>
        <!-- </div> -->
    </section>
</template>

<script>
export default {
    // props: {
    //     items: {
    //         type: Array,
    //         required: true
    //     }
    // }
};
</script>


<style>
.grid-list {
    display: grid;

    width: 1240px;
    margin: 40px auto;

    align-items: end;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
}
</style>

