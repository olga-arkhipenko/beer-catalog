var Brewing = require('../../view/models/Brewing');
var Ingredients = require('../../view/models/Ingredients');
var Methods = require('../../view/models/Methods');
var ingredientsMapper = require('./ingredientsMapper');
var methodsMapper = require('./methodsMapper');

var mapIngredients = function mapIngredients(ingredients) {
    var mappedIngredients = new Ingredients();
    mappedIngredients.malt = ingredientsMapper.mapMalt(ingredients.malt);
    mappedIngredients.hops = ingredientsMapper.mapHops(ingredients.hops);
    mappedIngredients.yeast = ingredientsMapper.mapYeast(ingredients.yeast);

    return mappedIngredients;
};
var mapMethods = function mapMethods(methods) {
    var mappedMethods = new Methods();
    mappedMethods.mashTemp = methodsMapper.mapMashTemp(methods.mash_temp);
    mappedMethods.fermentation = methodsMapper.mapFermentation(methods.fermentation);
    mappedMethods.twist = methodsMapper.mapTwist(methods.twist);

    return mappedMethods;
};

module.exports = {
    mapBrewing: function mapBrewing(tips, ingredients, methods) {
        var mappedBrewing = new Brewing();
        mappedBrewing.tips = tips;
        mappedBrewing.ingredients = mapIngredients(ingredients);
        mappedBrewing.methods = mapMethods(methods);

        return mappedBrewing;
    }
};