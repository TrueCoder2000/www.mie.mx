/*let popHeadphone=document.querySelector(".pop-headphones");
let popClose=document.querySelector(".pop-close");
let popWhatsapp=document.querySelector(".pop-whatsapp");
let popEmail=document.querySelector(".pop-email");
let popPhone=document.querySelector(".pop-phone");*/
/*let containerAnimation=document.querySelector(".container-animation");*/
let chatBox=document.querySelector(".box-chat");
let iconComment=document.querySelector(".icon-comment-chatbox");
let iconClose=document.querySelector(".icon-close-chatbox");
let boxTexto=document.querySelector(".box-text-formulario");
let nombreEmpresa=document.querySelector(".nombreempresa");
let calle=document.querySelector(".calle");
let numero=document.querySelector(".numero");
let colonia=document.querySelector(".colonia");
let ciudad=document.querySelector(".ciudad");
let cp=document.querySelector(".postal");
let nombrepersona=document.querySelector(".nombrepersona");
let telefone=document.querySelector(".telefone");
let email=document.querySelector(".email");
let valid=document.querySelectorAll("#valid");
let btnEnviar=document.querySelector(".btn-enviar");
let menuResponsive=document.querySelector(".menu-responsive");
let iconMenu=document.querySelector(".icon-menu");
let divDedicado=document.querySelector(".dedicado");
let divSimetrico=document.querySelector(".simetrico");
let divLanube=document.querySelector(".lanube");
let boxMenu=document.querySelector(".box-menu");
let divOferta=document.querySelector(".divoferta");
let linkBtnSend=document.querySelector(".link-btn-send");
let boxArea=document.querySelector(".box-area");
let btnEnviarDireccion=document.querySelector(".btn-enviar-direccion");


iconComment.onclick=function(){
	chatBox.style="opacity:1;transition:0.9s";
	iconComment.style="z-index:0";
	iconClose.style="zIndex:1";
	}


iconClose.onclick=function(){
	chatBox.style="opacity:0;transition:0.9s";
	iconComment.style="z-index:1";
	iconClose.style="z-index0";
}
 

linkBtnSend.onclick=function(){
	if(boxArea.value==""){
		alert("Por favor, escribe su mensaje");
		return false;
	}else if(!boxArea.value==""){
		boxArea.value="";
	}
}

iconMenu.onclick=function() {
	let menu=document.querySelector(".menu");
	//menu.classList.toggle("menuOpacity");
	menu.classList.toggle("menu-Opacity");
  }

btnEnviarDireccion.onclick=function(){

	if(nombreEmpresa.value=="" || calle.value=="" || numero.value=="" || colonia.value=="" || ciudad.value=="" || cp.value=="" || nombrepersona.value=="" || telefone.value=="" || email.value==""){

			alert("Por favor, rellena los campos vacios.");
			/*|| calle.value=="" || numero.value=="" || colonia.value=="" || cp.value=="" || nombrepersona.value=="" || telefone.value=="" || email.value==""*/

			nombreEmpresa.style="border:1px red solid";
			calle.style="border:1px red solid";
			numero.style="border:1px red solid";
			colonia.style="border:1px red solid";
			cp.style="border:1px red solid";
			nombrepersona.style="border:1px red solid";
			telefone.style="border:1px red solid";
			email.style="border:1px red solid";

			return false;	
	}else if(!nombreEmpresa.value=="" && !calle.value=="" && !numero.value=="" && !colonia.value=="" && !ciudad.value=="" && !cp.value=="" && !nombrepersona.value=="" && !telefone.value=="" && !email.value==""){
			alert("Sus datos fueron enviados con sucesso!");
			/*&& !calle.value=="" && !numero.value=="" && !colonia.value=="" && !cp.value=="" && !nombrepersona.value=="" && !telefone.value=="" && !email.value==""*/

	}
}


nombreEmpresa.onfocus = function(){
	nombreEmpresa.style="outline:2px blue solid ; transition:0.5s";
}


calle.onfocus = function(){
	calle.style="outline:2px blue solid ; transition:0.5s";
}

numero.onfocus = function(){
	numero.style="outline:2px blue solid ; transition:0.5s";
}

colonia.onfocus = function(){
	colonia.style="outline:2px blue solid ; transition:0.5s";
}


ciudad.onfocus = function(){
	ciudad.style="outline:2px blue solid ; transition:0.5s";
}


cp.onfocus = function(){
	cp.style="outline:2px blue solid ; transition:0.5s";
}


nombrepersona.onfocus = function(){
	nombrepersona.style="outline:2px blue solid ; transition:0.5s";
}


telefone.onfocus = function(){
	telefone.style="outline:2px blue solid ; transition:0.5s";
}


email.onfocus = function(){
	email.style="outline:2px blue solid ; transition:0.5s";
}


nombreEmpresa.onblur = function(){
	nombreEmpresa.style="outline:none";
}


calle.onblur = function(){
	calle.style="outline:none ; transition:0.5s";
}

numero.onblur = function(){
	numero.style="outline:none ; transition:0.5s";
}

colonia.onblur = function(){
	colonia.style="outline:nonee ; transition:0.5s";
}


ciudad.onblur = function(){
	ciudad.style="outline:none ; transition:0.5s";
}


cp.onblur = function(){
	cp.style="outline:none ; transition:0.5s";
}


nombrepersona.onblur = function(){
	nombrepersona.style="outline:none ; transition:0.5s";
}


telefone.onblur = function(){
	telefone.style="outline:none ; transition:0.5s";
}


email.onblur = function(){
	email.style="outline:none ; transition:0.5s";

}



/*window.addEventListener("load", function() {
	divDedicado.style="opacity:1;left:0";
	divSimetrico.style="opacity:1;left:0";
	divLanube.style="opacity:1;left:0";
});

window.onload=function(){
	boxTexto.style="opacity:1";
}*/




/*iconMenu.onclick=function(){
	menu.classList.toggle("menu-opac");
	menu.style="opacity: 1;transition:0.9s";
}*/



/*popHeadphone.onclick=function() {
		popWhatsapp.style="opacity:1;transition:1s";
		popEmail.style="opacity:1;transition:1s";
		popPhone.style="opacity:1;transition:1s";
		popClose.style="opacity:1;top:80px";
		popHeadphone.style="display:none";
}


popClose.onclick=function(){
	popWhatsapp.style="opacity:0;transition:1s";
	popEmail.style="opacity:0;transition:1s";
	popPhone.style="opacity:0;transition:1s";
	popClose.style="display:none";
	popHeadphone.style="display;flex;justify-content:center;align-items:center;zIndex:7000";	
}*/





/*window.onload=function(){
	
	setTimeout(function(){
    containerAnimatio.style="display:none;transition:2s";
	},10);
}*/


