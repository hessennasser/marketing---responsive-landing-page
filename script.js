// start menu in header 
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    nav.classList.toggle("active");
});
// end menu in header

// start sticky header 
var header = this.document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});
// end sticky header 