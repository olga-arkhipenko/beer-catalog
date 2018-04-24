import { Brewing } from 'beerInfoModule/models/Brewing';
import { Ingredients } from 'beerInfoModule/models/Ingredients';
import { Methods } from 'beerInfoModule/models/Methods';
import ingredientsMapper from './ingredientsMapper';
import methodsMapper from './methodsMapper';

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

export default {
    mapBrewing(tips, ingredients, methods) {
        const mappedBrewing = new Brewing();
        mappedBrewing.tips = tips;
        mappedBrewing.ingredients = mapIngredients(ingredients);
        mappedBrewing.methods = mapMethods(methods);

        return mappedBrewing;
    }
};
