const database = require('../index');

module.exports = {
    createImage(profilePicture) {
        return database.image
            .create({
                url: profilePicture.url,
                width: profilePicture.width,
                height: profilePicture.height
            });
    }
};
