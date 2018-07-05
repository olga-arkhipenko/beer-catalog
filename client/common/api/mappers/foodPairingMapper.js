import { FoodPair } from 'beerInfoModule/models/foodPair';

export default {
    mapFoodPairing(foodPairing) {
        return foodPairing.map((foodPair) => {
            const mappedFoodPair = new FoodPair();
            mappedFoodPair.name = foodPair.name;

            return mappedFoodPair;
        });
    }
};
