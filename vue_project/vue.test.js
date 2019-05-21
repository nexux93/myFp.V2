const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const vue = new Vue({
    el: '#app',
    data: {
        show: false,
        title: '',
    },
    methods:{
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        },
        console(product){
            console.log(product);
        },

    },

});