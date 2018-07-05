<?php

  $user_id = $_POST['user_id'];
  $user_pwd = $_POST['user_pwd'];
  //echo "id : ".$user_id."/ password : ".$user_pwd; //아직은 선언되지 않음
  //connect Database
  //id로 검색
  //있는 아이디일 경우에는 비밀번호 비교
  // 비밀번호가 맞을경우 로그인 허용 // 비밀번호가 다를경우 로그인 거부
  //없는 아이디일 경우에는 로그인 거부

  if($user_id == "hiroki" && $user_pwd == "hayashi"){
    //로그인 허용
    echo "true";
  }else{
    //로그인 거부
    echo "false";
  }
 ?>
