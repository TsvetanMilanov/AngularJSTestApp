/* globals require, process */
var express = require('express'),
    expressConfig = require('./server/config/express'),
    mongooseConfig = require('./server/config/mongoose'),
    routeConfig = require('./server/config/route'),
    app = express(),
    port = process.env.PORT || 3030;

expressConfig(app);
routeConfig.setRoutes(app);
mongooseConfig();

app.listen(port);
console.log('Server up and running on port: ' + port);