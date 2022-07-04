// Smooth Scroll
const links = document.querySelectorAll(".banner__link");
for (const link of links) {
    link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
e.preventDefault();
const href = this.getAttribute("href");
document.querySelector(href).scrollIntoView({behavior: "smooth"});
}

// Button Up
window.onscroll = function(){scrollFunction()};
const upbuttons = document.querySelectorAll(".button__up");
for (const upbutton of upbuttons) {
    upbutton.addEventListener("click", clickHandler);
}
function clickHandler(e) {
e.preventDefault();
const href = this.getAttribute("href");
document.querySelector(href).scrollIntoView({
    behavior: "smooth"
});
}
function scrollFunction(){
    if ( document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000){
        document.getElementById('btnUp').className = 'button__up visible';
    } else {
        document.getElementById('btnUp').className = 'button__up hidden';
    }
}

 // Menu

function openModal() {
    document.getElementById("modal").style.top = "0px";
}

function closeModal() {
    document.getElementById("modal").style.top = "-400px";
}