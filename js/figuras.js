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
var _next = document.getElementsByClassName("next")
var number

document.getElementById("definicion").addEventListener("click", (e)=>{
    _definicionFiguras.style.display="flex";
    number=0
    console.log(number)
})

document.getElementById("caracteristicas").addEventListener("click", (e)=>{
    document.getElementById("caracter-page3s").style.display="flex";
    number=1
    console.log(number)
})


//abrir cada figura
document.getElementById("figura1").addEventListener("click", (e)=>{
    document.getElementById("figura1-page3s").style.display="flex";
    number=2
    console.log(number)
})

document.getElementById("figura2").addEventListener("click", (e)=>{
    document.getElementById("figura2-page3s").style.display="flex";
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


//botón next
_next[0].addEventListener("click",(e)=>{
    document.getElementById("figura1-page3s").style.display="none";
    document.getElementById("figura1-page3s-ej").style.display="flex";
})

_next[1].addEventListener("click",(e)=>{
    document.getElementById("figura1-page3s-ej").style.display="none";
    document.getElementById("figura2-page3s").style.display="flex";
})

_next[2].addEventListener("click",(e)=>{
    document.getElementById("figura2-page3s").style.display="none";
    document.getElementById("figura2-page3s-ej").style.display="flex";
})

//botón exit

_exit[0].addEventListener("click",(e)=>{
    _definicionFiguras.style.display="none"
})


_exit[1].addEventListener("click", (e)=>{
    document.getElementById("caracter-page3s").style.display="none";
})

_exit[2].addEventListener("click", (e)=>{
    document.getElementById("figura1-page3s").style.display="none";
})

_exit[3].addEventListener("click", (e)=>{
    document.getElementById("figura1-page3s-ej").style.display="none";
})

_exit[4].addEventListener("click", (e)=>{
    document.getElementById("figura2-page3s").style.display="none";
})

_exit[5].addEventListener("click", (e)=>{
    document.getElementById("figura2-page3s-ej").style.display="none";
})

/*

_exit2.addEventListener("click", (e)=>{
    _exit2.style.display="none";
})

_exit.addEventListener("click", (e)=>{
    switch(number){
        case 0:
            _definicionFiguras.style.display="none";
            break
        case 1:
            document.getElementById("caracter-page3s").style.display="none";
            break;
        case 2:
            document.getElementById("figura1-page3s").style.display="none";
            break;
        case 3:
            document.getElementById("figura1-page3s-ej").style.display="none";
            break;
    }
})


function close(number){
    switch(number){
        case 0:
            _definicionFiguras.style.display="none";
            break
        case 1:
            document.getElementById("caracter-page3s").style.display="none";
            break
        case 2:
            document.getElementById("figura1-page3s").style.display="none"
            break
        case 3:
            document.getElementById("figura1-page3s-ej").style.display="none"
    }
}

_exit[number].addEventListener("click",close(number))


_exit[number].addEventListener("click", (e)=>{
    document.getElementById("caracter-page3s").style.display="none";
})

_exit[number].addEventListener("click", (e)=>{
    document.getElementById("figura1-page3s").style.display="none";
})*/
