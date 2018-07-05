$(function() {

$('#joinForm').submit(function(){
  var check = $('#user_id').data('check')
  && $('#user_password').data('check');
  if(!check){
    alert('회원 정보를 다시 확인 해 주세요!');
    return false; //하나라도 false면 넘어가지 못하게 하려고 flase줌
  }
});
  //비밀번호는 최소한 6자리 있어야하고 숫자,특수문자,영어소문자,영어대문자 한개 씩 있어야함
  //submit

  $('#user_id').keyup(function() {
    var text = $(this).val();
    var regex = /[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}([.][a-zA-Z]{2,})+$/g;
    var msg = regex.test(text) ? "사용 가능한 아이디 입니다." : "아이디는 이메일 형식이어야 합니다.";
    if (regex.test(text)) {
      $(this).data('check', true);
    } else {
      $(this).data('check', false);
    }
    $('#user_id_error').html(msg);
  });

  $('#user_password').keyup(function() {
    var text = $(this).val();
    var regex = /^ $/g;
    var msg = regex.test(text) ? "사용가능 비밀번호" : "사용불가 비밀번호";
    if(/[a-z]/.test(text)
    && /[A-Z]/.test(text)
    && /[0-9]/.test(test)
    && /[\S\W\D]/.test(text)
    && /[!@#$%^&*()_+|}{<>?]/.test(text)
    && /.{6,}/.test(text)){
      $(this).data('check', true);
    }else{
      $(this).data('check', false);
    }
    $('#user_ps_error').html(msg);
  });
});
