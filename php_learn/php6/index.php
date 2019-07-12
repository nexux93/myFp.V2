<?php
require_once __DIR__.'/function.php';
?>

<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<div >
    <form action="" >
        <label for="arg_1">
            <input type="text" name="arg_1" value="<?= $arg_1 ?>">
        </label><br>
        <label for="arg_2">
            <input type="text" name="arg_2" value="<?= $arg_2 ?>">
        </label><br>
        <label for="">
            <input type="text" name="result" value="<?= $result ?>" disabled>
        </label><br>

        <select name="operand">
            <option name="operand" value="" selected>Не делить на 0</option>
            <option name="operand" value="/">/</option>
            <option name="operand" value="*">*</option>
            <option name="operand" value="-">-</option>
            <option name="operand" value="+">+</option>
        </select><br>

        <button type="submit" value="=" name="submit">=</button><br>

        <div>
            <input type="submit" value="/" name="operand">
            <input type="submit" value="*" name="operand">
            <input type="submit" value="-" name="operand">
            <input type="submit" value="+" name="operand">
        </div>
    </form>
</div>
</body>
</html>