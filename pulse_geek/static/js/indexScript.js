//Script para o carrossel de imagens


var slideIndex = 1;
var timer;

function showSlides(n) {
    var slides = document.getElementsByClassName('slides');
    var dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    clearTimeout(timer);
    timer = setTimeout(showSlides, 5000, slideIndex += 1); // Chama a função a cada 5 segundos
}

showSlides(slideIndex); // Inicializa o carrossel

function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
}