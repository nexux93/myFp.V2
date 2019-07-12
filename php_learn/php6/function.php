<?php
if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    if (($_GET['x_1'] === '') || ($_GET['x_2'] === '')) {
        return $result = 'Значения не переданы';
    }

    if (empty($_GET['operand'])) {
        return $result = 'Не выбрана операция';
    }

    $arg_1 = (int)$_GET['arg_1'];
    $arg_2 = (int)$_GET['arg_2'];
    $operand = $_GET['operand'];

    switch ($operand) {
        case '/' :
            $result = $arg_1 != 0 ? ($arg_1 / $arg_2) : $result = 'Деление на ноль невозможно';
            break;
        case '*':
            $result = $arg_1 * $arg_2;
            break;
        case '-':
            $result = $arg_1 - $arg_2;
            break;
        case '+':
            $result = $arg_1 + $arg_2;
            break;
        default:
            return $result = 'Операция не возможна';
    }
    return $result;
}