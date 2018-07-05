$(function() {
  $("div").each(function(index, dom) {
      for (var i = 0; i < $("div").length; i++) {
        $(this).attr("id", "div"+index);
    }

  }); //div 아이디 줌 0 = id, 1 = ps, 2 = login button

var loginButton = $("<input type = 'submit' value = 'login'>")
.css("backgroundColor", "#fefaab")

});
//on, off, trigger
