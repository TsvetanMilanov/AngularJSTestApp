/* globals module, require, Buffer */
var zlib = require('zlib'),
    Picture = require('mongoose').connection.model('Picture'),
    ACCEPTABLE_IMAGE_FORMATS = [
        'png',
        'jpg',
        'jpeg',
        'gif',
        'bmp'
    ];

module.exports = {
    uploadPicture: function(req, res) {
        req.pipe(req.busboy);

        req.busboy.on('file', function(fieldName, file, fileName) {
            var fileParts = fileName.split('.'),
                filePartsLength = fileParts.length,
                fileExtension = fileParts[filePartsLength - 1],
                pictureName = fileParts.slice(0, filePartsLength - 1).join('');

            if (ACCEPTABLE_IMAGE_FORMATS.indexOf(fileExtension) < 0) {
                res.redirect('/');
                return;
            }

            file.on('data', function(data) {
                var newPicture = {
                    buffer: zlib.deflateSync(data),
                    name: pictureName,
                    extension: fileExtension
                };

                Picture.create(newPicture, function(err, picture) {
                    if (err) {
                        res.send(400);
                        return;
                    }

                    // res.contentType('image/' + picture.extension);
                    // res.send(picture.buffer);

                    res.end();
                });
            });

            res.redirect('/');
        });
    },
    getImageById: function(req, res) {
        var imageId = req.params.id;

        Picture.findOne({
            _id: imageId
        }).exec(function(err, image) {
            if (err) {
                res.status(404);
                return;
            }

            image.buffer = zlib.inflateSync(image.buffer);

            res.contentType('image/' + image.extension);
            res.send(image.buffer);
        });
    },
    getAllPictures: function(req, res) {
        Picture.find({}).exec(function(err, pictures) {
            res.send(pictures);
        });
    }
};