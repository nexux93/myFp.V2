<?php
//Файл с функциями нашего движка

function prepareVariables($page)
{

//Для каждой страницы готовим массив со своим набором переменных
//для подстановки их в соотвествующий шаблон
    $params = [];
    switch ($page) {
        case 'index':

            break;
        case 'catalog':

            if ($_POST['load']) {
                // echo "Загружаем файл";
                header("Location: ?page=catalog");
            }

            $params = [
                'catalog' => ["Чай", "Печенье", "Вафли"]
            ];
            break;

        case 'news':
            $params['news'] = getNews();
            break;

        case 'newspage':

            $params['text'] = getNewsContent($_GET['id'])['text'];
            break;
    }
    return $params;
}

function getNewsContent($id) {
    $id = (int)$id;
    $sql = "SELECT * FROM news WHERE id = {$id}";
    $news = getAssocResult($sql);
    $result = [];
    if(isset($news[0]))
        $result = $news[0];
     return $result;

}

function getNews()
{
    $sql = "SELECT * FROM `news` WHERE 1";
    $news = getAssocResult($sql);
    //var_dump($news);
    return $news;
}


//Функция, возвращает текст шаблона $page с подстановкой переменных
//из массива $params, содержимое шабона $page подставляется в
//переменную $content главного шаблона layout для всех страниц
function render($page, array $params = [])
{
    $content = renderTemlate(LAYOUTS_DIR . 'main', [
        'content' => renderTemlate($page, $params),
        'menu' => 'Меню<br>'
    ]);
    return $content;
}

//Функция возвращает текст шаблона $page с подставленными переменными из
//массива $params, просто текст
function renderTemlate($page, array $param = [])
{
    ob_start();

    if (!is_null($param)) {
        extract($param);
    }


    $fileName = TEMPLATES_DIR . $page . ".php";


    if (file_exists($fileName)) {
        include $fileName;
    } else {
        Die("Страницы {$fileName} не существует.");
    }


    return ob_get_clean();
}
