console.log('----------------------------------------------------------------------------');

console.log('filename', __filename);
console.log('dirname', __dirname); //console객체의 log메서드 - 메세지 출력

console.log('----------------------------------------------------------------------------');
//console.timeend - 계발 퍼포먼스 시간측정
console.log('숫자 : %d + %d = %d', 273, 52, 273 + 52);
console.log('문자열 : %s', 'Hello Node.js', '안녕 노드');
console.log('JSON : %j', {  //json 형태는 이름과 값에 다 큰따움표
  name: "hongki",
  age: 24,
  location: "daegu"
});

console.log('----------------------------------------------------------------------------');

console.time('a');
var output =  1;
for(var i = 1; i<=1000; i++){
  output *= i;
}
console.log('결과:',output);

console.timeEnd('a');
