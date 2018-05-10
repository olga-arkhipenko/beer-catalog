const Sequelize = require('sequelize');

module.exports = {
    connect: (databaseConfig) => {
        const databaseConnection = new Sequelize(
            databaseConfig.database,
            databaseConfig.user,
            databaseConfig.password,
            databaseConfig.options
        );
        databaseConnection
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch((err) => {
                console.error('Unable to connect to the database:', err);
            });
    }
};

