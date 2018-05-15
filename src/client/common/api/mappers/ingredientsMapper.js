import { Malt } from 'beerInfoModule/models/Malt';
import { Hops } from 'beerInfoModule/models/Hops';
import { Yeast } from 'beerInfoModule/models/Yeast';

export default {
    mapMalt(malt) {
        return malt.map((maltItem) => {
            const mappedMalt = new Malt();
            mappedMalt.name = maltItem.name;
            mappedMalt.value = maltItem.value;
            mappedMalt.unit = maltItem.unit;

            return mappedMalt;
        });
    },
    mapHops(hops) {
        return hops.map((hopsItem) => {
            const mappedHops = new Hops();
            mappedHops.name = hopsItem.name;
            mappedHops.value = hopsItem.value;
            mappedHops.unit = hopsItem.unit;
            mappedHops.add = hopsItem.add;
            mappedHops.attribute = hopsItem.attribute;

            return mappedHops;
        });
    },
    mapYeast(yeast) {
        const mappedYeast = new Yeast();
        mappedYeast.name = yeast.name;

        return mappedYeast;
    }
};

