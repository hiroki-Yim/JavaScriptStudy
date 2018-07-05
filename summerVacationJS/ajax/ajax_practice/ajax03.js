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

HirokiJs.getAjax = function() { //js는 매개변수가 제약이 없음
  var argLength = arguments.length;
  if (argLength == 0) { throw new Error("no input arguments ex) HirokiJs.getAjax(option); "); } //여기서 종료되니 else if사용할 필요X
  if (argLength == 1) {
    var arg1 = arguments[0];
    var arg1type = typeof arg1;
    if (arg1type === "object") {
      var url = arg1.url || ""; //arg1에 url이 있으면
      if (url == "") { throw new Error("this method must have a url property "); }  //없으면 throw error
      var target = arg1.target || ""; //arg1에 url이 있으면
      if (target == "") { throw new Error("this method must have a url property "); }
      HirokiJs._getAjax(url, target);
    }
  }else if(argLength == 2){ HirokiJs._getAjax(arguments[0], arguments[1]); }
};

HirokiJs._getAjax = function(url, target) { //기존의 형식도 지원하는 Framework를 위해 기존의 것은 놔둠
  var request = HirokiJs.getHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) { //서버와의 통신이 정상적으로 마치고, 성공적으로 데이터가 전송 돼었을 때
      // 1단계 : target's type check
      var targetType = typeof target;
      alert(targetType); // === 데이터 타입까지 비교 , == 단순히 값만 비교
      if (targetType === "object" && target.innerHTML) {
        target.innerHTML = request.responseText;
      } else if (targetType === "string") {
        // 2단계 : 값에 따라서 tagName인지 class인지 구분 -> (값을 판단 기준은 css의 셀렉터)
        //class = .으로 시작 id 는 #으로 시작 나머지는
        var key = target.charAt(0);
        if (key == ".") { //좀 무식한 방법으로 replace(".", ""); .을 ""빈 문자열로 바꿔줌
          //".div" .을 빼고 찾아줘야함        substring 메서드를 사용해서 찾아줌 시작값과 마지막값을 정해서 써도됨(정확)
          var doms = document.getElementsByClassName(target.substring(1));
          for (var i = 0; i < doms.length; i++) {
            var dom = doms[i];
            dom.innerHTML = request.responseText;
          }
        } else if (key == "#") {
          var dom = document.getElementById(target.substring(1));
          if (dom) { // undefined면 안되니 nullPointExeption Check
            dom.innerHTML = request.responseText;
          }
        } else {
          var doms = document.getElementsByTagName(target.substring(1));
          for (var i = 0; i < doms.length; i++) {
            var dom = doms[i];
            dom.innerHTML = request.responseText;
          }
        }
      }
    }
  };
  //MIME-TYPE라는 용어를 사용
  //
  request.open('GET', url);
  //request.setRequestHeader("Cache-Control", "no-cache");
  //  request.setRequestHeader("Content-Type", "application/x-www-form-encode");
  request.send(null);
};
var $ = HirokiJs;
