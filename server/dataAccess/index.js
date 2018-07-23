const Sequelize = require('sequelize');
const databaseConnector = require('./databaseConnector');
const user = require('./modelsConfigs/user');
const favorite = require('./modelsConfigs/favorite');
const image = require('./modelsConfigs/image');

const databaseConnection = databaseConnector.connect();

const userModel = user(databaseConnection, Sequelize.DataTypes);
const favoriteModel = favorite(databaseConnection, Sequelize.DataTypes);
const imageModel = image(databaseConnection, Sequelize.DataTypes);

userModel.associate(favoriteModel, imageModel);
favoriteModel.associate(userModel);

module.exports.favorite = favoriteModel;
module.exports.user = userModel;
module.exports.image = imageModel;
