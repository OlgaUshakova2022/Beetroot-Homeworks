
const hamburger = document.querySelector(".main2__hamburger");
const navMenu = document.querySelector(".main2__navbar__navmenu");

hamburger.addEventListener("click", mobileMenu);


function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}