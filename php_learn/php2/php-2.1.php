<?php

$a = 1;
$b = 2;
$result = 0;
function calc($val1, $val2)
{
    if ($val1 >= 0 && $val2 >= 0) {
        echo $val1 - $val2;
    } elseif ($val1 <= 0 && $val2 <= 0) {
        echo $val1 * $val2;
    } elseif ($val1 < 0 && $val2 > 0 || $val1 > 0 && $val2 < 0) {
        echo $val1 + $val2;
    } else {
        echo 'недопустимые значения';
    }
}

;

$aa = rand(0, 15);

switch ($aa) {
    case 0:
        echo 0;

    case 1:
        echo 1;

    case 2:
        echo 2;

    case 3:
        echo 3;

    case 4:
        echo 4;

    case 5:
        echo 5;

    case 6:
        echo 6;

    case 7:
        echo 7;

    case 8:
        echo 8;

    case 9:
        echo 9;

    case 10:
        echo 10;

    case 11:
        echo 11;

    case 12:
        echo 12;

    case 13:
        echo 13;

    case 14:
        echo 14;

    case 15:
        echo 15;
}

function sum($val1, $val2)
{
    return $val1 + $val2;
}

function multiplication($val1, $val2)
{
    return $val1 * $val2;
}

function division($val1, $val2)
{
    if ($val2 == 0) {
        echo 'деление на ноль невозможно';
    } else {
        return $val1 / $val2;
    }
    return $val1 / $val2;
}

function subtraction($val1, $val2)
{
    return $val1 - $val2;
}

function ($val1, $val2, $operation)
{
    $result = 0;
    switch ($operation) {
        case '*':
            $result = multiplication($val1, $val2);
            return $result;
            break;
        case '+':
            $result = sum($val1, $val2);
            return $result;
            break;
        case '/':
            $result = division($val1, $val2);
            return $result;
            break;
        case '-':
            $result = subtraction($val1, $val2);
            return $result;
            break;
    }
    return $result;
}
