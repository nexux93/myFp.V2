<?php
/**
 * Основной шаблон
 * ===============
 * $title - заголовок
 * $content - HTML страницы
 */
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="ru">
<head>
	<title><?=$title?></title>
	<meta content="text/html; charset=UTF-8" http-equiv="content-type">
	<link rel="stylesheet" type="text/css" media="screen" href="v/style.css" /> 	
</head>
<body>
	<div id="header">
		<h1><?=$title?></h1>
        <a href="index.php?c=user&act=reg">Регистрация</a>
	</div>
	
	<div id="menu">
		<a href="index.php">Читать текст</a> |
		<a href="index.php?c=page&act=edit">Редактировать текст</a>
	</div>
	
	<div id="content">
		<?=$content?>
	</div>
	
	<div id="footer">
		Все права защищены. Адрес. Телефон.
	</div>
</body>
</html>
