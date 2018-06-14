const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const router = require('./web/routing/router');
const logger = require('./utils/logger');
const parserConfigurator = require('./utils/parserConfigurator');


dotenv.config({ path: `${__dirname}/.env` });

const app = express();

app.set('port', process.env.PORT || 3030);

logger(app);
parserConfigurator(app);
router(app);

app.use(express.static('.'));
app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(app.get('port'));
