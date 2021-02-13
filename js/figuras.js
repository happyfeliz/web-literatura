var _home = document.getElementById("Home-button") ;
var _back = document.getElementById("Back-button") ;
var _profile = document.getElementById("Profile-button") ;
var _java = document.getElementById("happy-container")
var happy=true

var _exit = document.getElementById("exit");
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
var _definicionButton = document.getElementsByClassName("def-carac");

console.log(_definicionButton)
console.log(_definicionFiguras)

var mainDefinicion=false

document.getElementById("definicion").addEventListener("click", (e)=>{
    _definicionFiguras.style.display="flex";
    mainDefinicion=true
})

_exit.addEventListener("click", (e)=>{
    if (mainDefinicion){
        _definicionFiguras.style.display="none"
        mainDefinicion=false
    }
})