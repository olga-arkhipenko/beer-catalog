var Malt = require('../../view/models/Malt');
var Hops = require('../../view/models/Hops');
var Yeast = require('../../view/models/Yeast');

module.exports = {
    mapMalt: function mapMalt(malt) {
        return malt.map(function (maltItem) {
            var mappedMalt = new Malt();
            mappedMalt.name = maltItem.name;
            mappedMalt.value = maltItem.amount.value;
            mappedMalt.unit = maltItem.amount.unit;

            return mappedMalt;
        });
    },
    mapHops: function mapHops(hops) {
        return hops.map(function (hopsItem) {
            var mappedHops = new Hops();
            mappedHops.name = hopsItem.name;
            mappedHops.value = hopsItem.amount.value;
            mappedHops.unit = hopsItem.amount.unit;
            mappedHops.add = hopsItem.add;
            mappedHops.attribute = hopsItem.attribute;

            return mappedHops;
        });
    },
    mapYeast: function mapYeast(yeast) {
        var mappedYeast = new Yeast();
        mappedYeast.name = yeast;

        return mappedYeast;
    }
};