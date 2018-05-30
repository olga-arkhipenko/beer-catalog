const Malt = require('../../../web/models/Malt');
const Hops = require('../../../web/models/Hops');
const Yeast = require('../../../web/models/Yeast');

module.exports = {
    mapMalt(malt) {
        return malt.map((maltItem) => {
            const mappedMalt = new Malt();
            mappedMalt.name = maltItem.name;
            mappedMalt.value = maltItem.amount.value;
            mappedMalt.unit = maltItem.amount.unit;

            return mappedMalt;
        });
    },
    mapHops(hops) {
        return hops.map((hopsItem) => {
            const mappedHops = new Hops();
            mappedHops.name = hopsItem.name;
            mappedHops.value = hopsItem.amount.value;
            mappedHops.unit = hopsItem.amount.unit;
            mappedHops.add = hopsItem.add;
            mappedHops.attribute = hopsItem.attribute;

            return mappedHops;
        });
    },
    mapYeast(yeast) {
        const mappedYeast = new Yeast();
        mappedYeast.name = yeast;

        return mappedYeast;
    }
};

