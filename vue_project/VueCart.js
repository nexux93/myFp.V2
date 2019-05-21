Vue.component('cart', {
    data() {
        return {
            show: false,
            // cart_length: '',
            cartUrl: '/getBasket.json',
            cart_items: [],
            deliteUrl: '/deleteFromBasket.json'
        }
    },
    methods: {
        addToBasket(product) {
            this.$parent.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result) {
                        let find = this.cart_items.find(el => el.id === product.id);
                        console.log('Функция добавления товара сработала');
                        if (find) {
                            find.quantity++;
                        } else {
                            let prod = Object.assign({quantity: 1}, product);
                            this.cart_items.push(prod);
                        }
                    }
                })
        },
        removeItem(product) {
            this.$parent.getJson(`${API + this.deliteUrl}`)
                .then(data => {
                    if (data.result) {
                        if (product.quantity > 1) {
                            product.quantity--;
                        } else {
                            this.cart_items.splice(this.cart_items.indexOf(product), 1);
                        }
                    }
                })
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.cart_items.push(el)
                }
            });
    },
    template: `<div> <img src="../img/Forma_1.svg" @click.self="show = !show" alt="">
                    <div class="number">{{cart_items.length}}</div>
<div class="card_product" v-show="show">
<span v-if="!cart_items.length" class="card_empty">Cart is empty</span>
<cart_prod 
v-for="cart_item of cart_items"
:key="cart_item.id"
:cart_item="cart_item"
@removeItem="removeItem"></cart_prod>
                    <div class="card_product__totalPrice">
                        <span>TOTAL</span>
                        <span></span>
                    </div> 
                        <a href="../checkout.html" class="card_product__checkout pink_button_hover">checkout</a>
                        <a href="../Shopping_Cart.html" class="card_product__toCard btn_empty_grey empty_hover_button">Go to cart</a>
                </div>
                </div>`,
});
Vue.component('cart_prod', {
    props: ["cart_item"],
    template: `<div><div class="card_product__item card_item">
    <div class="card_item__img">
        <img alt="" src="../img/card_item.jpg">
    </div>
    <div class="card_item__desc card_desc">
        <div class="card_desc__name">{{cart_item.name}}</div>
        <div class="card_desc__respect">
            <img alt="" src="../img/stars_respect.jpg">
        </div>
        <div class="card_desc__price">
            <span class="card_desc__count" id="">{{cart_item.quantity}} x</span> 
            <span class="card_desc__summ">{{cart_item.quantity*cart_item.price}}</span>
        </div>
    </div>
    <div class="card_item__delete">
    <i class="fas fa-times-circle" @click="$emit('removeItem', cart_item)"></i>
    </div>
      
</div>
<div class="card_separator"></div>
</div>`,
});