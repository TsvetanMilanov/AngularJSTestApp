/* globals module, require, process */
var mongoose = require('mongoose'),
    MessageModel = require('./../models/message'),
    PictureModel = require('./../models/picture'),
    env = process.env.NODE_ENV || 'development';

module.exports = function() {
    var databaseConnectionString;

    if (env === 'development') {
        databaseConnectionString = 'mongodb://admin:admin@ds055872.mongolab.com:55872/angularjstestappdb';
        // databaseConnectionString = 'mongodb://localhost:27017/AngularTestAppDb';
    } else {
        databaseConnectionString = 'mongodb://admin:admin@ds055872.mongolab.com:55872/angularjstestappdb';
    }

    mongoose.connect(databaseConnectionString);

    var database = mongoose.connection;

    database.once('open', function(err) {
        if (!err) {
            console.log("Database up and running on: " + env);
        } else {
            console.log(err);
        }
    });

    MessageModel.seedInitialData();
    PictureModel.seedInitialData();
};