const containerProduct = $('#catalog-item');
const productList = [
    {
        id: 1,
        name: "Бластерная винтовка DC-15A",
        price: "5000",
        category: "Clone_weapon",
        imgBig: "img/Layer_4.jpg",
        imgSmall: "img/card_item.jpg",
        size: "Mid",
        delivery: "free",
        spCartImg: "img/product_item.jpg",
        color: "Blood",
        material: "Steal",
        manufacturer: "Kamino",
        series: "last",
        collection: "Clone Weapon",
        gallery: "img/weapon/DC-15a_Blaster_Rifle.jpg"
    },
    {
        id: 2,
        name: "Ручной бластер DC-17",
        price: "35000",
        category: "Clone_weapon",
        imgBig: "img/Layer_4.jpg",
        imgSmall: "img/card_item.jpg",
        size: "Mid",
        delivery: "free",
        spCartImg: "img/product_item.jpg",
        color: "Blood",
        material: "Steal",
        manufacturer: "Kamino",
        series: "last",
        collection: "Clone Weapon",
        gallery: [
            "img/weapon/DC17HandBlaster-SWI120.jpg"
        ]
    },
    {
        id: 3,
        name: "Бластерная винтовка WESTAR-M5",
        price: "25000",
        category: "Clone_weapon",
        imgBig: "img/Layer_4.jpg",
        imgSmall: "img/card_item.jpg",
        size: "Big",
        delivery: "free",
        spCartImg: "img/product_item.jpg",
        color: "Blood",
        material: "Steal",
        manufacturer: "Kamino",
        series: "last",
        collection: "Clone Weapon",
        gallery: "img/weapon/ARC_blaster.png"
    },
    {
        id: 4,
        name: "Вращающаяся бластерная пушка Z-6",
        price: "85000",
        category: "Clone_weapon",
        imgBig: "img/Layer_4.jpg",
        imgSmall: "img/card_item.jpg",
        size: "Big",
        delivery: "free",
        spCartImg: "img/product_item.jpg",
        color: "Blood",
        material: "Steal",
        manufacturer: "Kamino",
        series: "last",
        collection: "Clone Weapon",
        gallery: "img/weapon/S4biXY7-Ks4.jpg"
    },
    {
        id: 5,
        name: "Модульная оружейная система DC-17m",
        price: "110000",
        category: "Clone_weapon",
        imgBig: "img/Layer_4.jpg",
        imgSmall: "img/card_item.jpg",
        size: "Mid",
        delivery: "free",
        spCartImg: "img/product_item.jpg",
        color: "Blood",
        material: "Steal",
        manufacturer: "Kamino",
        series: "last",
        collection: "Clone Weapon",
        gallery: [
            "img/weapon/DC-17m.jpg",
            "img/weapon/DC-17m_gran.jpg",
            "img/weapon/DC-17m_snip.jpg",
            "img/weapon/DC-17m_vint.jpg"
        ]
    },
    {
        id: "1",
        name: "Бластерная винтовка DC-15A",
        price: "5000",
        category: "Clone_weapon",
        imgBig: "img/Layer_4.jpg",
        imgSmall: "img/card_item.jpg",
        size: "Mid",
        delivery: "free",
        spCartImg: "img/product_item.jpg",
        color: "Blood",
        material: "Steal",
        manufacturer: "Kamino",
        series: "last",
        collection: "Clone Weapon",
        quantity: "1"
    }
];

function Container(id, className, tagName) {
    this.id = id;
    this.className = className;
    this.tagName = tagName;
}

Container.prototype.remove = function() {

};

Container.prototype.render = function() {
    return `<${this.tagName} class="${this.className}" id="${this.id}"></${this.tagName}>`;
};

function Menu(id, className, items) {
    Container.call(this, id, className, 'ul');

    this.items = items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function() {

};

function SuperMenu(id, className, items) {
    Menu.call(id, className, items);
}

// -----------------------------------------------------------

class Container {
    constructor(id, className, tagName) {
        this.id = id;
        this.className = className;
        this.tagName = tagName;
    }

    render() {
        return `<${this.tagName} class="${this.className}" id="${this.id}"></${this.tagName}>`;
    }
}

class Menu extends Container {
    constructor(id, className, items) {
        super(id, className, 'ul');

        this.items = items;
    }

    render() {
        super.render();
    }
}
function Basket(id, className, items) {
    Container.call(this, id, className, items);
    this.items = items;
}

Basket.prototype = Object.create(Container.prototype);

Basket.prototype.render = function() {

};

class Basket extends Container {
    summ() {
        return this.items.reduce((acc, items)=>  acc + items.price, 0);
    };
    render() {

    }
}



/** нужен будет метод удаления
 * метод проверки товара на существование в корзине
 * метод изменения кол-во товара
 * метод добавления товара
 */


