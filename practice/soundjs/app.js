

var displayStatus;

displayStatus=document.getElementById("status");

src="中.mp3";

createjs.Sound.alternateExtensions=["mp3"];

createjs.Sound.addEventListener("fileload",play);

createjs.Sound.registerSound(src);

displayStatus.innerHTML="waiting for load";

function play(event){
soundIntance=createjs.Sound.play(event.src);

displayStatus.innerHTML="Playing source:"+event.src;
}