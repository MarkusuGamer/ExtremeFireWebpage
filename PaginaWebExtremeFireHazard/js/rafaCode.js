// Función que hace que la barra de navegación aparezca y desaparezca
const navbar = document.getElementById('navbar');
let lastScroll = 0;
const threshold = 5;

function navbarScroll() {
    const currentScroll = window.scrollY;
    const difference = Math.abs(currentScroll - lastScroll);

    if (difference < threshold) return;

    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else if (currentScroll < lastScroll) {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
}

// Función para el funcionamiento del carrusel de imágenes
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dots = document.querySelectorAll('.dot');

const totalSlides = slides.length;
const AUTO_PLAY_TIME = 4000;
let currentIndex = 1; // 👈 Empieza en 1 porque el índice 0 es el clon
let autoPlayInterval;
let isTransitioning = false;


const firstClone = slides[0].cloneNode(true);
const lastClone = slides[totalSlides - 1].cloneNode(true);

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
    resetAutoPlay();
});

prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
    resetAutoPlay();
});


dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.index) + 1; 
        goToSlide(index);
        resetAutoPlay();
    });
});


function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
    }, AUTO_PLAY_TIME);
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}


function Start() {
    startAutoPlay();
}