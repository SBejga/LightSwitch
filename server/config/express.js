console.log('[SERVER] Configuring module express');

var	express	= require('express');
var bodyParser = require('body-parser');

module.exports = function(app) {
    // Deliver static files from frontend folder
    app.server.express.use(express.static('client'));
    app.server.express.use(bodyParser.json());
};