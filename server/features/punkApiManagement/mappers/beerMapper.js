const Beer = require('../../../view/models/Beer');
const foodPairingMapper = require('./foodPairingMapper');
const brewingMapper = require('./brewingMapper');

module.exports = {
    mapToBeer(beer) {
        const mappedBeer = new Beer();
        mappedBeer.id = beer.id;
        mappedBeer.name = beer.name;
        mappedBeer.image = beer.image_url;
        mappedBeer.tagline = beer.tagline;
        mappedBeer.description = beer.description;
        mappedBeer.abv = beer.abv;
        mappedBeer.ibu = beer.ibu;
        mappedBeer.ebc = beer.ebc;
        mappedBeer.foodPairing = foodPairingMapper.mapFoodPairing(beer.food_pairing);
        mappedBeer.brewing =
        brewingMapper.mapBrewing(beer.brewers_tips, beer.ingredients, beer.method);

        return mappedBeer;
    }
};

