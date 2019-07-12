/**
 * первое задание
 * @type {RegExp}
 */
let sbh = /'/g;
let text = "ksegs's's 's's''s'df 'se'f' dsf'e f'f's' df";

console.log(text.replace(sbh, '"'));

/**
 * второе задание
 */

let shb2 = /\w+'[^'t]/g;
let text2 = "snfsn' 'ff  sf' sf s'' s'd ' d'ddd'd's 'as''s''t";

console.log(text2.replace(shb2, '"'));

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

class Item {
    constructor(price, name, imgBig, imgSmall) {
        this.price = price;
        this.name = name;
        this.imgBig = imgBig;
        this.imgSmall = imgSmall;
    }

    render() {
    }
}

class ItemList {
    
}
