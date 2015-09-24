/* globals module, require, __dirname */
var express = require('express'),
    bodyParser = require('body-parser'),
    busboy = require('connect-busboy');

module.exports = function(app) {
    app.use(express.static(__dirname + '/../../public/'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(busboy({
        immediate: false
    }));
};