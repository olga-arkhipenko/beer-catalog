const beers = require('./routes/beers');
// const registration = require('./routes/registration');

module.exports = (app) => {
    app.use('/beers', beers);
    // app.use('/registration', registration);
};

