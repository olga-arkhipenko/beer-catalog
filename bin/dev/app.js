var path = require('path');
var express = require('express');
var beers = require('./view/routes/beers');

var app = express();

app.use(express.static('.'));
app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, '../../index.html'));
});

app.use('/beers', beers);

app.listen(3030);