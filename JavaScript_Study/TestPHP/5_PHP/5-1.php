<!DOCTYPE html>
<html lang="kr" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php

    $arr = array(1,2,3,4,5,6);
    $arr[0] = 7;
    $arr2 = [6,5,4,3,2,1];

    $item = ["id", "name", "addr", "phone"];
    $user = ["hong", "hongki", "대구", "010-5018-6686"];

    for($i = 0; $i < count($user); $i++){       //java에서의 length와 같은 의미로 php에서는 count를 사용한다.
        echo "$item[$i] : $user[$i] <br>";      //연관 배열과 foreach php에서는 인덱스에 숫자 대신 문자열을 사용할 수 있다.
        echo "$arr[$i] : $arr2[$i]";                                        //이것을 연관 배열 이라고 한다 (associatearray)
}
     ?>



  </body>
</html>
