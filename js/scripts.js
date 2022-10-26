const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const burgerMobile = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const btnCart = document.querySelector ('.navbar-shopping-cart');
const cart = document.querySelector ('.product-detail');
const cartContainer = document.querySelector ('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
burgerMobile.addEventListener ('click', toggleMobileMenu);
btnCart.addEventListener ('click', toggleProductDetail);

//Functions for the desktopMenu togglingAction
function toggleDesktopMenu () {
    const isCartClosed = cart.classList.contains('inactive');
    if (!isCartClosed) {
        cart.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

}

//Funtions for the mobile menu togglingAction

function toggleMobileMenu () {
    const isCartClosed = cart.classList.contains('inactive');

    if (!isCartClosed) {
        cart.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail () {
    
    const isMobileMenuclosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuclosed) {
        mobileMenu.classList.add('inactive');
    } if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    cart.classList.toggle('inactive');
}

// Productos

const productList = [];

productList.push({
    name: 'Bike',
    precio: '120',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    precio: '220',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Computador',
    precio: '320',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Computador',
    precio: '320',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const producInfoDiv = document.createElement('div');

    const productName = document.createElement('p');
    productName.innerText = '$' + product.name;
    
    const productPrice = document.createElement('p');
    productName.innerText = '$' + product.precio;
    producInfoDiv.append(productName, productPrice);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(productImgCart);

    productInfo.append(producInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cartContainer.appendChild(productCard);
};