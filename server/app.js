const path = require('path');
const express = require('express');
const router = require('./web/routing/router');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 3030);

app.use(morgan('combined'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw({ limit: '50mb', type: 'image/*' }));

router(app);

app.use(express.static('.'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(app.get('port'));
