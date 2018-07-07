var http = require('http');

var fs = require('fs');

var url = require('url');

var server = http.createServer(function(req, res){
  var query = url.parse(req.url, true).query;
  console.log(query);

  var html = '';
  res.writeHead(200, {'content-Type' : 'text/html; charset=utf-8'});


  if(query.type == 'list'){
    html = '게시판 목록 페이지';
  }else if(query.type == 'view'){
    html = '게시판 상세보기 페이지';
  }else{
    html = '잘못된 접근 입니다';
  }


  res.end('<div>' + html+ '</div>'); //query를 String형태로 반환함
}).listen(54321, function(){
  console.log('run server');
});
