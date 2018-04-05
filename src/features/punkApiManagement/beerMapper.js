import { Beer } from 'common/models/Beer';

export default {
    Map(beers) {
        return beers.map(beer => new Beer(beer));
    }
};
