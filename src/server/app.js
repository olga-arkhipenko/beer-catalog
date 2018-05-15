const path = require('path');
const express = require('express');
const beers = require('./view/routes/beers');

const app = express();

app.use(express.static('.'));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../index.html'));
});

app.use('/beers', beers);

app.listen(3030);
