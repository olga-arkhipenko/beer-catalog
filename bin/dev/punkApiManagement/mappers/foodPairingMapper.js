var FoodPair = require('../../view/models/FoodPair');

module.exports = {
    mapFoodPairing: function mapFoodPairing(foodPairing) {
        return foodPairing.map(function (foodPair) {
            var mappedFoodPair = new FoodPair();
            mappedFoodPair.name = foodPair;

            return mappedFoodPair;
        });
    }
};