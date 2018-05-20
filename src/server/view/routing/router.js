const beers = require('./routes/beers');
const registration = require('./routes/registration');

module.exports = (app) => {
    app.use('/api/beers', beers);
    app.use('/api/registration', registration);
};

