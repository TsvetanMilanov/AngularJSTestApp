/* globals module*/
module.exports.setRoutes = function(app) {
    app.get('/partialViews/:partialName', function(req, res) {
        var partialName = req.params.partialName;

        res.redirect('/partials/' + partialName + '.html');
    });

    app.get('*', function(req, res) {
        res.redirect('index.html');
    });
};