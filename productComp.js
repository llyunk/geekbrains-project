Vue.component('products', {
    data(){
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filtered: [],
            imgCatalog: 'https://placehold.it/200x150',
        }
    },
    methods: {
        filter(){
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
    <div class="center" v-if="!$root.$refs.headerc.$refs.cart.cartBlockVisible">
        <div class="promo center">
            <div class="promo__content">
                <h1 class="promo__h1">THE BRAND</h1>
                <h2 class="promo__h2">OF LUXERIOUS <span class="fashion">FASHION</span></h2>
            </div>
        </div>
    <div class="offers center">
        <div class="offers__left">
            <div class="block1">
                <a href="#">
                    <div class="text__offer">
                        <h1 class="offer__h1">HOT DEAL</h1>
                        <h2 class="offer__h2">FOR MEN</h2>
                    </div>
                </a>
            </div>
            <div class="block2">
                <a href="#">
                    <div class="text__offer">
                        <h1 class="offer__h1">LUXIROUS &amp; trendy</h1>
                        <h2 class="offer__h2">ACCESORIES</h2>
                    </div>
                </a>
            </div>
        </div>
        <div class="offers__right">
            <div class="block3">
                <a href="#">
                    <div class="text__offer">
                        <h1 class="offer__h1">30% offer</h1>
                        <h2 class="offer__h2">women</h2>
                    </div>
                </a>
            </div>
            <div class="block4">
                <a href="#">
                    <div class="text__offer">
                        <h1 class="offer__h1">new arrivals</h1>
                        <h2 class="offer__h2">FOR kids</h2>
                    </div>
                </a>
            </div>
        </div>
    </div>
        <div class="items__head center">
            <h1 class="items__head__h1">Fetured Items</h1>
            <h2 class="items__head__h2">Shop for items based on what we featured in this week</h2>
        </div>
        <div class="items center">
            <product v-for="item of filtered" :key="item.id_product" :img="imgCatalog" :product="item"></product>
        </div>
        <div class="browse__all__product center">
            <a href="" class="button">Browse All Product</a>
        </div>
    </div>
    `
});
Vue.component('product', {
    props: ['product', 'img'],
    data() {
      return {
          cartAPI: this.$root.$refs.headerc.$refs.cart,
      };
    },

    template: `
        <div class="itemin">
            <a href="#"><img class="itemin__img" src="img/Layer_2.jpg" alt="img"></a>
            <a href="#"><h1 class="itemin__h1">{{product.product_name}}</h1></a>
            <h2 class="itemin__h2">{{product.price}}₽</h2>
            <a href="#" class="itemin__add" @click="cartAPI.addProduct(product)">Add to Cart</a>
        </div>
    `
});