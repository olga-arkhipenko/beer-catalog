const Sequelize = require('sequelize');
const databaseConfig = require('./configs/dataBaseConfig');
const databaseConnector = require('./databaseConnector');
const user = require('./modules/User');
const favorite = require('./modules/Favorite');
const image = require('./modules/Image');

const databaseConnection = databaseConnector.connect(databaseConfig);

const userModule = user(databaseConnection, Sequelize.DataTypes);
const favoriteModule = favorite(databaseConnection, Sequelize.DataTypes);
const imageModule = image(databaseConnection, Sequelize.DataTypes);

userModule.associate(favoriteModule, imageModule);
favoriteModule.associate(userModule);

module.exports.favorite = favoriteModule;
module.exports.user = userModule;
module.exports.image = imageModule;
