//variables para el cambio de imagen
var logo = document.getElementById('imglogo');

var logos = ['../media/img/Scar/logo.png','../media/img/Scar/logo2.png','../media/img/Scar/logo3.png'];

var index = 0;

var cards = document.querySelectorAll(".card");

	
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





//var cards = document.querySelectorAll(".card");
//cards.forEach((card) => {
  //card.addEventListener("mousemove", (e) => {
    //var rect = card.getBoundingClientRect();
    //var rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -30;
    //var rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    //card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  //});
  //card.addEventListener("mouseleave", () => {
    //card.style.transform = "rotateX(0) rotate(0)";
  //});
//});
