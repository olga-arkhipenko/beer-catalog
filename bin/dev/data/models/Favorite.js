module.exports = function (sequelize, DataTypes) {
    var favorite = sequelize.define('Favorite', {
        beerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        }
    });

    favorite.associate = function (user) {
        favorite.belongsToMany(user, {
            through: 'UserFavorite'
        });
    };

    return favorite;
};