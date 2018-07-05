<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php

      $integers = 10;
      $integers2 = 20;
      $sum = $integers + $integers2;

      $str = " 값은 {$sum}입니다.<br>";   //$sum을 독립적으로 써주면(띄워서) 변수로 인식함.
                                         //{}중괄호로 묶어주면 붙여서 써도 변수로 인식함.
      echo $str;

     ?>
  </body>
</html>
