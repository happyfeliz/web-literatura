Document.getElementById("#Home") = _home
Document.getElementById("#Back") = _back
Document.getElementById("#Profile") = _profile

_home.addEventListener(onclick,homeLoad())

function homeLoad(){
    alert("Hoola")
}