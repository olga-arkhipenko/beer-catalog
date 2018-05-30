const Sequelize = require('sequelize');
const databaseConfig = require('./configs/dataBaseConfig');
const databaseConnector = require('./databaseConnector');
const user = require('./models/User');
const favorite = require('./models/Favorite');
const image = require('./models/Image');

const databaseConnection = databaseConnector.connect(databaseConfig);

const userModel = user(databaseConnection, Sequelize.DataTypes);
const favoriteModel = favorite(databaseConnection, Sequelize.DataTypes);
const imageModel = image(databaseConnection, Sequelize.DataTypes);

userModel.associate(favoriteModel, imageModel);
favoriteModel.associate(userModel);

module.exports.favorite = favoriteModel;
module.exports.user = userModel;
