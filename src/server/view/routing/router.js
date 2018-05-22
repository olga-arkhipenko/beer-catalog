const beers = require('./routes/beers');
const registration = require('./routes/registration');
const login = require('./routes/login');

module.exports = (app) => {
    app.use('/api/beers', beers);
    app.use('/api/registration', registration);
    app.use('/api/login', login);
};

