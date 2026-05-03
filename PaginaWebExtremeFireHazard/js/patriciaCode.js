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