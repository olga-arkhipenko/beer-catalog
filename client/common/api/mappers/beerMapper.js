import { Beer } from 'common/models/beer';
import { BeerDetails } from 'beerInfoModule/models/beerDetails';
import foodPairingMapper from './foodPairingMapper';
import brewingMapper from './brewingMapper';

const mapBeer = function (beer, TargetType) {
    const mappedBeer = new TargetType();
    mappedBeer.id = beer.id;
    mappedBeer.name = beer.name;
    mappedBeer.image = beer.image;
    mappedBeer.tagline = beer.tagline;
    mappedBeer.description = beer.description;
    mappedBeer.isFavorite = beer.isFavorite;

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
        mappedBeerDetails.foodPairing = foodPairingMapper.mapFoodPairing(beer.foodPairing);
        mappedBeerDetails.brewing =
            brewingMapper.mapBrewing(
                beer.brewing.tips,
                beer.brewing.ingredients,
                beer.brewing.methods
            );
        return mappedBeerDetails;
    }
};

