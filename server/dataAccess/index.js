const Sequelize = require('sequelize');
const databaseConfig = require('./configs/dataBaseConfig');
const databaseConnector = require('./databaseConnector');
const user = require('./modules/User');
const favorite = require('./modules/Favorite');
const image = require('./modules/Image');

const databaseConnection = databaseConnector.connect(databaseConfig);

const userModul = user(databaseConnection, Sequelize.DataTypes);
const favoriteModul = favorite(databaseConnection, Sequelize.DataTypes);
const imageModul = image(databaseConnection, Sequelize.DataTypes);

userModul.associate(favoriteModul, imageModul);
favoriteModul.associate(userModul);

module.exports.favorite = favoriteModul;
module.exports.user = userModul;
module.exports.image = imageModul;
