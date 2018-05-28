import { MashTemp } from 'beerInfoModule/models/MashTemp';
import { Fermentation } from 'beerInfoModule/models/Fermentation';
import { Twist } from 'beerInfoModule/models/Twist';

export default {
    mapMashTemp(mashTemp) {
        return mashTemp.map((mashTempItem) => {
            const mappedMashTemp = new MashTemp();
            mappedMashTemp.value = mashTempItem.value;
            mappedMashTemp.unit = mashTempItem.unit;
            mappedMashTemp.duration = mashTempItem.duration;

            return mappedMashTemp;
        });
    },
    mapFermentation(fermentation) {
        const mappedFermentation = new Fermentation();
        mappedFermentation.value = fermentation.value;
        mappedFermentation.unit = fermentation.unit;

        return mappedFermentation;
    },
    mapTwist(twist) {
        const mappedTwist = new Twist();
        mappedTwist.name = twist.name;

        return mappedTwist;
    }
};

