const databaseConfig = require('./configs/dataBaseConfig');
const databaseConnector = require('./databaseConnector');

databaseConnector.connect(databaseConfig);

