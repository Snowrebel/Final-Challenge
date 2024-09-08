window.addEventListener('resize', function() {
    if (window.innerWidth < 256) {  // Si el ancho de la ventana es menor a 256 pixeles
        window.resizeTo(256, window.innerHeight);  // Redimensiona la ventana para que el ancho sea de al menos 256 pixeles
    }
});

let currentSlide = 0;
let autoSlideInterval;
let isHovered = false;
const slideDuration = 2500;

function showSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    items.forEach((item, i) => {
        item.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function changeSlide(direction) {
    const items = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + direction + items.length) % items.length;
    showSlide(currentSlide);
}

function autoSlide() {
    autoSlideInterval = setInterval(() => {
        if (!isHovered) {
            changeSlide(1);
        }
    }, slideDuration + 5000);
}

document.querySelector('.carousel-container').addEventListener('mouseover', () => {
    isHovered = true;
    clearInterval(autoSlideInterval);
});

document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
    isHovered = false;
    setTimeout(() => {
        autoSlide(); 
    }, 5000);
});

showSlide(currentSlide);
autoSlide();


// Intro splash con referencia del video de Conor Bailey.

let intro = document.querySelector('.intro'); // Selecciona el elemento que representa la pantalla de introduccion
let logo = document.querySelector('.logo-header'); // Selecciona el encabezado del logo
let logoSpan = document.querySelectorAll('.logo'); // Selecciona todas las partes del logo (cada letra)

window.addEventListener('DOMContentLoaded', () => { // Espera a que todo el contenido de la pagina se cargue
    setTimeout(() => {
        logoSpan.forEach((span, idx) => { // Anade la clase 'active' a cada parte del logo en intervalos
            setTimeout(() => {
                span.classList.add('active'); 
            }, (idx + 1) * 400); // Multiplica el indice para crear un efecto de aparicion secuencial
        });

        setTimeout(() => { // Despues de 2 segundos, comienza a eliminar la clase 'active' y anade la clase 'fade'
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active'); // Quita la clase 'active'
                    span.classList.add('fade'); // Anade la clase 'fade' para el efecto de desvanecimiento
                }, (idx + 1) * 50); // Intervalos mas cortos para un desvanecimiento rapido
            });
        }, 3000); 

        setTimeout(() => { // Finalmente, mueve la pantalla de introduccion fuera de la vista
            intro.style.top = '-100vh'; 
        }, 3500); 
    });
});

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}