import { Beer } from 'common/models/Beer';
import { BeerDetails } from 'beerInfoModule/models/BeerDetails';
import foodPairingMapper from './foodPairingMapper';
import brewingMapper from './brewingMapper';

const mapBeer = function (beer, TargetType) {
    const mappedBeer = new TargetType();
    mappedBeer.id = beer.id;
    mappedBeer.name = beer.name;
    mappedBeer.image = beer.image_url;
    mappedBeer.tagline = beer.tagline;
    mappedBeer.description = beer.description;

    return mappedBeer;
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
        mappedBeerDetails.foodPairing = foodPairingMapper.mapFoodPairing(beer.food_pairing);
        mappedBeerDetails.brewing =
        brewingMapper.mapBrewing(beer.brewers_tips, beer.ingredients, beer.method);

        return mappedBeerDetails;
    }
};

