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

/**
 * первая функция создаёт Класс контейнер, задаёт ему параметры
 * затем через Container.prototype мы создаём в протатиме функцию которую потом можно будет наследовать
 * для переопределения функции прототипа, вроде функции render, нужно сначала ее наследовать
 */

// SOLID, KISS, DRY
// 1. РРЅРєР°РїСЃСѓР»СЏС†РёСЏ (СЃРѕРєСЂС‹С‚РёРµ СЂРµР°Р»РёР·Р°С†РёРё)
// 2. РќР°СЃР»РµРґРѕРІР°РЅРёРµ
// 3. РџРѕР»РёРјРѕСЂС„РёР·Рј
// 4. РђР±СЃС‚СЂР°РєС†РёСЏ (*)

function Container(id, className, tagName) {
    this.id = id;
    this.className = className;
    this.tagName = tagName;
}

Container.prototype.remove = function () {

};

Container.prototype.getDb = function (url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url); // настройка запроса
    xhr.send();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            callback(JSON.parse(xhr.responseText));
        }
    }
};

Container.prototype.render = function () {
    return `<${this.tagName} class="${this.className}" id="${this.id}"></${this.tagName}>`;
};

function Menu(id, className, items) {
    Container.call(this, id, className, 'ul');

    this.items = items;
}

Menu.prototype = Object.create(Container.prototype);
Menu.prototype.render = function () {

};

function SuperMenu(id, className, items) {
    Menu.call(id, className, items);
}

// -----------------------------------------------------------
// синтаксис es6

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

function Basket(product) {
    this.product = product;
}

Basket.prototype = Object.create(Container.prototype);

class Basket {
    render() {
     return ``;
    }
}
