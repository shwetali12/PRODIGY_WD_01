function changebg(){
    var navbar = document.getElementById('navbar');
    var scrollv = window.scrollY;
    if (scrollv < 150){
        navbar.classList.remove('bgcolor');
    } else{
        navbar.classList.add('bgcolor')
    }
}

window.addEventListener("scroll", changebg);