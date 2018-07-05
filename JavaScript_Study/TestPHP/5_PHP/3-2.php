<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
    </head>
    <body>
        <?php
            echo "DB : {$_REQUEST['db']} <br>";
            echo "Javascript : {$_REQUEST['js']} <br>";
            echo "Java : {$_REQUEST['java']} <br>";

            $avg = ($_REQUEST['db'] + $_REQUEST['js'] + $_REQUEST['java'])/3;
            echo "평균 : ", round($avg, 1), "<br>";
        ?>
    </body>
</html>
