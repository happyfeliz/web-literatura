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
