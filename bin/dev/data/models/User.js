module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthdate: {
            type: DataTypes.DATEONLY
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    user.associate = function (favorite) {
        user.belongsToMany(favorite, {
            through: 'UserFavorite'
        });
    };

    return user;
};