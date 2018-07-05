<? session_start(); //세션 사용하기 ?>
<?php

$member_id = "user";
$member_password = "password";

 ?>

 <!DOCTYPE html>
 <html lang="ko">
   <head>
     <meta charset="utf-8">
     <title>로그인 처리</title>
   </head>
   <body>
   <? if (!isset($_POST["member_id"])){ ?>
      <p style="text-align: center;">암호가 입력되지 않았습니다.</p>
    }

   </body>
 </html>
