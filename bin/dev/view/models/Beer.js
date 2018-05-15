function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function Beer() {
    _classCallCheck(this, Beer);

    this.id = null;
    this.name = null;
    this.image = null;
    this.tagline = null;
    this.description = null;
    this.abv = null;
    this.ibu = null;
    this.ebc = null;
    this.foodPairing = null;
    this.brewing = null;
};