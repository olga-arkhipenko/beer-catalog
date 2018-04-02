import { FavoritesCard } from 'favoritesModule/models/favoritesCard';

export default {
    Map(beers) {
        return beers.map(beer => new FavoritesCard(
            beer.id,
            beer.name,
            beer.image_url,
            beer.tagline,
            beer.description,
        ));
    }
};
