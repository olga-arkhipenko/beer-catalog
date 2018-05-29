const beers = require('./routes/beers');
const registration = require('./routes/registration');
const login = require('./routes/login');
const favorites = require('./routes/favorites');
const upload = require('./routes/favorites');

module.exports = (app) => {
    app.use('/api/beers', beers);
    app.use('/api/registration', registration);
    app.use('api/upload', upload);
    app.use('/api/login', login);
    app.use('/api/favorites', favorites);
};
