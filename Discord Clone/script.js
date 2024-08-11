var bar = document.querySelector(".bar");
var sideNav = document.querySelector(".side-nav");
var closeBtn = document.querySelector(".closeBar");

bar.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
function openNav() {
    sideNav.classList.toggle("close");
    document.body.classList.toggle("overflow");
}

function closeNav() {
    sideNav.classList.remove("close");
    document.body.classList.remove("overflow");
}