const beers = require('./routes/beers');
const registration = require('./routes/registration');
const login = require('./routes/login');
const favorites = require('./routes/favorites');
const uploadImage = require('./routes/uploadImage');

module.exports = (app) => {
    app.use('/api/beers', beers);
    app.use('/api/uploadImage', uploadImage);
    app.use('/api/registration', registration);
    app.use('/api/login', login);
    app.use('/api/favorites', favorites);
};

