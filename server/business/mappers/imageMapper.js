const Image = require('../models/image');
const ImageData = require('../models/imageData');

module.exports = {
    mapToImage(dataEntity) {
        const image = new Image();
        image.id = dataEntity.id;
        image.url = dataEntity.url;
        image.width = dataEntity.width;
        image.height = dataEntity.height;

        return image;
    },
    mapToImageData(data) {
        const imageData = new ImageData();
        imageData.url = data.url;
        imageData.width = data.width;
        imageData.height = data.height;

        return imageData;
    }
};
