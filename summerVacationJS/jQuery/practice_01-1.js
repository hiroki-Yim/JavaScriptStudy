// $(function()({    //window.onload와 같은 로딩되면 실행되는 함수 in jQuery
    // var divId = $("<div>");
    // var divTitleId = $("<span>아이디</span>");
    // var divInputId = $("<input>",{
    //   id:"user_id",
    //   name:"user_id",
    // });
    // divId.append(divTitleId).append(divInputId);
    // $("#loginbox").append(divId);
// alert(1);
// });

$(function(){
  // $("#loginbox").after("<div>");  //before(?)
  $("#loginbox").append("<div>"); //두가지가 같음 수동태 능동태 차이
  $("<div>").appendTo("#loginbox"); //after에 대응 insertAfter, insertBefore

  $("#loginbox").before($("#box")); //box가 loginbox가 나오기 이전으로 옮겨짐 - 위로올라감 
});
