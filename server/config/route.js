/* globals module, require*/
var messagesController = require('./../controllers/messagesController'),
    picturesControlelr = require('./../controllers/picturesController');

module.exports.setRoutes = function(app) {
    app.get('/partialViews/:partialName', function(req, res) {
        var partialName = req.params.partialName;

        res.redirect('/partials/' + partialName + '.html');
    });

    app.post('/uploadPicture', picturesControlelr.uploadPicture);

    app.get('/images/:id', picturesControlelr.getImageById);

    app.post('/messages/add', messagesController.addMessage);

    app.get('/api/messages', messagesController.getAllMessages);

    app.get('*', function(req, res) {
        res.redirect('index.html');
    });
};