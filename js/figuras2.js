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
var _integrantes = document.getElementsByClassName("integrantes")
var _next = document.getElementsByClassName("next")
var _comeback = document.getElementsByClassName("comeback")
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

document.getElementById("integrantes-text").addEventListener("mouseover", (e)=>{
    _integrantes[0].style.display="flex"
    _integrantes[1].style.display="flex"
    _integrantes[2].style.display="flex"
    _integrantes[3].style.display="flex"
    _integrantes[4].style.display="flex"
    _integrantes[5].style.display="flex"
})

document.getElementById("integrantes-text").addEventListener("mouseout", (e)=>{
    setTimeout(_integrantes[5].style.display="none",400)
    setTimeout(_integrantes[4].style.display="none",400)
    setTimeout(_integrantes[3].style.display="none",300)
    setTimeout(_integrantes[2].style.display="none",200)
    setTimeout(_integrantes[1].style.display="none",100)
    _integrantes[0].style.display="none"
})


//abrir cada figura
document.getElementById("figura1").addEventListener("click", (e)=>{
    document.getElementById("figura1-page3s").style.display="flex";
})

document.getElementById("figura2").addEventListener("click", (e)=>{
    document.getElementById("figura2-page3s").style.display="flex";
})

document.getElementById("figura3").addEventListener("click", (e)=>{
    document.getElementById("figura3-page3s").style.display="flex";
})

document.getElementById("figura4").addEventListener("click", (e)=>{
    document.getElementById("figura4-page3s").style.display="flex";
})

document.getElementById("figura5").addEventListener("click", (e)=>{
    document.getElementById("figura5-page3s").style.display="flex";
})

document.getElementById("figura6").addEventListener("click", (e)=>{
    document.getElementById("figura6-page3s").style.display="flex";
    figura1=true;
})

document.getElementById("figura7").addEventListener("click", (e)=>{
    document.getElementById("figura7-page3s").style.display="flex";
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

_next[3].addEventListener("click",(e)=>{
    document.getElementById("figura2-page3s-ej").style.display="none";
    document.getElementById("figura3-page3s").style.display="flex";
})

_next[4].addEventListener("click",(e)=>{
    document.getElementById("figura3-page3s").style.display="none";
    document.getElementById("figura3-page3s-ej").style.display="flex";
})

_next[5].addEventListener("click",(e)=>{
    document.getElementById("figura3-page3s-ej").style.display="none";
    document.getElementById("figura4-page3s").style.display="flex";
})

_next[6].addEventListener("click",(e)=>{
    document.getElementById("figura4-page3s").style.display="none";
    document.getElementById("figura4-page3s-ej").style.display="flex";
})

_next[7].addEventListener("click",(e)=>{
    document.getElementById("figura4-page3s-ej").style.display="none";
    document.getElementById("figura5-page3s").style.display="flex";
})

_next[8].addEventListener("click",(e)=>{
    document.getElementById("figura5-page3s").style.display="none";
    document.getElementById("figura5-page3s-ej").style.display="flex";
})

_next[9].addEventListener("click",(e)=>{
    document.getElementById("figura5-page3s-ej").style.display="none";
    document.getElementById("figura6-page3s").style.display="flex";
})

_next[10].addEventListener("click",(e)=>{
    document.getElementById("figura6-page3s").style.display="none";
    document.getElementById("figura6-page3s-ej").style.display="flex";
})

_next[11].addEventListener("click",(e)=>{
    document.getElementById("figura6-page3s-ej").style.display="none";
    document.getElementById("figura7-page3s").style.display="flex";
})

_next[12].addEventListener("click",(e)=>{
    document.getElementById("figura7-page3s").style.display="none";
    document.getElementById("figura7-page3s-ej").style.display="flex";
})


//botón comeback
_comeback[0].addEventListener("click",(e)=>{
    document.getElementById("figura1-page3s-ej").style.display="none";
    document.getElementById("figura1-page3s").style.display="flex";
})

_comeback[1].addEventListener("click",(e)=>{
    document.getElementById("figura2-page3s").style.display="none";
    document.getElementById("figura1-page3s-ej").style.display="flex";
})

_comeback[2].addEventListener("click",(e)=>{
    document.getElementById("figura2-page3s-ej").style.display="none";
    document.getElementById("figura2-page3s").style.display="flex";
})

_comeback[3].addEventListener("click",(e)=>{
    document.getElementById("figura3-page3s").style.display="none";
    document.getElementById("figura2-page3s-ej").style.display="flex";
})

_comeback[4].addEventListener("click",(e)=>{
    document.getElementById("figura3-page3s-ej").style.display="none";
    document.getElementById("figura3-page3s").style.display="flex";
})

_comeback[5].addEventListener("click",(e)=>{
    document.getElementById("figura4-page3s").style.display="none";
    document.getElementById("figura3-page3s-ej").style.display="flex";
})

_comeback[6].addEventListener("click",(e)=>{
    document.getElementById("figura4-page3s-ej").style.display="none";
    document.getElementById("figura4-page3s").style.display="flex";
})

_comeback[7].addEventListener("click",(e)=>{
    document.getElementById("figura5-page3s").style.display="none";
    document.getElementById("figura4-page3s-ej").style.display="flex";
})

_comeback[8].addEventListener("click",(e)=>{
    document.getElementById("figura5-page3s-ej").style.display="none";
    document.getElementById("figura5-page3s").style.display="flex";
})

_comeback[9].addEventListener("click",(e)=>{
    document.getElementById("figura6-page3s").style.display="none";
    document.getElementById("figura5-page3s-ej").style.display="flex";
})

_comeback[10].addEventListener("click",(e)=>{
    document.getElementById("figura6-page3s-ej").style.display="none";
    document.getElementById("figura6-page3s").style.display="flex";
})

_comeback[11].addEventListener("click",(e)=>{
    document.getElementById("figura7-page3s").style.display="none";
    document.getElementById("figura6-page3s-ej").style.display="flex";
})

_comeback[12].addEventListener("click",(e)=>{
    document.getElementById("figura7-page3s-ej").style.display="none";
    document.getElementById("figura7-page3s").style.display="flex";
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

_exit[6].addEventListener("click", (e)=>{
    document.getElementById("figura3-page3s").style.display="none";
})

_exit[7].addEventListener("click", (e)=>{
    document.getElementById("figura3-page3s-ej").style.display="none";
})
_exit[8].addEventListener("click", (e)=>{
    document.getElementById("figura4-page3s").style.display="none";
})

_exit[9].addEventListener("click", (e)=>{
    document.getElementById("figura4-page3s-ej").style.display="none";
})
_exit[10].addEventListener("click", (e)=>{
    document.getElementById("figura5-page3s").style.display="none";
})

_exit[11].addEventListener("click", (e)=>{
    document.getElementById("figura5-page3s-ej").style.display="none";
})
_exit[12].addEventListener("click", (e)=>{
    document.getElementById("figura6-page3s").style.display="none";
})

_exit[13].addEventListener("click", (e)=>{
    document.getElementById("figura6-page3s-ej").style.display="none";
})
_exit[14].addEventListener("click", (e)=>{
    document.getElementById("figura7-page3s").style.display="none";
})

_exit[15].addEventListener("click", (e)=>{
    document.getElementById("figura7-page3s-ej").style.display="none";
})