const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(bodyParser.raw({ limit: '50mb', type: 'image/*' }));
};

