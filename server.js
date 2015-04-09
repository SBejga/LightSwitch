/**
 * Created by Sandro Kuckert on 27.03.2015.
 */
var express = require('express');
var app = express();

// Deliver static files from frontend folder
app.use(express.static('frontend'));
// Handle Requests

var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('LightSwitch Server listening at http://%s:%s', host, port);
});