//#region Función que hace que la barra de navegación aparezca y desaparezca
var navbar = document.getElementById('navbar');
var lastScroll = 0;
var threshold = 5;

function navbarScroll() {
    var currentScroll = window.scrollY;
    var difference = Math.abs(currentScroll - lastScroll);

    if (difference < threshold) return;

    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else if (currentScroll < lastScroll) {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
}
//#endregion

//#region Función para el funcionamiento del carrusel de imágenes
var track = document.querySelector('.carousel-track');
var slides = document.querySelectorAll('.carousel-slide');
var prevBtn = document.getElementById('prevBtn');
var nextBtn = document.getElementById('nextBtn');
var dots = document.querySelectorAll('.dot');

var totalSlides = slides.length;
var AUTO_PLAY_TIME = 4000;
var currentIndex = 1; // 👈 Empieza en 1 porque el índice 0 es el clon
var autoPlayInterval;
var isTransitioning = false;


var firstClone = slides[0].cloneNode(true);
var lastClone = slides[totalSlides - 1].cloneNode(true);

firstClone.classList.add('clone');
lastClone.classList.add('clone');


track.appendChild(firstClone);          
track.insertBefore(lastClone, slides[0]); 


track.style.transform = `translateX(-${currentIndex * 100}%)`;


function goToSlide(index) {
    if (isTransitioning) return; 
    isTransitioning = true;

    currentIndex = index;
    track.style.transition = 'transform 0.5s ease';
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    updateDots();
}


function updateDots() {
    let dotIndex = currentIndex - 1; 

    if (dotIndex >= totalSlides) dotIndex = 0;
    if (dotIndex < 0) dotIndex = totalSlides - 1;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[dotIndex].classList.add('active');
}


track.addEventListener('transitionend', () => {
    
    if (currentIndex >= totalSlides + 1) {
        track.style.transition = 'none'; 
        currentIndex = 1;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    
    if (currentIndex <= 0) {
        track.style.transition = 'none';
        currentIndex = totalSlides;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    isTransitioning = false;
});


nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
    resetCarrouselAutoPlay();
});

prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
    resetCarrouselAutoPlay();
});


dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.index) + 1; 
        goToSlide(index);
        resetCarrouselAutoPlay();
    });
});


function startCarrouselAutoPlay() {
    autoPlayInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
    }, AUTO_PLAY_TIME);
}

function resetCarrouselAutoPlay() {
    clearInterval(autoPlayInterval);
    startCarrouselAutoPlay();
}
//#endregion

//#region Función temporizador
function updateCountdown() {
    var targetDate = new Date('2026-06-30');
    var now = new Date();
    var difference = targetDate - now;

    if (difference <= 0) {
        document.getElementById('countdown').innerHTML = "¡El día ha llegado!";
        return;
    }

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);

updateCountdown();
//#endregion

//#region Función al inicio
function Start() {
    startCarrouselAutoPlay();
}
//#endregion
