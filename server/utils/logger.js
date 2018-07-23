const fs = require('fs');
const morgan = require('morgan');

const accessLogStream = fs.createWriteStream('./access.log', { flag: 'a' });

module.exports = (app) => {
    app.use(morgan('combined', { stream: accessLogStream }));
};
