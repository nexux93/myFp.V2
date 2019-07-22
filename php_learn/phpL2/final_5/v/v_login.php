<?php
/**
 * User: Ronzin Nikita (nexux93@yandex.ru)
 * Date: 22.07.2019 : 11:06
 */?>
<h2><?php if(isset($text)){echo $text;}?></h2>
<form method="post">
    <label for="login">
        <input type="text" name="login" placeholder="login">
    </label>
    <label for="password">
        <input type="password" placeholder="password" name="password">
    </label>
</form>
