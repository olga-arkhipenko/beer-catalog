const path = require('path');
const express = require('express');
const router = require('./view/routing/router');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


router(app);

app.use(express.static('.'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.listen(3030);
