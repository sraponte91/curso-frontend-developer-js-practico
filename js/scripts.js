const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const burgerMobile = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');


navEmail.addEventListener('click', toggleDesktopMenu);
burgerMobile.addEventListener ('click', toggleMobileMenu);

//Functions for the desktopMenu togglingAction
function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
}

//Funtions for the mobile menu togglingAction

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive');
}
