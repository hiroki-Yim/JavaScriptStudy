/***
HirokiJs Framework 1.0v
*/
// if(window.XMLHttpRequest === undefined){
//   window.XMLHttpRequest = function(){
//     try{ return new ActiveXObject("Msxml2.XMLHTTP");}
//     catch(e){
//       try{  return new ActiveXObject("Microsoft.XMLHTTP");
//       }catch(e){}
//     }
//     throw new Error ("This browser can not support XMLHttpRequest");
//   }
// }

var HirokiJs = {}; //var $ = {}; jquery의 $ 대신 사용
//httpRequest를 가져오는게 불편하여 util을 만들어 줌
HirokiJs._factories = [
  function() {
    return new XMLHttpRequest();
  }, //배열의 첫번째 함수에 결과값으로 XMLHttpRequest를 반환하는 배열
  function() {
    return new ActiveXObject("Msxml2.XMLHTTP");
  },
  function() {
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
]; //함수배열

HirokiJs.getHttpRequest = function() {
  var httpRequest;
  for (var i = 0; i < HirokiJs._factories.length; i++) {
    var func = HirokiJs._factories[i]; //함수를 배열에 담아줌
    try { //호출 시 오류가 날수도 있기 때문에
      httpRequest = func(); // 실행을 시켜서 담아줌 -> 2가지 사항 발생 제대로 안됐을 때 어떤건 오류가 나고 어떤건 null값이 생김
      if (httpRequest != null) { //null이 아니라면 => 제대로 만들어 졌을 때
        return httpRequest;
      }
    } catch (e) {
      continue;
    }

  }
   throw new Error("This browser cannot support AJAX!");
};

HirokiJs.getAjax = function(url, id) {
  var request = HirokiJs.getHttpRequest();
  request.onreadystatechange = function(){
    if (request.readyState == 4 && request.status == 200) { //서버와의 통신이 정상적으로 마치고, 성공적으로 데이터가 전송 돼었을 때
      var text = request.responseText;
      var tag = document.getElementById(id);
      if (tag) { tag.innerHTML = text; }
    }
  };
  request.open('GET', url);
  request.setRequestHeader("Cache-Control", "application/x-www-urlencoded")
  request.send(null);
};

HirokiJs.GetPostBody = function(domForm){
  if(domForm && domForm.innerHTML){
    var body = [];
    var domInputs = domForm.getElementsByTagName("input");
    for(var i = 0; i<domInputs.length; i++){
        var domInput = domInputs[i];
        if(domInput.name){
          body.push(domInput.name + "=" + encodeURIComponent(domInput.value));
        }
    }
    return body.join("&");
  }else{
    return "";
  }
};
