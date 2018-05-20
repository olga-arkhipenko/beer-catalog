const Sequelize = require('sequelize');
const databaseConfig = require('./configs/dataBaseConfig');
const databaseConnector = require('./databaseConnector');
const user = require('./models/User');
const favorite = require('./models/Favorite');

const databaseConnection = databaseConnector.connect(databaseConfig);

const userModel = user(databaseConnection, Sequelize.DataTypes);
const favoriteModel = favorite(databaseConnection, Sequelize.DataTypes);

userModel.associate(favoriteModel);
favoriteModel.associate(userModel);

module.exports.favorite = favoriteModel;
module.exports.user = userModel;
