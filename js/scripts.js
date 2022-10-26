const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const burgerMobile = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const btnCart = document.querySelector ('.navbar-shopping-cart');
const cart = document.querySelector ('.product-detail');

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
    Precio: '120',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    Precio: '220',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Computador',
    Precio: '320',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});