var _home = document.getElementById("Home-button") ;
var _back = document.getElementById("Back-button") ;
var _profile = document.getElementById("Profile-button") ;
var _java = document.getElementById("happy-container")

var happy=true

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

var _conclusions = document.getElementById("conclusiones");
var _exit = document.getElementById("exit");
var _intro= document.getElementById("intro");
var _exit2 = document.getElementsByClassName("exit")


document.getElementById("bibliografia").addEventListener("click",(e)=>{
    setTimeout(()=>{document.getElementById("biblio").style.backgroundColor="#7ad2b9"},2000)
    document.getElementById("biblio").style.display="flex"
})

_exit2[0].addEventListener("click",(e)=>{
    document.getElementById("biblio").style.display="none"
})

_conclusions.addEventListener("click", (e)=>{
    setTimeout(()=>{_intro.style.backgroundColor="#7ad2b9"},2000)
    _intro.style.display="flex";
})

_intro.addEventListener("click", (e)=>{
    _intro.style.display="none";
})