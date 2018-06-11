const Image = require('../models/Image');

module.exports = {
    mapToImage(imageData) {
        const image = new Image();
        image.id = imageData.id;
        image.url = imageData.url;
        image.width = imageData.width;
        image.height = imageData.height;

        return image;
    }
};
