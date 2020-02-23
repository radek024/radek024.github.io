function toggleMenu(){
let menu = document.querySelector(".hamburger-menu");
let navbar = document.querySelector(".page-navigation");
menu.addEventListener("click", function() {
 let lista = document.querySelector(".nav-list");
 lista.classList.toggle("open");
 menu.classList.toggle("close-menu");
 navbar.classList.toggle("open");
 }, false);
}

window.addEventListener("DOMContentLoaded", function() {
  smoothScroll.init();
 toggleMenu();
}, false);
