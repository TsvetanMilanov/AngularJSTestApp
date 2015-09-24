/* globals module, require */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    messageSchema = new Schema({
        content: {
            type: String,
            required: true
        },
        author: {
            type: String,
            default: 'anonimous'
        }
    }),
    Message = mongoose.model('Message', messageSchema);

module.exports.seedInitialData = function() {
    Message.find({}).exec(function(err, messages) {
        if (err) {
            console.log('Error while seeding initial messages: ' + err);
            return;
        }

        if (messages.length <= 0) {
            for (var i = 0; i < 20; i++) {
                var message = {
                    content: 'Message content #' + i,
                };

                if (i % 5 === 0) {
                    message.author = 'Admin';
                }

                Message.create(message);
            }
        }
    });
};