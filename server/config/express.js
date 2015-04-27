console.log('[SERVER] Configuring module express');

var	express	= require('express');

module.exports = function(app) {
    // Deliver static files from frontend folder
    app.server.express.use(express.static('client'));
};