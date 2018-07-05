(function() { //AJAX = js를 사용해 서버와 비동기적 통신을 하는 것
              //새로고침 없이 background에서 가져와서 현재 화면을 update가능한 장점
              //ms사에서 제안해서 IE에서 제공했던 것
              //ActiveX 라는 오브젝트를 사용해서 외부라이브러리를 사용
              //이후에 다른 브라우저들이 사용하기 위해 XMLHttpRequest를 만듬 그게 표준화 됨
              //서버와의 통신!! 바꿔야 할 정보를 서버에서 받아온다? -> AJAX
    var httpRequest;  // -> 요청을 할 객체

    document.getElementById("ajaxButton").onclick = function() {
      makeRequest('http://localhost/ajax/ajax_practice/data01.json');
      //root 디렉토리 = 절대경로 -> /로 시작하면 절대경로 아니면 상대경로 단, 프로토콜로 시작하는것도 절대경로
      //주어진 url이 protocol로 시작하는가, else if /로 시작하는가
    };

    function makeRequest(url) {             // make use all browser instence  ,browser가 지원하는지 검사
      if (window.XMLHttpRequest) {          // mozilla, safari, etc browser...
        httpRequest = new XMLHttpRequest(); // httpRequest에 객체 인스턴스를 담음 사용할 수 있는지 if문으로 검사 있으면 객체 인스턴스를 만듦
      } else if (window.ActiveXObject) {    // IE8 over 그렇지 못한 브라우저에서 사용하기위해 밑과 같이 처리함
        try {
          httpRequest = new ActiveXObject("Msxml2.XMLHTTP");  // 혹시 지원하지 않는다면
        } catch (e) {                                         //ActiveX 오브젝트로 만들어서 지원해줌
          try {
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");// 위에것 마저 없으면 microsoft사의 http사용
          } catch (e) {}
        }
      }
      if (!httpRequest) { // 지원하는 브라우저가 아무것도 없으면 error massage 출력
        throw new error("This browser can not support AJAX.")
        alert('Giving up :( Cannot create an XMLHTTP instence');
        return false; //없으면 그만둔다  -> 함수 JS 종료
      }               //on이 붙으면 이 이벤트가 발생했을 때 처리하는 이벤트 처리기 -> 콜백함수
      // 응답을 위한 콜백함수 설정 -> readystatechange라는 이벤트에 on을 붙이면 -> 이 이벤트가 발생했을 때 라는 뜻
      httpRequest.onreadystatechange = alertContents; //서버로 보낸 요청에 대한 응답으로 어떤 동작을 할지에 대해 정의함
      httpRequest.open('GET', url, true); //요청을 하기위해 HTTP request class의 open과 send를 호출
      httpRequest.send(null); // send를 보낼 때 요청함 매개변수 null
                              // get방식이라 body에 전송할 데이터가 없고 필요도 없음 그래서 null넣음
                              //open's parameter
      //1. HTTP 전송방식 ex)1.GET, 2.POST, 3.HEAD always Upper Case
      //2. 요구할 페이지의 정확한 URL, 요청할 리소스 url
      //3. 요구가 비동기식으로 수행될지 결정 true
      //send' parameter
    } //httpRequest's property onreadystatechange transmisson request server to response, what request to me
      //-> 해당 함수를 수행하는 것이 아닌 어떤 함수를 호출할것인지 지정

    function alertContents() {  // httpRequest의 상태가 변할 때 마다 호출
      if (httpRequest.readyState === 4) { //이상 없이 응답을 받았을 때
        //readyState's value
        //0 (uninitialized), 1 (loading), 2 (loaded), 3 (interactive), 4 (complete)
        if (httpRequest.status === 200) {   //HTTP 서버 응답 상태 코드
        //  alert('sucessfully connect')      //이상 없음
        //  alert(httpRequest.responseText);  //서버의 응답을 텍스트 문자열로 반환함
        var rqDiv = document.getElementById("rqDiv");
        rqDiv.innerHTML = httpRequest.responseText;
          // 응답이 끝났을 때 그 응답이 text라면 담긴다
        } else {                            //요구를 처리하는 과정에서 문제가 발생되었을 때 404 or 500
          alert('There was a problem with the request.');
        } //클로저 때문에 다른함수에서 선언된 httpRequest를 사용할 수 있는 것  외부에서는 사용x why? chain화 됐기때문
      }   //자바스크립트는 문맥에 의해 움직임 java의 final변수 같은 것
    }
  })();

  //            AJAX를 사용할 때 기본적인 로직
  // 1. httpRequest 객체 인스턴스 만듦
  // 2. 콜백함수 설정 -> onreadystatechange = 함수 꼴로 설정
  // 3. GET 방식인지 POST 방식인지 결정
  // 4. send메서드를 사용해서 실제 요청을 함
  // 5. 요청받았을 때 어떻게 처리할지 기술
