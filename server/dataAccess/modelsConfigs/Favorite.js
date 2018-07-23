module.exports = (sequelize, DataTypes) => {
    const favorite = sequelize.define('Favorite', {
        beerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        }
    });

    favorite.associate = (user) => {
        favorite.belongsToMany(user, {
            through: 'UserFavorite'
        });
    };

    return favorite;
};

