<template>
    <section class="beer-properties">
        <h2>Properties</h2>
        <div class="properties">
            <div class="properties__item">
                <div>
                    <span>ABV</span>
                    <span>&#9432;</span>
                </div>
                <div>
                    {{ beer.alcoholByVolume }}
                </div>
            </div>
            <div class="properties__item">
                <div>
                    <span>IBU</span>
                    <span>&#9432;</span>
                </div>
                <div>
                    {{ beer.bitternessUnits }}
                </div>
            </div>
            <div class="properties__item">
                <div>
                    <span>EBC</span>
                    <span>&#9432;</span>
                </div>
                <div>
                    {{ beer.colorByEBC }}
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        beer: {
            type: Object,
            required: true
        }
    }
};
</script>

<style>
.beer-properties {
    float: left;
}
.properties {
    width: 300px;
}
.properties__item {
    display: flex;

    justify-content: space-between;
}
</style>
