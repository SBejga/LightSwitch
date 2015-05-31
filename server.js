console.log('[SERVER] Starting Smart Lights backend');

// global application object

var app = {

    config: {},

    state: {
        connect: {
            mongodb: false,
            hue: false,
            hueRegistered: false,
            arduino: false
        },
        appConfig: {},
        config: {},
        lights: {},
        groups: {},
        sensors: {},
        favorites: {},
        scenes: {},
        automation: {},
        rfid: {},
        rfidUnknown: [],
        devices: {},
        speech: {
            testMode: false,
            recognized: false
        },
        party: {}
    },

    server: {},

    controllers: {},

    events:{}
};

// set up global event infrastructure
app.events = require('./server/modules/events');

// Load node modules
app.server.express = require('express')();
//app.server.https   = require('https').createServer(app.server.express);
app.server.http    = require('http').createServer(app.server.express);
app.server.io      = require('socket.io').listen(app.server.http);

// Load module configurations
require('./server/config/express')(app);
require('./server/config/socket')(app);
require('./server/config/mongoose')(app);

// Include all controllers
require('fs').readdirSync(__dirname + '/server/controllers').forEach(function(file) {
    var controller;

    if(file.match(/\.js$/) !== null) {
        controller = file.replace(/\.js$/, '');
        app.controllers[controller] = require('./server/controllers/' + controller)(app);
    }
});

// fire ready event
console.log('[SERVER] All controllers loaded, firing ready event');
app.events.fire('ready');

// Start HTTP Server
app.server.http.listen(80);
console.log('[SERVER] Server is now available on Port 80');
