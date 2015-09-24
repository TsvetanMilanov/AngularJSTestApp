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
    }
};