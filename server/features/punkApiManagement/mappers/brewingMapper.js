const Brewing = require('../../../view/models/Brewing');
const Ingredients = require('../../../view/models/Ingredients');
const Methods = require('../../../view/models/Methods');
const ingredientsMapper = require('./ingredientsMapper');
const methodsMapper = require('./methodsMapper');

const mapIngredients = function (ingredients) {
    const mappedIngredients = new Ingredients();
    mappedIngredients.malt = ingredientsMapper.mapMalt(ingredients.malt);
    mappedIngredients.hops = ingredientsMapper.mapHops(ingredients.hops);
    mappedIngredients.yeast = ingredientsMapper.mapYeast(ingredients.yeast);

    return mappedIngredients;
};
const mapMethods = function (methods) {
    const mappedMethods = new Methods();
    mappedMethods.mashTemp = methodsMapper.mapMashTemp(methods.mash_temp);
    mappedMethods.fermentation = methodsMapper.mapFermentation(methods.fermentation);
    mappedMethods.twist = methodsMapper.mapTwist(methods.twist);

    return mappedMethods;
};

module.exports = {
    mapBrewing(tips, ingredients, methods) {
        const mappedBrewing = new Brewing();
        mappedBrewing.tips = tips;
        mappedBrewing.ingredients = mapIngredients(ingredients);
        mappedBrewing.methods = mapMethods(methods);

        return mappedBrewing;
    }
};
