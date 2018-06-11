const Image = require('../models/Image');

module.exports = {
    mapToImage(dataEntity) {
        const image = new Image();
        image.id = dataEntity.id;
        image.url = dataEntity.url;
        image.width = dataEntity.width;
        image.height = dataEntity.height;

        return image;
    }
};
