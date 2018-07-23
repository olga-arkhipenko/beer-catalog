<template>
    <section class="beer-properties">
        <h2 class="properties__heading">Properties</h2>
        <div class="properties__list beer-info-list">
            <div class="beer-info-list__item">
                <div>
                    <span>ABV</span>
                    <span class="tooltip-sign">&#9432;
                        <span class="tooltip-info"> Alcohol By Volume measures what
                        percentage of your beer is alcohol</span>
                    </span>
                </div>
                <span v-cloak>
                    {{ beer.alcoholByVolume }}
                </span>
            </div>
            <div class="beer-info-list__item">
                <div>
                    <span>IBU</span>
                    <span class="tooltip-sign">&#9432;
                        <span class="tooltip-info"> International bitterness unit
                        measures the bitterness from hops in a beer on a scale
                        of 0 to 100.</span>
                    </span>
                </div>
                <span v-cloak>
                    {{ beer.bitternessUnits }}
                </span>
            </div>
            <div class="beer-info-list__item">
                <div>
                    <span>EBC</span>
                    <span class="tooltip-sign">&#9432;
                        <span class="tooltip-info">Beer color by  European Brewery Convention
                        is a measurement of  wort colour,
                        as well as quantifying haze in beer</span>
                    </span>
                </div>
                <span v-cloak>
                    {{ beer.colorByEBC }}
                </span>
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

    margin: 40px;
}
.properties__list {
    min-width: 300px;
}

.properties__heading {
    color: #31374c;
}
</style>
