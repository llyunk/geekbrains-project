Vue.component('cart-block', {
    data() {
        return {
            imgCart: 'https://placehold.it/50x100',
            cartUrl: '/getBasket.json',
            cartItems: [],
            showCart: false,
            cartAPI: this.$root.$refs.headerc.$refs.cart,
        }
    },
    methods: {
        addProduct(product) {
            this.$root.$refs.headerc.$refs.cart.addProduct(product);
        },
        remove(item) {
            this.$root.$refs.headerc.$refs.cart.remove(item);
        },
        total() {
            let sum = 0;
            for (let el in this.cartItems) {
                sum += el.price * el.quantity;
            }
            return sum;
        },
        clear() {
            this.$root.$refs.headerc.$refs.cart.cartItems = [];
            this.$root.$refs.headerc.$refs.cart.total = 0;
            this.cartItems = this.$root.$refs.headerc.$refs.cart.cartItems;
            
        }
    },
    mounted() {
        this.cartItems = this.$root.$refs.headerc.$refs.cart.cartItems;
    },
    template: `
        <div class="center" v-if="$root.$refs.headerc.$refs.cart.cartBlockVisible">
            <div class="cart__top">
                <div class="cart__top__titles">
                    <div class="cart__top__left">
                        <h3 class="cart__top__h3">Product Details</h3>
                    </div>
                    <div class="cart__top__right">
                        <div class="cart__top__right__point">
                            <h3 class="cart__top__h3">unite Price</h3>
                        </div>
                        <div class="cart__top__right__point">
                            <h3 class="cart__top__h3">Quantity</h3>
                        </div>
                        <div class="cart__top__right__point">
                            <h3 class="cart__top__h3">shipping</h3>
                        </div>
                        <div class="cart__top__right__point">
                            <h3 class="cart__top__h3">Subtotal</h3>
                        </div>
                        <div class="cart__top__right__point">
                            <h3 class="cart__top__h3">ACTION</h3>
                        </div>
                    </div>
                </div>
                <cart-block-item class="cart__top__product"
                            v-for="item of cartItems" 
                            :key="item.id_product"
                            :cart-item="item" 
                            :img="imgCart"
                            @remove="remove">
                            </cart-block-item>
            </div>
            
            <div class="cart__bottom">
                <div class="cart__top__buttons">
                    <button class="cart__top__buttons__button" @click="clear">cLEAR SHOPPING CART</button>
                    <button class="cart__top__buttons__button" @click="$root.$refs.headerc.$refs.cart.cartBlockVisible = false;">cONTINUE sHOPPING</button>
                </div>
                <div class="cart__bottom__form">
                    <article class="cart__bottom__article">
                        <h2 class="cart__bottom__h2">Shipping Address</h2>
                        <input type="text" class="cart__bottom__input" placeholder="Bangladesh">
                        <input type="text" class="cart__bottom__input" placeholder="State">
                        <input type="text" class="cart__bottom__input" placeholder="Postcode / Zip">
                        <button class="cart__bottom__button">get a quote</button>
                    </article>
                    <article class="cart__bottom__article">
                        <h2 class="cart__bottom__h2">Shipping Address</h2>
                        <p class="cart__bottom__p">Enter your coupon code if you have one</p>
                        <input type="text" class="cart__bottom__input" placeholder="State">
                        <button class="cart__bottom__button">apply coupon</button>
                    </article>
                    <article class="cart__bottom__article cart__bottom__total">
                        <div class="cart__bottom__total__text">
                            <p class="cart__bottom__total__p">Sub total&nbsp;&nbsp;&nbsp;&nbsp;{{this.$root.$refs.headerc.$refs.cart.total}}</p>
                            <h2 class="cart__bottom__total__h2">GRAND TOTAL&nbsp;&nbsp;&nbsp;&nbsp;<span class="pink">$ {{this.$root.$refs.headerc.$refs.cart.total}}</span></h2>
                        </div>
                        <button class="cart__bottom__total__button">proceed to checkout</button>
                    </article>
                </div>
            </div>
        </div>`
});

Vue.component('cart-block-item', {
    props: ['cartItem'],
    template: `
        <div class="cart__top__product">
            <div class="cart__top__left">
                <img src="img/cart11.jpg" alt="product">
                <div class="cart__top__product__text">
                    <a href="product_page.html" class="cart__top__product__text__h2">{{cartItem.product_name}}</a>
                    <p class="cart__top__product__text__color"><span class="cart__top__product__text__bold">Color: </span>Red</p>
                    <p class="cart__top__product__text__size"><span class="cart__top__product__text__bold">Size: </span>Xll</p>
                </div>
            </div>
            <div class="cart__top__right">
                <div class="cart__top__right__point">
                    <p class="cart__top__product__p">$ {{cartItem.price}}</p>
                </div>
                <div class="cart__top__right__point">
                    <input type="number" class="cart__top__product__input" :placeholder="cartItem.quantity">
                </div>
                <div class="cart__top__right__point">
                    <p class="cart__top__product__p">FREE</p>
                </div>
                <div class="cart__top__right__point">
                    <p class="cart__top__product__p">$ {{cartItem.price * cartItem.quantity}}</p>
                </div>
                <div class="cart__top__right__point">
                    <a href="#" class="cart__top__product__a" @click="$emit('remove', cartItem)"><img src="img/delete.jpg" alt="delete"></a>
                </div>
            </div>
        </div>
    `
});