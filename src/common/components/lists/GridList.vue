<template>
    <section class="grid-list">
        <slot/>
    </section>
</template>

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

