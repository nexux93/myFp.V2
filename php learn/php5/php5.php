<?php
$mySql = mysqli_connect("localhost", "root", "", "image_base");
if ((bool)$mySql) :
    $dir = 'img/';
    $imgList = array_slice(scandir($dir), 2);

    foreach ($imgList as $img):

        $result = $mySql->query("SELECT * FROM image_list WHERE name LIKE '{$img}'");

        if ($result->num_rows > 0):

            echo 'есть совпадения в image_list<br>';

        else:

            $sql = "INSERT INTO image_list (name, view) VALUES ('{$img}', '0')";

            if (mysqli_query($mySql, $sql)):

                echo "New record created successfully<br>";

            else:

                echo "Error: " . $sql . "<br>" . mysqli_error($mySql);

            endif;
        endif;

        $result = $mySql->query("SELECT * FROM image_info WHERE name LIKE '{$img}'");

        if ($result->num_rows > 0):

            echo 'есть совпадения в image_info<br>';

        else:

            $fileSize = filesize($dir . $img);
            $sql = "INSERT INTO image_info (name, size, dir) VALUES ('{$img}', '{$fileSize}', '{$dir}')";

            if (mysqli_query($mySql, $sql)):

                echo "New record created successfully<br>";

            else:
                echo "Error: " . $sql . "<br>" . mysqli_error($mySql);
            endif;
        endif;
    endforeach;
    $imgFromDB = mysqli_query($mySql, "SELECT * FROM image_list");
    ?>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <div class="container">
        <?php
        while ($item = mysqli_fetch_assoc($imgFromDB)):
            echo "<a href='single_image.php?idIm={$item['idIm']}'>
<img alt='{$item['name']}' src='{$dir}/{$item['name']}' class='small_img'/>
</a>";
        endwhile;
        ?>
    </div>
    </body>
    </html>

    <?
    mysqli_close($mySql);

else:
    echo "Соединение с базой не состоялось" . mysqli_connect_error();
    die();
endif;
?>
