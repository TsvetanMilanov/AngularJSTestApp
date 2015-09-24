/* globals module, require, Buffer */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    pictureSchema = new Schema({
        buffer: {
            type: Buffer,
            required: true
        },
        extension: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }),
    Picture = mongoose.model('Picture', pictureSchema);

module.exports.seedInitialData = function() {
    Picture.find({}).exec(function(err, messages) {
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

                Picture.create(message);
            }
        }
    });
};