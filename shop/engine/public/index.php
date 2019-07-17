<?php

include '../config/config.php';

if (isset($_GET['page'])) {
    $page = $_GET['page'];
} else {
    $page = 'index';
}
$params = prepareVariables($page);

echo render($page, $params);