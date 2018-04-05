import { Beer } from 'common/models/Beer';
import { Brewing } from './Brewing';

export class BeerInfo extends Beer {
    constructor(beerObject) {
        super(beerObject);
        this.brewing = new Brewing(beerObject);
    }
}
