const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 34},
    {id: 4, title: 'Gamepad', price: 56},
    {id: 5, title: 'Chair', price: 120},
];

let prices = 0;

const renderProduct = (title, price) => {
    return `
<div class="item_block">
    <div class="block_add">
        <div class="add_item"><span class="block_add_hover_text">Add to cart<img alt="" src="img/add_img.svg"></span>
        </div>
    </div>
    <div class="item_img"><img alt="" src="../../img/Layer_4.jpg"></div>
    <span class="item_text">${title}</span><span class="item_text item_span">$ ${price}</span></div>`

};

const renderPage = list => {
    const productList = list.map(item => renderProduct(item.title, item.price), ':');
    document.querySelector('.products').innerHTML = productList;
};

const renderTotal = product => {
    product.forEach(function (productItem) {
        prices += productItem.price;
    });
    document.querySelector('.total').innerHTML = `<div>$ ${ prices }</div>`;
};

// const totalPrice = () => {
//
// };
/**
 * запятая появляется после прохода map по элементу массива, как убрать не нашёл
 */
renderPage(products);
renderTotal(products);

class ProductItem {

}

class Basket {

}

/**
 * Для элемента товар:
 * this.title; this.price;
 * this.category;
 *
 * method - вывести товар в шаблоне, проверить на складе
 *
 * Для элемента Basket:
 * extend ProductItem
 *
 * method - удалить товар, увеличить колличество товара, уменьшить колличество товара, добавить товар
 *
 */