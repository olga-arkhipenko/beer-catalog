module.exports = (sequelize, DataTypes) => {
    const favorite = sequelize.define('Favorite', {
        // id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     primaryKey: true
        // },
        beerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        }
    });
    return favorite;
};

