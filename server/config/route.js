/* globals module, require*/
var messagesController = require('./../controllers/messagesController');

module.exports.setRoutes = function(app) {
    app.get('/partialViews/:partialName', function(req, res) {
        var partialName = req.params.partialName;

        res.redirect('/partials/' + partialName + '.html');
    });

    app.get('/api/messages', messagesController.getAllMessages);

    app.get('*', function(req, res) {
        res.redirect('index.html');
    });
};