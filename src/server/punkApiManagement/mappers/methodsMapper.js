const MashTemp = require('../../view/models/MashTemp');
const Fermentation = require('../../view/models/Fermentation');
const Twist = require('../../view/models/Twist');

module.exports = {
    mapMashTemp(mashTemp) {
        return mashTemp.map((mashTempItem) => {
            const mappedMashTemp = new MashTemp();
            mappedMashTemp.value = mashTempItem.temp.value;
            mappedMashTemp.unit = mashTempItem.temp.unit;
            mappedMashTemp.duration = mashTempItem.duration;

            return mappedMashTemp;
        });
    },
    mapFermentation(fermentation) {
        const mappedFermentation = new Fermentation();
        mappedFermentation.value = fermentation.temp.value;
        mappedFermentation.unit = fermentation.temp.unit;

        return mappedFermentation;
    },
    mapTwist(twist) {
        const mappedTwist = new Twist();
        mappedTwist.name = twist;

        return mappedTwist;
    }
};

