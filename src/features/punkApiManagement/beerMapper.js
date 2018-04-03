import { Beer } from 'common/models/Beer';

export default {
    Map(beers) {
        return beers.map(beer => new Beer(
            beer.id,
            beer.name,
            beer.image_url,
            beer.tagline,
            beer.description,
        ));
    }
};
