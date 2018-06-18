const Sequelize = require('sequelize');
const config = require('config');


module.exports = {
    connect: () => {
        let databaseConnection;
        if (config.get('databaseConfig.url')) {
            databaseConnection = new Sequelize(
                config.get('databaseConfig.url'),
                config.get('databaseConfig.options')
            );
        } else {
            databaseConnection = new Sequelize(
                config.get('localDatabaseConfig.database'),
                config.get('localDatabaseConfig.user'),
                config.get('localDatabaseConfig.password'),
                config.get('localDatabaseConfig.options')
            );
        }
        databaseConnection
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch((err) => {
                console.error('Unable to connect to the database:', err);
            });
        databaseConnection.sync();

        return databaseConnection;
    }
};

