module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('User', {
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
        },
        salt: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    user.associate = (favorite, image) => {
        user.belongsTo(image, {
            as: 'profilePicture'
        });
        user.belongsToMany(favorite, {
            through: 'UserFavorite'
        });
    };

    return user;
};
