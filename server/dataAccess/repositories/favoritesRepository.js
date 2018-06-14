const database = require('../index');

module.exports = {
    findFavoriteIds(userId) {
        return database.favorite
            .findAll({
                include: [{
                    model: database.user,
                    where: { id: userId }
                }]
            })
            .then(favorites => favorites.map(favorite => favorite.beerId));
    },
    addFavorite(beerId, userId) {
        return new Promise((resolve, reject) => {
            database.user.findById(userId)
                .then((user) => {
                    if (user) {
                        resolve(user);
                    } else {
                        reject(new Error('User not found.'));
                    }
                })
                .catch(err => reject(err));
        }).then(user => database.favorite
            .findOrCreate({
                where: {
                    beerId
                },
                include: database.user
            })
            .then((beers) => {
                user.addFavorite(beers[0]);
                return beers[0].beerId;
            }));
    },
    removeFavorite(beerId, userId) {
        return new Promise((resolve, reject) => {
            database.user.findById(userId)
                .then((user) => {
                    if (user) {
                        resolve(user);
                    } else {
                        reject(new Error('User not found.'));
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
                return beer.beerId;
            }));
    }
};
