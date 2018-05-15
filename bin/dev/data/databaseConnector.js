var Sequelize = require('sequelize');

module.exports = {
    connect: function connect(databaseConfig) {
        var databaseConnection = new Sequelize(databaseConfig.database, databaseConfig.user, databaseConfig.password, databaseConfig.options);
        databaseConnection.authenticate().then(function () {
            console.log('Connection has been established successfully.');
        }).catch(function (err) {
            console.error('Unable to connect to the database:', err);
        });
        databaseConnection.sync();

        return databaseConnection;
    }
};