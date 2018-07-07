var fs = require('fs');

var data = 'headac';

 process.on('exit',function(code){
   console.log(code);
 });
 
fs.writeFile('textFile.txt', data, 'utf8', function(error) {
  console.log('aSync----------------------');
  console.log('textFile.txt is maked');
  console.log('aSync----------------------');
});

fs.writeFileSync('syncTextFile.txt', data, 'utf8');
console.log('Sync----------------------');
console.log('syncTextFile.txt is maked');
console.log('Sync----------------------');
