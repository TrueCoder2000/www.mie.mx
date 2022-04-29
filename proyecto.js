/*let popHeadphone=document.querySelector(".pop-headphones");
let popClose=document.querySelector(".pop-close");
let popWhatsapp=document.querySelector(".pop-whatsapp");
let popEmail=document.querySelector(".pop-email");
let popPhone=document.querySelector(".pop-phone");*/
/*let containerAnimation=document.querySelector(".container-animation");*/
let chatBox=document.querySelector(".box-chat");
let iconComment=document.querySelector(".icon-comment-chatbox");
let iconClose=document.querySelector(".icon-close-chatbox");


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


