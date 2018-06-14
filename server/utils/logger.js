const path = require('path');
const fs = require('fs');
const morgan = require('morgan');

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flag: 'a' });

module.exports = (app) => {
    app.use(morgan('combined', { stream: accessLogStream }));
};
