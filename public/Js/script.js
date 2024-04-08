// up
let up = document.getElementById("btn-up");

window.onscroll = function() {
    if(scrollY <= 400) {
        up.style.display = "none"
    }else {
        up.style.display = "block";
    }
}
up.onclick = function() {
    scroll(0, 0)
}
// up

// loading
    var loader = document.getElementsByClassName("preloader");

    window.addEventListener("load", function() {
        loader.style.display = "none";
    })
// loading