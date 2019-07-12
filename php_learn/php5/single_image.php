<?php

$dir = 'img/';
$mySql = mysqli_connect("localhost", "root", "", "image_base");
if ((bool)$mySql) :
    $idIm = (int)$_GET["idIm"];

    $singleImgFromDb = mysqli_query($mySql, "SELECT * FROM image_list WHERE idIm={$idIm}");
    if ((bool)$singleImgFromDb):
        $singleImgArray = mysqli_fetch_assoc($singleImgFromDb); ?>

        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="">
            <title>Document</title>
        </head>
        <body>
        <img src='<?= $dir.$singleImgArray['name'] ?>' alt="<?= $singleImgArray['name'] ?>">
        </body>
        </html>
    <? else:
        echo 'Изображение не найдено';
    endif;
else:
    echo "Соединение с базой не состоялось" . mysqli_connect_error();
    die();
endif;