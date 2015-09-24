/* globals require, __dirname, process */
var express = require('express'),
    routeConfig = require('./server/config/route'),
    mongooseConfig = require('./server/config/mongoose'),
    app = express(),
    port = process.env.PORT || 3030;

app.use(express.static(__dirname + '/public/'));
routeConfig.setRoutes(app);
mongooseConfig();

app.listen(port);
console.log('Server up and running on port: ' + port);