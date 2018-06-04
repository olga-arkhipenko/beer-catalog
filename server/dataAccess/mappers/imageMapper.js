const Image = require('../../business/models/Image');

module.exports = {
    mapToImage(databaseEntity) {
        const image = new Image();
        image.id = databaseEntity.dataValues.id;
        image.url = databaseEntity.dataValues.url;
        image.width = databaseEntity.dataValues.width;
        image.height = databaseEntity.dataValues.height;

        return image;
    }
};
