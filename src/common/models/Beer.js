export class Beer {
    constructor(beerObject) {
        this.id = beerObject.id;
        this.name = beerObject.name;
        this.image = beerObject.image_url;
        this.tagLine = beerObject.tagline;
        this.description = beerObject.description;
    }
}
