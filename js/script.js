// js/script.js

function toggleNav() {
    var nav = document.getElementById("sideNav");
    if (nav.style.width === "250px") {
        nav.style.width = "0";
    } else {
        nav.style.width = "250px";
    }
}
