 // variables

let hamburger = document.querySelector(".hamburger");
let navbarLinks = document.querySelector(".headerNavbar");


console.log(navbarLinks);
console.log(hamburger);

hamburger.addEventListener("click", (e) =>
{
    navbarLinks.classList.toggle("menu-appear");
});