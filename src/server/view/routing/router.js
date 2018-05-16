// const beer = require('./routes/beer');
const catalog = require('./routes/catalog');
// const registration = require('./routes/registration');

module.exports = (app) => {
    app.use('/api/beers', catalog);
    // app.use('/beer', beer);
    // app.use('/registration', registration);
};

