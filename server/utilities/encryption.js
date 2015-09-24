/* globals module, require */

var crypto = require('crypto');

module.exports = {
    generateSalt: function() {
        return crypto.randomBytes(128).toString('base64');
    },
    generateHashedPassword: function(salt, pwd) {
        var hmac = crypto.createHmac('sha1', salt);
        return hmac.update(pwd).digest('hex');
    },
    encrypt: function(buffer, key) {
        var cipher = crypto.createCipher('aes-128-cbc', key);
        var encryptedData = cipher.update(buffer, "binary", "hex");
        return (encryptedData + cipher.final("hex"));
    },
    decrypt: function(cipher, key) {
        var decipher = crypto.createDecipher("aes-128-cbc", key);
        var decryptedData = decipher.update(cipher, "hex", "binary");
        return (decryptedData + decipher.final("binary"));
    }
};