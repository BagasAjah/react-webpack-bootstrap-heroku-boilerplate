'use strict';

var express = require('express');
var compression = require('compression');
var path = require('path');
var cors = require('cors');

var app = express();

var staticPath = path.join(__dirname, './../dist');

app.enable('trust proxy');

app.use(compression());

app.options('/api/currentTime', cors());
app.get('/api/currentTime', cors(), function(req, res) {
    res.send({
        time: new Date()
    });
});

app.route('/').get(function(req, res) {
    res.header('Cache-Control', 'max-age=60, must-revalidate, private');
    res.sendFile('index.html', {
        root: staticPath
    });
});


app.use('/', express.static(staticPath, {
    maxage: 31557600
}));

var server = app.listen(process.env.PORT || 5000, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
