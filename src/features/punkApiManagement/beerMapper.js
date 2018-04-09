import { Beer } from 'common/models/Beer';
import { BeerDetails } from 'beerInfoModule/models/BeerDetails';
import { FoodPair } from 'beerInfoModule/models/FoodPair';
import { Brewing } from 'beerInfoModule/models/Brewing';
import { Ingredients } from 'beerInfoModule/models/Ingredients';
import { Methods } from 'beerInfoModule/models/Methods';
import { Malt } from 'beerInfoModule/models/Malt';
import { Hops } from 'beerInfoModule/models/Hops';
import { Yeast } from 'beerInfoModule/models/Yeast';
import { MashTemp } from 'beerInfoModule/models/MashTemp';
import { Fermentation } from 'beerInfoModule/models/Fermentation';
import { Twist } from 'beerInfoModule/models/Twist';

const mapBeer = function (beer, TargetType) {
    const mappedBeer = new TargetType();
    mappedBeer.id = beer.id;
    mappedBeer.name = beer.name;
    mappedBeer.image = beer.image_url;
    mappedBeer.tagline = beer.tagline;
    mappedBeer.description = beer.description;
    return mappedBeer;
};

const mapMalt = function (malt) {
    return malt.map((maltItem) => {
        const mappedMalt = new Malt();
        mappedMalt.name = maltItem.name;
        mappedMalt.value = maltItem.amount.value;
        mappedMalt.unit = maltItem.amount.unit;
        return mappedMalt;
    });
};

const mapHops = function (hops) {
    return hops.map((hopsItem) => {
        const mappedHops = new Hops();
        mappedHops.name = hopsItem.name;
        mappedHops.value = hopsItem.amount.value;
        mappedHops.unit = hopsItem.amount.unit;
        mappedHops.add = hopsItem.add;
        mappedHops.attribute = hopsItem.attribute;
        return mappedHops;
    });
};

const mapYeast = function (yeast) {
    const mappedYeast = new Yeast();
    mappedYeast.name = yeast;
    return mappedYeast;
};

const mapIngredients = function (ingredients) {
    const mappedIngredients = new Ingredients();
    mappedIngredients.malt = mapMalt(ingredients.malt);
    mappedIngredients.hops = mapHops(ingredients.hops);
    mappedIngredients.yeast = mapYeast(ingredients.yeast);
    return mappedIngredients;
};

const mapMashTemp = function (mashTemp) {
    return mashTemp.map((mashTempItem) => {
        const mappedMashTemp = new MashTemp();
        mappedMashTemp.value = mashTempItem.temp.value;
        mappedMashTemp.unit = mashTempItem.temp.unit;
        mappedMashTemp.duration = mashTempItem.duration;
        return mappedMashTemp;
    });
};

const mapFermentation = function (fermentation) {
    const mappedFermentation = new Fermentation();
    mappedFermentation.value = fermentation.temp.value;
    mappedFermentation.unit = fermentation.temp.unit;
    return mappedFermentation;
};

const mapTwist = function (twist) {
    const mappedTwist = new Twist();
    mappedTwist.name = twist;
    return mappedTwist;
};

const mapMethods = function (methods) {
    const mappedMethods = new Methods();
    mappedMethods.mashTemp = mapMashTemp(methods.mash_temp);
    mappedMethods.fermentation = mapFermentation(methods.fermentation);
    mappedMethods.twist = mapTwist(methods.twist);
    return mappedMethods;
};

const mapBrewing = function (tips, ingredients, methods) {
    const mappedBrewing = new Brewing();
    mappedBrewing.tips = tips;
    mappedBrewing.ingredients = mapIngredients(ingredients);
    mappedBrewing.methods = mapMethods(methods);
    return mappedBrewing;
};

const mapFoodPairing = function (foodPairing) {
    return foodPairing.map((foodPair) => {
        const mappedFoodPair = new FoodPair();
        mappedFoodPair.name = foodPair;
        return mappedFoodPair;
    });
};


export default {
    mapToBeer(beer) {
        return mapBeer(beer, Beer);
    },
    mapToBeerDetails(beer) {
        const mappedBeerDetails = mapBeer(beer, BeerDetails);
        mappedBeerDetails.alcoholByVolume = beer.abv;
        mappedBeerDetails.bitternessUnits = beer.ibu;
        mappedBeerDetails.colorByEBC = beer.ebc;
        mappedBeerDetails.foodPairing = mapFoodPairing(beer.food_pairing);
        mappedBeerDetails.brewing = mapBrewing(beer.brewers_tips, beer.ingredients, beer.method);
        return mappedBeerDetails;
    }
};

