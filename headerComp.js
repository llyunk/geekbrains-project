Vue.component('headerc', {
    props: ['cartItems', 'img', 'visibility'],
    data() {
    return {
      name: 'Frodo'
    }
  },
    template: `<div><div class="header center">
        <div class="header__left">
            <a href="index.html" class="logo"><img class="logo__img" src="img/18.png" alt="logo">BRAN<span class="last-letter">D</span></a>
            <form class="header__form" action="#">
                <details class="header__browse">
                    <summary class="header__summary">Browse</summary>
                    <div class="drop">
                        <div class="drop__flex">
                            <h3 class="drop__h3">Women</h3>
                            <ul class="drop__ul">
                                <li><a href="#" class="drop__link">Dresses</a></li>
                                <li><a href="#" class="drop__link">Tops</a></li>
                                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                                <li><a href="#" class="drop__link">Blazers</a></li>
                                <li><a href="#" class="drop__link">Denim</a></li>
                                <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                                <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                <li><a href="#" class="drop__link">Accessories</a></li>
                            </ul>
                        </div>
                    </div>
                </details>
                <input type="text" class="header__input" placeholder="Search for Item...">
                <button class="header__button"><img src="img/lupe.jpg" alt="lupe"></button>
            </form>
        </div>
        <div class="header__right">
            <div class="header__cart">
               <cart class="drop__ul" ref="cart"></cart>
            </div>
            <a href="" class="button">My Account</a>
        </div>
    </div>
    <div class="nav center">
        <ul class="menu">
            <li class="menu__list"><a class="menu__link" href="index.html" @click="$root.$refs.headerc.$refs.cart.cartBlockVisible = false;">Home </a></li>
            <li class="menu__list">
                <a class="menu__link" href="#" @click="$root.$refs.headerc.$refs.cart.cartBlockVisible = false;">Man </a>
                <div class="drop">
                    <div class="drop__flex">
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                            <li><a href="#" class="drop__link">Blazers</a></li>
                            <li><a href="#" class="drop__link">Denim</a></li>
                            <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                            <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                            <li><a href="#" class="drop__link">Accessories</a></li>
                        </ul>
                    </div>
                    <div class="drop__flex">
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                        </ul>
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="menu__list">
                <a class="menu__link" href="#" @click="$root.$refs.headerc.$refs.cart.cartBlockVisible = false;">Women </a>
                <div class="drop">
                    <div class="drop__flex">
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                            <li><a href="#" class="drop__link">Blazers</a></li>
                            <li><a href="#" class="drop__link">Denim</a></li>
                            <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                            <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                            <li><a href="#" class="drop__link">Accessories</a></li>
                        </ul>
                    </div>
                    <div class="drop__flex">
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                        </ul>
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="menu__list">
                <a class="menu__link" href="#" @click="$root.$refs.headerc.$refs.cart.cartBlockVisible = false;">Kids </a>
                <div class="drop">
                    <div class="drop__flex">
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                            <li><a href="#" class="drop__link">Blazers</a></li>
                            <li><a href="#" class="drop__link">Denim</a></li>
                            <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                            <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                            <li><a href="#" class="drop__link">Accessories</a></li>
                        </ul>
                    </div>
                    <div class="drop__flex">
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                        </ul>
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="menu__list">
                <a class="menu__link" href="#" @click="$root.$refs.headerc.$refs.cart.cartBlockVisible = false;">Accoseriese </a>
                <div class="drop">
                    <div class="drop__flex">
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                            <li><a href="#" class="drop__link">Blazers</a></li>
                            <li><a href="#" class="drop__link">Denim</a></li>
                            <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                            <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                            <li><a href="#" class="drop__link">Accessories</a></li>
                        </ul>
                    </div>
                    <div class="drop__flex">
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                        </ul>
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="menu__list">
                <a class="menu__link" href="#" @click="$root.$refs.headerc.$refs.cart.cartBlockVisible = false;">Featured </a>
                <div class="drop drop_last">
                    <div class="drop__flex">
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                            <li><a href="#" class="drop__link">Blazers</a></li>
                            <li><a href="#" class="drop__link">Denim</a></li>
                            <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                            <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                            <li><a href="#" class="drop__link">Accessories</a></li>
                        </ul>
                    </div>
                    <div class="drop__flex">
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                        </ul>
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="menu__list">
                <a class="menu__link" href="#" @click="$root.$refs.headerc.$refs.cart.cartBlockVisible = false;">Hot Deals</a>
                <div class="drop drop_last">
                    <div class="drop__flex">
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                            <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                            <li><a href="#" class="drop__link">Blazers</a></li>
                            <li><a href="#" class="drop__link">Denim</a></li>
                            <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                            <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                            <li><a href="#" class="drop__link">Accessories</a></li>
                        </ul>
                    </div>
                    <div class="drop__flex">
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                        </ul>
                        <h3 class="drop__h3">Women</h3>
                        <ul class="drop__ul">
                            <li><a href="#" class="drop__link">Dresses</a></li>
                            <li><a href="#" class="drop__link">Tops</a></li>
                            <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>`
});