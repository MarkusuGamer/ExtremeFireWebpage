//variables para el cambio de imagen
var logo = document.getElementById('imglogo');

var logos = ['../media/img/Scar/logo.png','../media/img/Scar/logo2.png','../media/img/Scar/logo3.png'];

var index = 0;



//funcion para la animacion del logo	
function cambioImg(){
	if(index===0){
		index=1;
	}
	else if(index===1){
		index=2;
	}
	else if(index===2){
		index = 0;
	}
	logo.src = logos[index];
}

setInterval(cambioImg, 1000);


//funcion para guardar datos del formulario
function savedData(){
	var name = document.getElementById('name').value;
	var surname = document.getElementById('surname').value;
	var email = document.getElementById('email').value;
	
	alert("Datos del formulario: \n\n"+"Nombre: "+name+"\n"+"Apellidos: "+surname+"\n"+"Email: "+email+"\n");
}

//
var fondo = document.getElementById("fondo");
var particulas = document.querySelectorAll(".particles");
var colorAcelerado = "purple"; 
var colorNormal = "blue";
var velocidadesOriginales = [];

for (var i = 0; i < particulas.length; i++) {
    var duracion = window.getComputedStyle(particulas[i]).animationDuration;
    velocidadesOriginales.push(parseFloat(duracion));
}

document.addEventListener("mousedown",acelerar);
document.addEventListener("mouseup",normal);

function acelerar() {

    var velocidad;

    for (var i = 0; i < particulas.length; i++) {
		var nuevaVelocidad = velocidadesOriginales[i] / 4;
        particulas[i].style.animationDuration = nuevaVelocidad + "s";
		particulas[i].style.background = colorAcelerado;
    }
}

function normal() {

    for (var i = 0; i < particulas.length; i++) {
        // Volvemos a la velocidad original
        particulas[i].style.animationDuration = velocidadesOriginales[i] + "s";
		particulas[i].style.background = colorNormal;
    }

}

//




