/***
작성일 : 2018.06.28
작성자 : Hiroki Hayashi
파일명 : loginToFrameWork.js
Login use my Framework
*/

//단계 1 : 로그인 버튼을 눌렀을 때 이동하지 못하게 이벤트를 달아준다 -> form 태그의 submit 버튼을 막아야함
var script = document.createElement("script");
script.src = "Hiroki.js";
document.getElementsByTagName("head")[0].append(script);  //외부 js파일을 해당 파일에 부착
//他の文書を変わらずに封着して動かすのがjavascriptである。

window.onload = funcLogin;

function getLoginForm() { //디자인 패턴 의 예 이러면 유지보수가 쉬워짐
  var domForms = document.getElementsByTagName("form");
  return domForms[0];
}

function funcLogin() {
  var domLoginForm = getLoginForm();
  if (!domLoginForm) {
    alert("not exist formtag");
    return;
  }
  domLoginForm.onsubmit = function() {
  //alert("전송버튼을 누르셨군요. 이동은 하지 않습니다.");
    var userId = document.getElementById("user_id").value; //입력한 아이디값을 알아냄
    var userPwd = document.getElementById("user_pwd").value; //입력한 비밀번호를 알아냄  //alert(user_Id + "/" + user_Pwd);
    //var body = "user_id=" + encodeURIComponent(userId) + "&user_pwd=" + encodeURIComponent(userPwd);

    var body = HirokiJs.GetPostBody(domLoginForm);
    var request = HirokiJs.getHttpRequest();
    request.onreadystatechange = function () {  //call back함수로 로그인 여부 판단
      if(request.readyState == 4 ){
        var resText = request.responseText;
        //alert(resText);
        if(resText == "true"){
          domLoginForm.style.display = "none";  //성공시 로그인 form 가림
          var ele = document.createElement("div");
          ele.innerHTML = userId + "님 반갑습니다."
          document.getElementsByTagName("body")[0].append(ele);
        }else{
            alert("id와 pwd를 다시 확인해 주세요.")
        }
      }
    };
    request.open("POST", domLoginForm.action , true);  //domLoginForm.action값 쓰면 php가 ajax를 위해 작성되지 않았을수도 있기ㅐ문에0
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");  //?
    request.send(body);
    return false; //페이지 이동을 못하게 막음
  }
}
