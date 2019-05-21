Vue.component('catalog', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [{
                "id": 1,
                "name": "Бластерная винтовка DC-15A",
                "price": "5000",
                "category": "Clone_weapon",
                "imgBig": "../img/Layer_4.jpg",
                "imgSmall": "../img/card_item.jpg",
                "size": "Mid",
                "delivery": "free",
                "spCartImg": "../img/product_item.jpg",
                "color": "Blood",
                "material": "Steal",
                "manufacturer": "Kamino",
                "series": "last",
                "collection": "Clone Weapon",
            },
                {
                    "id": 2,
                    "name": "Ручной бластер DC-17",
                    "price": "35000",
                    "category": "Clone_weapon",
                    "imgBig": "../img/Layer_4.jpg",
                    "imgSmall": "../img/card_item.jpg",
                    "size": "Mid",
                    "delivery": "free",
                    "spCartImg": "../img/product_item.jpg",
                    "color": "Blood",
                    "material": "Steal",
                    "manufacturer": "Kamino",
                    "series": "last",
                    "collection": "Clone Weapon",

                },
                {
                    "id": 3,
                    "name": "Бластерная винтовка WESTAR-M5",
                    "price": "25000",
                    "category": "Clone_weapon",
                    "imgBig": "../img/Layer_4.jpg",
                    "imgSmall": "../img/card_item.jpg",
                    "size": "Big",
                    "delivery": "free",
                    "spCartImg": "../img/product_item.jpg",
                    "color": "Blood",
                    "material": "Steal",
                    "manufacturer": "Kamino",
                    "series": "last",
                    "collection": "Clone Weapon",
                },
                {
                    "id": 4,
                    "name": "Вращающаяся бластерная пушка Z-6",
                    "price": "85000",
                    "category": "Clone_weapon",
                    "imgBig": "../img/Layer_4.jpg",
                    "imgSmall": "../img/card_item.jpg",
                    "size": "Big",
                    "delivery": "free",
                    "spCartImg": "../img/product_item.jpg",
                    "color": "Blood",
                    "material": "Steal",
                    "manufacturer": "Kamino",
                    "series": "last",
                    "collection": "Clone Weapon",

                },
                {
                    "id": 5,
                    "name": "Модульная оружейная система DC-17m",
                    "price": "110000",
                    "category": "Clone_weapon",
                    "imgBig": "../img/Layer_4.jpg",
                    "imgSmall": "../img/card_item.jpg",
                    "size": "Mid",
                    "delivery": "free",
                    "spCartImg": "../img/product_item.jpg",
                    "color": "Blood",
                    "material": "Steal",
                    "manufacturer": "Kamino",
                    "series": "last",
                    "collection": "Clone Weapon",

                }],
            imgCatalog: 'https://placehold.it/200x150',
        }
    },
    mounted() {
        // this.$parent.getJson(`${API + this.catalogUrl}`)
        //     .then(data => {
        //         for (let el of data) {
        //             this.products.push(el);
        //             this.filtered.push(el);
        //         }
        //     });
        // this.$parent.getJson(`getProducts.json`)
        //     .then(data => {
        //         for (let el of data) {
        //             this.products.push(el);
        //             this.filtered.push(el);
        //         }
        //     })
    },
    template: `<div class="row-item" id="catalog-item">
<catalog_item v-for="product of products"
:product="product"
:key="product.id">
</catalog_item>
</div>`,
});
Vue.component('catalog_item', {
    props: ['product', 'imgCatalog'],
    template: `<div class="item_block">
    <div class="block_add">
        <div class="add_item">
        <span class="block_add_hover_text" @click="$root.$refs.cart.addToBasket(product)">Add to cart
        <img alt="" src="../img/add_img.svg">
        </span>
        </div>
    </div>
    <div class="item_img">
    <img alt="" v-bind:src="product.imgBig">
    </div>
    <span class="item_text">{{product.name}}</span>
    <span class="item_text item_span">$ {{product.price}}</span>
    </div>`,
});