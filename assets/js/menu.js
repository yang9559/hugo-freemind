
let menuButton = document.getElementById("fm-menu-button");
let mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle("hidden");
})