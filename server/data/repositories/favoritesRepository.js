const database = require('../index');

module.exports = {
    findFavoriteIds(userId) {
        return database.favorite.findAll({
            include: [{
                model: database.user,
                where: { id: userId }
            }]
        });
    }
};
