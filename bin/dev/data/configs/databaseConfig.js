module.exports = {
    user: 'beerman',
    password: null,
    database: 'beercatalog',
    options: {
        host: 'localhost',
        dialect: 'postgres',
        operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: false
    }
};