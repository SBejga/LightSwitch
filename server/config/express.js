console.log('[SERVER] Configuring module express');

var	express	= require('express');
var bodyParser = require('body-parser');

module.exports = function(app) {
    // Deliver static files from frontend folder
    app.server.express.use(express.static('client'));
    // Need to define every view key, provide application if user reloads the page
    app.server.express.use('/lights/*', express.static('client'));
    app.server.express.use('/groups/*', express.static('client'));
    app.server.express.use('/scenes/*', express.static('client'));
    app.server.express.use('/settings/*', express.static('client'));
    // Use body parser to get JSON content for REST calls
    app.server.express.use(bodyParser.json());
};