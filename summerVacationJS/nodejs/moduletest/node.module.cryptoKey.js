var crypto = require('crypto');

var key = 'sksmsdlaghdrl';
var msg = 'help me...';
  
var cipher = crypto.createCipher('aes192', key);
cipher.update(msg, 'utf-8', 'base64');
var cipherMsg = cipher.final('base64');

console.log('암호화된 데이터 : ' , cipherMsg);

var decipher = crypto.createDecipher('aes192', 'sksmsdlaghdrl');
decipher.update(cipherMsg, 'base64', 'utf-8');
var decipherMsg = decipher.final('utf-8');

console.log('복구된 데이터 : ', decipherMsg);
