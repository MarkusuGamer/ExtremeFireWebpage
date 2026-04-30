var sprite;
var navbar;
var isDancing = false;
var interval;
function start() {
    sprite = document.getElementById('lumb-sprite');
    navbar = document.getElementById('navbar');

    interval = setInterval(triggerPeek, 10000);
}
//Funcion que se activa con el onscroll del body
function manageScroll() {
	// Cambiar NavBar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Revelar secciones al bajar
    var reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        var windowHeight = window.innerHeight;
        var elementTop = el.getBoundingClientRect().top;
		
        if (elementTop < windowHeight - 150) {
            el.classList.add('active');
        } 
		else{
			el.classList.remove('active')
		}
    });

    // Parallax del texto principal
    var mainPageText = document.querySelector('.main-page-content');
    if (mainPageText) {
        var scrollValue = window.scrollY;
        mainPageText.style.transform = `translateY(${scrollValue * 0.4}px)`;
        mainPageText.style.opacity = 1 - (scrollValue / 500);
    }
}

//Funcion que se activa con el onclick del sprite
function lumbParty() {
    isDancing = true;
    
    sprite.style.top = ''; sprite.style.bottom = '';
    sprite.style.left = ''; sprite.style.right = '';

    sprite.classList.remove('sprite-idle');
    sprite.classList.add('sprite-dance', 'on-stage');
    document.body.classList.add('dancing-mode');
	sprite.style.transform = "scale(10) rotate(0)";
	clearInterval(interval);
	
    setTimeout(() => {
        isDancing = false;
        document.body.classList.remove('dancing-mode');
        sprite.classList.remove('sprite-dance', 'on-stage');
        sprite.classList.add('sprite-idle');
        sprite.classList.remove('active');
        sprite.style.opacity = '0';
    }, 3000);
}

//Funcion de asomarse del lumb
function triggerPeek() {
    if (isDancing) return; 
	
	if(!sprite){sprite = document.getElementById('lumb-sprite');}
	
	sprite.classList.remove('active');
    sprite.style.top = 'auto'; sprite.style.bottom = 'auto';
    sprite.style.left = 'auto'; sprite.style.right = 'auto';
    

    var sides = ['top', 'bottom', 'left', 'right'];
    var side = sides[Math.floor(Math.random() * sides.length)];
    var offset = Math.floor(Math.random() * 70) + 15;

    var rotation = 0;
    if (side === 'top') { sprite.style.top = '-5px'; sprite.style.left = offset + '%'; rotation = 180; }
    else if (side === 'bottom') { sprite.style.bottom = '-5px'; sprite.style.left = offset + '%'; rotation = 0; }
    else if (side === 'left') { sprite.style.left = '-5px'; sprite.style.top = offset + '%'; rotation = 90; }
    else if (side === 'right') { sprite.style.right = '-5px'; sprite.style.top = offset + '%'; rotation = -90; }

    sprite.style.transform = "scale(4) rotate(" + rotation + "deg)";
    
    setTimeout(() => { if (!isDancing) sprite.classList.add('active'); }, 50);
    setTimeout(() => { if (!isDancing) sprite.classList.remove('active'); }, 2500);
}