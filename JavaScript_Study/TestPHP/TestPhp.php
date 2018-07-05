<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>my first php</title>
  </head>

  <body>
    <h1>My First PHP</h1>
    <!-- htdocs 폴더 안에 웹 문서를 저장해야 Apache Server가 찾을 수 있음. -->

    <?php   //서버를 거쳐야 내가 원하고자 한 형식으로 가공되어 나옴  -> 서버 거치면서 주석도 없어짐(클라이언트에게 전달X)
      $str = "hiroki's first php";  //String 타입이 담김
      $integer1 = 1;  //int 타입이 담김

        if ($str == "hiroki's first php") {
          echo $str;
        }else{
          echo "제대로 쳐";
        }
        echo "<br>";
        echo "<h1>", "오늘 날짜:", date("Y-m-d"), "<br>" ,"</h1>";   // ,(comma)로 concatenation(문자열 결합) 기능 사용
        echo "<h2>", "현재 시간:", date("H:i:s"), "</h2>";  //여기서 date는 문자열으로 리턴해줌
     ?>



  </body>

</html>
