Vue.component('cart', {
    data() {
        return {
            imgCart: 'https://placehold.it/50x100',
            cartUrl: '/getBasket.json',
            cartItems: [],
            isCartVisible: false,
            total: 0,
            cartBlockVisible: false,
        }
    },
    methods: {
        addProduct(product) {
            this.$root.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            let prod = Object.assign({quantity: 1}, product);
                            this.cartItems.push(prod)
                        }
                        let sum = 0;
                        for (let el of this.cartItems) {
                            sum += el.price * el.quantity;

                        }
                        console.log(this.cartItems);
                        console.log(sum);
                        this.total = sum;
                    } else {
                        alert('Error');
                    }
                })
        },
        remove(item) {
            this.$root.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1)
                        }
                        let sum = 0;
                        for (let el of this.cartItems) {
                            sum += el.price * el.quantity;
                            console.log(sum);
                        }
                        console.log(sum);
                        this.total = sum;
                    }
                })
        },
    },
    mounted() {
        this.$root.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
            let sum = 0;
            for (let el of this.cartItems) {
                sum += el.price * el.quantity;
                console.log(sum);
            }
            console.log(this.cartItems);
            console.log(sum);
            this.total = sum;
            });
    },
    template: `<div><a href="#" @click="isCartVisible=!isCartVisible"><img src="img/cart.png" alt="cart"></a>
                
                   <div class="drop__drop" v-show="isCartVisible">
                    <div class="drop__flex">
                        <div>
                            <cart-item class="cart-item" 
                            v-for="item of cartItems" 
                            :key="item.id_product"
                            :cart-item="item" 
                            :img="imgCart"
                            @remove="remove">
                            </cart-item>
                        </div>
                        <div class="drop__total">
                            <p class="drop__total__p">TOTAL</p>
                            <p class="drop__total__p">{{this.total}}</p>
                        </div>
                        <a href="#"><button class="drop__button__checkout">Checkout</button></a>
                        <a href="#" @click="cartBlockVisible = true"><button class="drop__button__go-to-cart">Go to cart</button></a>
                        
                    </div>
                </div>
</div>`
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `             <div class="drop__cart__li">
                                <div class="drop__cart__product">
                                    <img src="img/cart1.jpg" alt="product" class="drop__cart__product__img">
                                    <div class="drop__cart__product__content">
                                        <h3 class="drop__cart__product__name">{{cartItem.product_name}}</h3>
                                        <h4 class="drop__cart__product__price">{{cartItem.quantity}} x $ {{cartItem.price}}</h4>
                                    </div>
                                    <a href="#" class="drop__cart__product__delete" @click="$emit('remove', cartItem)"><img src="img/delete.jpg"
                                                                                         alt="delete"></a>
                                </div>
                            </div>`
});