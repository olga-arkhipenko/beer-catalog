const Image = require('../models/image');

module.exports = {
    mapToImage(databaseModel) {
        const image = new Image();
        image.id = databaseModel.dataValues.id;
        image.url = databaseModel.dataValues.url;
        image.width = databaseModel.dataValues.width;
        image.height = databaseModel.dataValues.height;

        return image;
    }
};
