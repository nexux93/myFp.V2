const vue = new Vue({
    el: '#app',
    data: {
        show: false,
        title: '',
        products: [
            {img: 'https://placehold.it/200x150', quantity: 1, title: 'Notebook', price: 2000},
            {img: 'https://placehold.it/200x150', quantity: 1, title: 'Mouse', price: 20},
            {img: 'https://placehold.it/200x150', quantity: 1, title: 'Keyboard', price: 50},
        ]
    },
    methods:{

    },
    computed: {
        filterList: function () {
            let prod = this.title;
            return this.products.filter(function (elem) {

                if (prod === '') return true;
                else return elem.title.indexOf(prod) > -1;
            })
        }
    },

});