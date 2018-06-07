const beers = require('./routes/beers');
const favorites = require('./routes/favorites');
const user = require('./routes/user');

module.exports = (app) => {
    app.use('/api/beers', beers);
    app.use('/api/favorites', favorites);
    app.use('/api/user', user);
};

