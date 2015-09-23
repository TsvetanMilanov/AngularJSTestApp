/* globals require, __dirname, process */
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3030;

app.use(express.static(__dirname + '/public/'));

app.get('/partialViews/:partialName', function(req, res) {
    var partialName = req.params.partialName;

    res.redirect('/partials/' + partialName + '.html');
});

app.listen(port);
console.log('Server up and running on port: ' + port);