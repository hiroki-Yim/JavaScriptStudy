var filesys = require('fs');

var text = filesys.readFile('node.module.crypto.js', 'utf8', function(error, data){
  console.log(data);
});

console.log('======================================================='); //위는 비동기식으로
                                                            //작성 하였기 때문에 구분선이 먼저 출력됨.


var text = filesys.readFileSync('node.module.cryptoKey.js','utf8');
console.log(text);


//Sync 동기 aSync 비동기
