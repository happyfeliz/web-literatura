var _home = document.getElementById("Home-button") ;
var _back = document.getElementById("Back-button") ;
var _profile = document.getElementById("Profile-button") ;
var _java = document.getElementById("happy-container")
var happy=true

var _exit = document.getElementsByClassName("exit");
var _definicionFiguras = document.getElementById("definicion-page3s");
var _definicionButton = document.getElementsByClassName("def-carac");

function display(){ ;
    _java.style.display="flex";
    happy = false;
}

function disdisplayed(){ ; 
    _java.style.display="none";
        happy = true;
}


_profile.addEventListener("click", (e)=>{ ;
    if (happy){
        setTimeout(display,100);
        setTimeout(disdisplayed,3000);
    }else{
        disdisplayed();
    }

})
//var _intro= document.getElementById("intro");

/*_intro.addEventListener("click", (e)=>{
    _intro.style.display="none";
}) */ 

var _definicionFiguras = document.getElementById("definicion-page3s");
var mainDefinicion=false;
var mainCaracteristics=false;
var n

document.getElementById("definicion").addEventListener("click", (e)=>{
    _definicionFiguras.style.display="flex";
})

document.getElementById("caracteristicas").addEventListener("click", (e)=>{
    document.getElementById("caracter-page3s").style.display="flex";
})

document.getElementById("figura1").addEventListener("click", (e)=>{
    document.getElementById("figura1-page3s").style.display="flex";
})

document.getElementById("figura2").addEventListener("click", (e)=>{
    document.getElementById("figura1-page3s").style.display="flex";
    figura1=true;
})

document.getElementById("figura3").addEventListener("click", (e)=>{
    document.getElementById("figura1-page3s").style.display="flex";
    figura1=true;
})

document.getElementById("figura4").addEventListener("click", (e)=>{
    document.getElementById("figura1-page3s").style.display="flex";
    figura1=true;
})

document.getElementById("figura5").addEventListener("click", (e)=>{
    document.getElementById("figura1-page3s").style.display="flex";
    figura1=true;
})

document.getElementById("figura6").addEventListener("click", (e)=>{
    document.getElementById("figura1-page3s").style.display="flex";
    figura1=true;
})

document.getElementById("figura7").addEventListener("click", (e)=>{
    document.getElementById("figura1-page3s").style.display="flex";
    figura1=true;
})

_exit[0].addEventListener("click", (e)=>{
    _definicionFiguras.style.display="none";
    mainDefinicion=false;
    console.log(mainDefinicion);
})

_exit[1].addEventListener("click", (e)=>{
    document.getElementById("caracter-page3s").style.display="none";
    mainCaracteristics=false;
    console.log(mainCaracteristics);
})

_exit[2].addEventListener("click", (e)=>{
    document.getElementById("figura1-page3s").style.display="none";
    figura1=false;
    console.log(figura1);
})
