const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const burgerMobile = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const btnCart = document.querySelector ('.navbar-shopping-cart');
const cart = document.querySelector ('#shoppingCartContainer');
const cartContainer = document.querySelector ('.cards-container');
const prdDtlCont = document.querySelector ('#productDetail');
const closePrdDtlCont = document.querySelector ('.product-detail-close');

navEmail.addEventListener('click', toggleDesktopMenu);
burgerMobile.addEventListener ('click', toggleMobileMenu);
btnCart.addEventListener ('click', toggleProductDetail);
closePrdDtlCont.addEventListener('click', closeTheDetails);

//Functions for the desktopMenu togglingAction
function toggleDesktopMenu () {
    const isCartClosed = cart.classList.contains('inactive');
    const isDetailsClosed = prdDtlCont.classList.contains('inactive');
    if (!isCartClosed) {
        cart.classList.add('inactive');
    } if (!isDetailsClosed) {
        prdDtlCont.classList.add('inactive');
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

function openTheDetails () {
    desktopMenu.classList.add('inactive');
    cart.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    prdDtlCont.classList.remove('inactive');
}

function closeTheDetails () {
    prdDtlCont.classList.add('inactive');
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

function renderProducts (array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productImg.addEventListener('click', openTheDetails)

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
}

renderProducts(productList);

