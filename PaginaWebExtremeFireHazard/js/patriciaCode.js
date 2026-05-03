var navbar; //Variable para guardar la barra de navegación

function Start() //Función que se ejecuta cuando la página acaba de cargar
{
	navbar = document.getElementById('nav');
}

function navScrollHide() //Función para ocultar la barra de navegación cuando el usuario scrollee para abajo
{
	if (window.scrollY > 10)//Si el usuario ha bajado más de 10 píxeles
	{
		navbar.classList.add('scrolled');
	}
	else
	{
		navbar.classList.remove('scrolled');
	}
}

function checkScrollPicture() //Función para que aparezca una imagen
{
	var elementos = document.querySelectorAll('.aparece-scroll'); //Selecciona todas las imagenes que tengan esa clase
	elementos.forEach(function(elemento)
	{
		if (elemento.getBoundingClientRect().top < window.innerHeight) //Comprueba si la imagen ya está visible en la pantalla
		{
			elemento.classList.add('visible'); //Si está visible, hace que aparezca
		}
	});
}