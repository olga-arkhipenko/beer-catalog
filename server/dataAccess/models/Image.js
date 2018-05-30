module.exports = (sequelize, DataTypes) => {
    const image = sequelize.define('Image', {
        name: {
            type: DataTypes.STRING
        },
        url: {
            type: DataTypes.STRING
        }
    });

    return image;
};
