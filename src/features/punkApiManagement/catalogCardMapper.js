import { CatalogCard } from 'catalogModule/models/catalogCard';

export default {
    Map(beers) {
        return beers.map(beer => new CatalogCard(
            beer.id,
            beer.name,
            beer.image_url,
            beer.tagline
        ));
    }
};

