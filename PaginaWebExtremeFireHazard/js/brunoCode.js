
var navBar; //Referencia a la barra de navegación
var title; //referencia al título
var logo; //Referencia al logo de la navbar (el icono de EFH con el fueguito)
var arrow; //Referencia al botón de subir a arriba de la página.

var images = ["../media/img/Marcos/IrusDawn.png", 
				"../media/img/Bruno/Iru_1.webp",
				"../media/img/Bruno/Iru_2.webp",
				"../media/img/Bruno/Iru_3.webp",
				"../media/img/Bruno/Iru_4.webp"];
				
var currentImg = 0;
var display;

function Start()
{
	navbar = document.getElementById('nav'); //Referencia a la barra de navegación
    title = document.getElementById('header'); //referencia al título
    logo = document.getElementById('logo'); //Referencia al logo (icono EFH)
    display = document.getElementById('cover'); //Referencia a la foto principal
	arrow = document.getElementById('arrow-button');
    
    display.addEventListener('animationend', () => {display.classList.remove('shakeAnim');});  
    
    images.forEach(src => {var img = new Image(); img.src = src;});  
}  

function navScrollHide() //Esta función se encarga de ocultar la barra de navegación cuando scrolleas hacia abajo
{
    if (window.scrollY > 20) //si tu variable de scroll vertical es mínima
    {
        navbar.classList.add('scrolled'); //Se añade esta clase que oculta la navbar.
    } 
	else 
	{
        navbar.classList.remove('scrolled'); //Si no, se quita la clase para que vuelva a aparecer.
    }
}

function NextImage() //Hace que el source de la imágen principal cambie (mostrando distintas imágenes del juego).
{
	 console.log("NextImage ejecutado", currentImg, display);
	currentImg++; //Sube el index de la foto
	if(currentImg > 4) currentImg = 0; //si el index ha llegado a su máximo, volver a 0 (cíclico)
	display.src = images[currentImg]; //cambia el source de la foto a la que toque dependiendo del index.
}	

function LowerTitle() //Esta función baja el título cuando el navbar se hace grande (para dejar espacio)
{
	title.style.paddingTop = '170px';
	title.style.paddingBottom = '45px';
	logo.style.height = '120px'
}

function RiseTitle() //Esta función sube el título cuando el navbar se hace chiquito
{
	title.style.paddingTop = '110px';
	title.style.paddingBottom = '15px';
	logo.style.height = '90px'
}

function ImageBounce() //Esta función se encarga de animar el rebote de la imagen central de la página
{
    display.classList.add("shakeAnim"); //Añade la clase a través de la cual se animan (css)
    setTimeout(() => img.classList.remove("shakeAnim"), 500); //Se la quita tras un timeout de medio segundo
}

function ArrowVisibility()
{
	if (window.scrollY > 300) {
    arrow.classList.add('visible');
  } else {
    arrow.classList.remove('visible');
	}
}

function GoToTop() //esta función hace que, al dar a un botón, puedas subir a la parte de arriba de la página automáticamente.
{
  document.body.scrollTop = 0; // Esto es para que lo pueda hacer en safari
  document.documentElement.scrollTop = 0; // Esto es para que lo pueda hacer en Chrome, Opera y Firefox
} 
	