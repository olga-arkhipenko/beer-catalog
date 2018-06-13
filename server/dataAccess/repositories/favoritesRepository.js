const database = require('../index');

module.exports = {
    findFavoriteIds(userId) {
        return database.favorite.findAll({
            include: [{
                model: database.user,
                where: { id: userId }
            }]
        });
    },
    addFavorite(userId, beerId) {
        return new Promise((resolve, reject) => {
            database.user.findById(userId)
                .then((user) => {
                    if (user) {
                        resolve(user);
                    } else {
                        reject();
                    }
                })
                .catch(err => reject(err));
        }).then(user => database.favorite
            .findOne({
                where: {
                    beerId
                },
                include: database.user
            })
            .then((beers) => {
                user.addFavorite(beers[0]);
            }));
    },
    removeFavorite(userId, beerId) {
        return new Promise((resolve, reject) => {
            database.user.findById(userId)
                .then((user) => {
                    if (user) {
                        resolve(user);
                    } else {
                        reject();
                    }
                })
                .catch(err => reject(err));
        }).then(user => database.favorite
            .findOne({
                where: {
                    beerId
                },
                include: database.user
            })
            .then((beer) => {
                user.removeFavorite(beer);
            }));
    }
};
