const database = require('../index');
const imageMapper = require('../mappers/imageMapper');

module.exports = {
    createImage(profilePicture) {
        return database.image
            .create({
                url: profilePicture.url,
                width: profilePicture.width,
                height: profilePicture.height
            })
            .then(imageModel => imageMapper.mapToImage(imageModel));
    }
};
