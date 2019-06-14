<?php
$a = 5;
$b = '05';
var_dump($a == $b);         // Почему true?
var_dump((int)'012345');     // Почему 12345?
var_dump((float)123.0 === (int)123.0); // Почему false?
var_dump((int)0 === (int)'hello, world'); // Почему true?

/**
 * 1е. при сравнивании типов (гибком сравнении) приравнивается строка к числу
 * 2е. преобразование строки к числу
 * 3е. разные типы, будут плавающий тип и число
 * 4е. строка приравнивается к 0
 */

$a = 1;
$b = 2;

$a++;
$b--;

$title = 'Главная страница - страница обо мне';
$h1 = 'Информация обо мне';
$p = 'Краткая биография обо мне
Родился в 1985 году в городе Москва. Закончил в 2008 году МАИ.
На данный момент работаю ведущим инженером в крупной авиакомпании.
Поскольку я люблю авиацию, то хотел бы поделиться несколькими интересными 
фотографиями на эту тему';
$pict = 'https://blzmedia-a.akamaihd.net/d3/icons/items/large/p3_unique_shoulder_102_demonhunter_male.png';