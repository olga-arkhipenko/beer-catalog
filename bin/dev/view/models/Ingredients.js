function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function Ingredients() {
    _classCallCheck(this, Ingredients);

    this.ingredients = {
        malt: null,
        hops: null,
        yeast: null
    };
};