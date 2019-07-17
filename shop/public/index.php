<?php include_once "../controllers/Product.php"; ?>
<? include "../templates/menu.php"; ?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Catalog</title>

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


</head>
<body>
<main>
    <div class='goodsTable'>
        <?php
        if (isset($goods))
            foreach ($goods as $key => $good) :
                if ($key < 4):
                    ?>
                    <div class='goodsWrap'>
                        <?php if ($good['discount'] > 0) {
                            echo('<div class="sticker"><img class="stickerImg" src="/public/css/star.png"><span class="stickerTextFit">' . $good['discount'] . '%</span></div>');
                        } elseif ($good['stickerFit'] == 1) {
                            echo('<div class="sticker"><img class="stickerImg" src="/public/css/star.png"><span class="stickerTextFit">Fit!</span></div>');
                        } elseif ($good['stickerHit'] == 1) {
                            echo('<div class="sticker"><img class="stickerImg" src="/public/css/star.png"><span class="stickerTextHit">Hit!</span></div>');
                        }; ?>
                        <div class="wrapGoodImg">
                            <a href="item.php?photo=<?= $good['bigPhoto'] ?>&id=<?= $good['id'] ?>">
                                <img class='goodImg' src="<?= $good['miniPhoto'] ?>">
                            </a>
                        </div>
                        <div class="wrapGoodInfo">
                            <div class='goodsNameFull'><?= $good['nameFull']; ?></div>
                            <div class='goodsPrice'><?= $good['price'] ?><b>&#8381;</b></div>
                            <div class='goodsParam'>
                            <span>
                                <b>Состав: </b>
                            </span>
                                <?= $good['param'] ?>
                            </div>
                        </div>
                        <div class="btnWrap">
                            <input type='button' class='addToBasket btn' value='Дoбавить в корзину'>
                            <input type='button' class='deleteToBasket btn' value='Удалить из корзины'>
                        </div>
                    </div>
                <? endif; ?>
            <? endforeach; ?>
        <input type='button' id="showMore" data-count-show="5" data-count-add="4" class='addToBasket btn' value='показать ещё'>
    </div>


    <footer>
        <? include "../templates/footer.php"; ?>

    </footer>
    <script src="../js/jquery.js"></script>
    <script src='../js/my.js' defer></script>
</main>
</body>
</html>