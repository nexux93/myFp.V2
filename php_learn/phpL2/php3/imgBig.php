<?php

// подгружаем и активируем авто-загрузчик Twig-а
require_once 'Twig/Autoloader.php';
Twig_Autoloader::register();

try {
    // указывае где хранятся шаблоны
    $loader = new Twig_Loader_Filesystem('tmp');

    // инициализируем Twig
    $twig = new Twig_Environment($loader);

    // подгружаем шаблон
    $template = $twig->loadTemplate('imgPage.twig');

    // передаём в шаблон переменные и значения
    // выводим сформированное содержание

    $imgArray = array(
        'image' => array(
            '1' => 'img/2XEacQn.jpg',
            '2' => 'img/4qlhGAP.jpg',
            '3' => 'img/70887.jpg',
            '4' => 'img/639624.jpg',
            '5' => 'img/673403.jpg',
            '6' => 'img/BWZMVcu.jpg',
            '7' => 'img/CsJElar.jpg',
            '8' => 'img/qHdLy8E.jpg',
            '9' => 'img/thumb-1920-51789.jpg'
        )
    );

    $id = (int)$_GET["id"];

    $image = $imgArray['image'][$id];
    $content = $template->render(
        array(
            'bigImg' => $image,
        )
    );
    echo $content;

} catch (Exception $e) {
    die ('ERROR: ' . $e->getMessage());
}