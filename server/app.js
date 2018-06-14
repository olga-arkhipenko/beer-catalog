const dotenv = require('dotenv');
const path = require('path');
const express = require('express');
const router = require('./web/routing/router');
const logger = require('./utils/logger');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


dotenv.config({ path: `${__dirname}/.env` });

const app = express();

app.set('port', process.env.PORT || 3030);

logger(app);

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw({ limit: '50mb', type: 'image/*' }));

router(app);

app.use(express.static('.'));
app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(app.get('port'));
