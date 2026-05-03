//JAVASCRIPT//
var boton = document.getElementById("boton");
var menu = document.getElementById("menu");
var sideNav = document.getElementById("sideNav");
let vid1 = document.getElementById("video1"); 
let vid2 = document.getElementById("video2"); 

sideNav.style.left = "-250px";

//Función del menú lateral//
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

//Función de play y pausa para cada vídeo//
function playVid() { 
  vid1.play(); 
} 

function pauseVid() { 
  vid1.pause(); 
} 

function playVid2() { 
  vid2.play(); 
} 

function pauseVid2() { 
  vid2.pause(); 
} 