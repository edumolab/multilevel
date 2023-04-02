
//Page control
/*
document.getElementById("pgone").style.display="none";
var welcome=document.getElementById("welcome_note");

document.querySelector(".startBtn").onclick=function openPage(e){
  document.getElementById("pgone").style.display="block";
  e.target.style.display="none"
  welcome.style.display="none";
}

*/


 //Scale up-down font

 var TextSize=document.getElementById("question-bar");
 function sizeUp(){
    var style = window.getComputedStyle(TextSize, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    TextSize.style.fontSize=(fontSize+1)+'px'
 }

 function sizeDown(){
    var style = window.getComputedStyle(TextSize, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    TextSize.style.fontSize=(fontSize-1)+'px'
 }


