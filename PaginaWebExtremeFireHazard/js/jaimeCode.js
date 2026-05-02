//JAVASCRIPT//
var boton = document.getElementById("boton");
var menu = document.getElementById("menu");
var sideNav = document.getElementById("sideNav");
var hat = document.getElementById("hat");
var fish = document.getElementById("fish");

sideNav.style.left = "-250px";

function abrirMenu(){
	
	if(sideNav.style.left === "-250px"){
		sideNav.style.left = "0";
		menu.src = "../media/img/Jaime/close.png"
	}
	else{
		sideNav.style.left = "-250px";
		menu.src = "../media/img/Jaime/menu.png";
	}
}
