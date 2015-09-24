/* globals module, require */
var Message = require('mongoose').connection.model('Message');

module.exports = {
    getAllMessages: function(req, res) {
        Message.find({}).exec(function(err, messages) {
            if (err) {
                console.log('Error while loading all messages: ' + err);
                return;
            }

            res.send(messages);
        });
    },
    addMessage: function(req, res) {
        var newMessage = {};

        newMessage.content = req.body.content;
        newMessage.author = req.body.author || 'anonimous';

        Message.create(newMessage, function(err, message) {
            if (err) {
                console.log(err);
                res.send(400);
                return;
            }

            res.send(message);
        });
    }
};