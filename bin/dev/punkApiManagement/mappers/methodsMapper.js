var MashTemp = require('../../view/models/MashTemp');
var Fermentation = require('../../view/models/Fermentation');
var Twist = require('../../view/models/Twist');

module.exports = {
    mapMashTemp: function mapMashTemp(mashTemp) {
        return mashTemp.map(function (mashTempItem) {
            var mappedMashTemp = new MashTemp();
            mappedMashTemp.value = mashTempItem.temp.value;
            mappedMashTemp.unit = mashTempItem.temp.unit;
            mappedMashTemp.duration = mashTempItem.duration;

            return mappedMashTemp;
        });
    },
    mapFermentation: function mapFermentation(fermentation) {
        var mappedFermentation = new Fermentation();
        mappedFermentation.value = fermentation.temp.value;
        mappedFermentation.unit = fermentation.temp.unit;

        return mappedFermentation;
    },
    mapTwist: function mapTwist(twist) {
        var mappedTwist = new Twist();
        mappedTwist.name = twist;

        return mappedTwist;
    }
};