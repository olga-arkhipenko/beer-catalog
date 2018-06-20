module.exports = (sequelize, DataTypes) => {
    const image = sequelize.define('Image', {
        url: {
            type: DataTypes.STRING
        },
        width: {
            type: DataTypes.INTEGER
        },
        height: {
            type: DataTypes.INTEGER
        }
    });

    return image;
};
