$(function(){
  //var dom = document.getElementById("h1");  //-> 첫번 째 아이디값이 나오고 끝남  그래서
  //var ll = h1.attr("class"); //alert(ll);// attribute를 알아냄
  //getter 값을 알아낼 때에는 개수가 몇개이던지 첫번 째 것만 알아낼 수 있음!!
  //alert(h1.get(1).title); //jQuery냐 dom 객체냐에 따라 사용하는 메서드가 다를경우도 있음  ->dom객체의 title
  //alert(h1.eq(1).attr("title"));  //jQuery의 getter을 사용하는 법  getter은 1번째 값만 가져옴, setter은 전부다
  //eq() jQuery로 찾아서 dom객체로 쓸때 eq()메서드를 쓸 수도 있음.
  var h1 = $(".h1");  //. 찍으면 클래스 #은 아이디 없으면 태그 //alert(h1.length);
  h1.attr("title","타이틀!");  //h1 클래스의 attribute를 바꿈 title값이 있는 모든 태그의 title을 타이틀!로 바꿈
  h1.attr("id","1234");//없는 값 추가
  //jQuery에서 setter에서 메서드 each() - 순환메서드 arr에서 for each와 같음
  h1.each(function(index, dom){//each는 함수가 매개변수로 들어감(1:인덱스, 2:doa객체)this로 접근가능키에 dom말고 this를 사용해도됨
    if(index>2){
      return false; //false를 return해서 중단함
    }
    $(this).html("타이틀" + index);     //this는 dom을 나타 냄 - jQuery에서, //this.innerHTML = "타이틀" + index1 //와 같은 의미 - dom에서
  }); //jQuery의 //기존의 setter은 모든 것들을 다 바꿈 but 중첩되어 있으면?
  //$("h1").css("color", "#ffee00").css("font-size", "2em");  // - setter
  $("body").css("backgroundColor", "#d21dfe");
  $("div").css("font-size", function(i,v){  //i번째를
  $(this).css("font-size",( parseInt(v)*(i+i)) + "px").addClass("font_blue"); //Class는 중복이 가능하기에 addClass로 사용
  $("h1").click(function(){
    $("div").toggleClass("font_white");
  });
  $("h2").attr("id", "loginbox");
  $("#loginbox").append("<div>id</div>"); //append는 기존에 있는것 마지막에 추가
  $("#loginbox").html("<div>id</div>");   //덮어씀

  });
});
