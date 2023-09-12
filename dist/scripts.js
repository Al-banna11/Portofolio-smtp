//  Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNavbar = header.offsetTop

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};



// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-Menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});



var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");
menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
});
