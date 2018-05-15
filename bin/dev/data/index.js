var Sequelize = require('sequelize');
var databaseConfig = require('./configs/dataBaseConfig');
var databaseConnector = require('./databaseConnector');
var user = require('./models/User');
var favorite = require('./models/Favorite');

var databaseConnection = databaseConnector.connect(databaseConfig);

var userModel = user(databaseConnection, Sequelize.DataTypes);
var favoriteModel = favorite(databaseConnection, Sequelize.DataTypes);

userModel.associate(favoriteModel);
favoriteModel.associate(userModel);