const crypto = require('crypto');
const config = require('./config');
function sign(data, secret = config.secret) {
    // Extract all keys and sort them
    const keys = Object.keys(data).sort();

    // Stitching key-value pair string
    const keyValueStrings = keys
        .filter(key => key !== 'sign') // Exclude the sign key
        .map(key => `${key}=${data[key]}`);

    const result = keyValueStrings.join('&') + '&' + secret;

    // Use md5 encryption
    const hash = crypto.createHash('md5');
    hash.update(result);
    return hash.digest('hex');
}

// test
const timestamp = Date.now();
const secret = config.secret;
console.log(sign({timestamp}, secret));

module.exports = sign;