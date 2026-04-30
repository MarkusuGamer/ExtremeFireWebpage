//variables para el cambio de imagen
var logo = document.getElementById('imglogo');

var logos = ['../media/img/Scar/logo.png','../media/img/Scar/logo2.png','../media/img/Scar/logo3.png'];

var index = 0;



	
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


function savedData(){
	var name = document.getElementById('name').value;
	var surname = document.getElementById('surname').value;
	var email = document.getElementById('email').value;
	
	alert("Datos del formulario: \n\n"+"Nombre: "+name+"\n"+"Apellidos: "+surname+"\n"+"Email: "+email+"\n");
}