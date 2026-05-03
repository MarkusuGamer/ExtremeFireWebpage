var navBar; //Variable para guardar la barra de navegación



funtion Start() //Función que se ejecuta cuando la página acaba de cargar
{
	navbar = document.getElementById('nav');
}

function navScrollHide() //Función para ocultar la barra de navegación cuando el usuario scrollee para abajo
{
	if (window.scrolly > 10)//Si el usuario ha bajado más de 10 píxeles
	{
		navbar.classList.add('scrolled');
	}
	else
	{
		navbar.ClassList.remove('scrolled');
	}
}