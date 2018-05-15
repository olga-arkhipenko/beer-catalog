const FoodPair = require('../../view/models/FoodPair');

module.exports = {
    mapFoodPairing(foodPairing) {
        return foodPairing.map((foodPair) => {
            const mappedFoodPair = new FoodPair();
            mappedFoodPair.name = foodPair;

            return mappedFoodPair;
        });
    }
};
