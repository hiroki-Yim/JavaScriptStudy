var crypto = require('crypto');

var shasum = crypto.createHash('sha256');

var msg = "i'm groot";
shasum.update(msg);

var output = shasum.digest('hex');

console.log(msg);
console.log(output);
