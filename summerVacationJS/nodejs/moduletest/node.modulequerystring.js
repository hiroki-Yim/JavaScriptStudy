var url = require('url');
var querystring = require('querystring');

var parsedObject = url.parse('https://news.naver.com/main/hotissue/sectionList.nhn?sid1=100&gid=1079155&mid=hot&viewType=pc&cid=1079165&nh=20180705152347');
console.log(querystring.parse(parsedObject.query));
