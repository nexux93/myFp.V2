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

const productTemplate = ({name, price}) => '<div class="item_block"><div class="block_add"> <div class="add_item"> <span class="block_add_hover_text">Add to cart <img alt="" src= "img/add_img.svg"> </span> </div> </div> <div class="item_img"> <img alt="" src="img/Layer_4.jpg"> </div> <span class="item_text"></span> <span class="item_text item_span">${price}</span> </div>';

const renderProduct = items => {
  let productHtml = items.map(productTemplate);

  document.querySelector('#catalog-item').innerHTML = productHtml; // не срабатывает шаблон
};

renderProduct(productList);
