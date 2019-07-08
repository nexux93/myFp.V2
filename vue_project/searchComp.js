Vue.component('search', {
    props: ['products'],
    data() {
        return {
            search_input: '',
        }

    },
    // computed: {
    //     filterList: function () {
    //         let prod = this.search_input;
    //         return this.products.filter(function (elem) {
    //
    //             if (prod === '') return true;
    //             else return elem.search_input.indexOf(prod) > -1;
    //         })
    //     },
    //
    // },
    methods: {
        searchElem() {
            console.log(products);
        }
    },
    template: `  <div class="flex">
                   <input type="search" class="search_input" v-model="search_input" placeholder="Search for Item...">
                   <div class="search_drop" v-show="search_input">
                       <ul>
<!--                                                       <li v-for="products in filterList">-->
<!--                                                           {{ products.name }} - -->
<!--                                                           {{ products.price }}$-->
<!--                                                       </li>-->
                       </ul>
                   </div>
                   <a href="#">
                       <div class="search_btn" @click="searchElem">
                           <img src="../img/search-button.png" alt="">
                       </div>
                   </a>
                  </div>`,

});