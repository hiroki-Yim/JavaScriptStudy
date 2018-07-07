const http = require('http');

http.createServer((req, res) =>{    // 1.서버를 만들고
  res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});
  res.end('어서오십쇼');
}).listen(8080, '127.0.0.1');

console.log('serer running at http://127.0.0.1');
