import { Beer } from 'common/models/Beer';
import { BeerDetails } from 'beerInfoModule/models/BeerDetails';
import { FoodPair } from 'beerInfoModule/models/FoodPair';
import { Brewing } from 'beerInfoModule/models/Brewing';
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

const mapMalt = function (beer) {
    return beer.ingredients.malt.map((malt) => {
        const mappedMalt = new Malt();
        mappedMalt.name = malt.name;
        mappedMalt.value = malt.amount.value;
        mappedMalt.units = malt.amount.units;
        return mappedMalt;
    });
};

const mapHops = function (beer) {
    return beer.ingredients.hops.map((hops) => {
        const mappedHops = new Hops();
        mappedHops.name = hops.name;
        mappedHops.value = hops.amount.value;
        mappedHops.units = hops.amount.units;
        mappedHops.add = hops.add;
        mappedHops.attribute = hops.attribute;
        return mappedHops;
    });
};

const mapYeast = function (beer) {
    const mappedYeast = new Yeast();
    mappedYeast.name = beer.ingredients.yeast;
    return mappedYeast;
};

const mapMashTemp = function (beer) {
    return beer.method.mash_temp.map((mashTemp) => {
        const mappedMashTemp = new MashTemp();
        mappedMashTemp.value = mashTemp.temp.value;
        mappedMashTemp.units = mashTemp.temp.units;
        mappedMashTemp.duration = mashTemp.temp.duration;
        return mapMashTemp;
    });
};

const mapFermentation = function (beer) {
    const mappedFermentation = new Fermentation();
    mappedFermentation.value = beer.method.fermentation.temp.value;
    mappedFermentation.units = beer.method.fermentation.temp.units;
    return mappedFermentation;
};

const mapTwist = function (beer) {
    const mappedTwist = new Twist();
    mappedTwist.name = beer.method.twist;
    return mappedTwist;
};

const mapBrewing = function (beer) {
    const mappedBrewing = new Brewing();
    mappedBrewing.tips = beer.brewers_tips;
    mappedBrewing.ingredients = [mapMalt(beer), mapHops(beer), mapYeast(beer)];
    mappedBrewing.methods = [mapMashTemp(beer), mapFermentation(beer), mapTwist(beer)];
    return mapBrewing;
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
        mappedBeerDetails.foodPairing = beer.food_pairing.map((foodPair) => {
            const mappedFoodPair = new FoodPair();
            mappedFoodPair.name = foodPair;
            return mappedFoodPair;
        });
        mappedBeerDetails.brewing = mapBrewing(beer);
        return mappedBeerDetails;
    }
};

