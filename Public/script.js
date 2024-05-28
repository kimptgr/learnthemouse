var previousNumber = -1 ;

function getNumber() {
    var randomNumber = Math.floor(Math.random()*9) +1 ; 
    if (previousNumber === randomNumber) {
       return getNumber() ;
    }
    else {previousNumber = randomNumber; 
        return randomNumber; }
} ;

function suivant(){ 
    var randomNumber = getNumber();
    var boutonRandom = ".btn"+randomNumber ;
    $(boutonRandom).addClass("suivant");

};

$(document).ready(function() {
    suivant();
});

function animatePress (currentcolor) { 
    $("#"+currentcolor).addClass("pressed");
    setTimeout(()=>{$("#"+currentcolor).removeClass("pressed")}, 100);
};

$(".btn").click(function(event){ 
    var userChosenColor = $(this).attr("id");
        
    if ($(this).hasClass("green") && $(this).hasClass("suivant") == true) {
        animatePress(userChosenColor);
        $(this).removeClass("suivant");
        suivant();
    }
}); 

$(".btn").on("contextmenu", function(event) {
    var userChosenColor = $(this).attr("id");
        
    if ($(this).hasClass("yellow") && $(this).hasClass("suivant") == true) {
        animatePress(userChosenColor);
        $(this).removeClass("suivant");
        suivant();
    }
    event.preventDefault();
}) ;

$(".btn").on("dblclick", function(event) {
    var userChosenColor = $(this).attr("id");
        
    if ($(this).hasClass("red") && $(this).hasClass("suivant") == true) {
        animatePress(userChosenColor);
        $(this).removeClass("suivant");
        suivant();
    }});

    let level = 1 ;

function fonctionNiveau(niv) {
if (niv <= 1) {
    document.querySelectorAll(".btn").forEach(function(element){
        element.classList.remove("yellow", "red");
        element.classList.add("green") ;
    })
        $("h1").text("Tout vert") ;
        document.querySelector("h2").innerHTML = "Vert : Clic gauche"
        level = 1 ;
}
else if (niv == 2) {
    $("h1").text("Tout jaune") ;
    document.querySelector("h2").innerHTML = "Jaune : Clic droit"
    document.querySelectorAll(".btn").forEach(function(element){
        element.classList.remove("green", "red");
        element.classList.add("yellow") ;
    })
}
else if (niv == 3) {
    $("h1").text("Mini mix") ;
    document.querySelector("h2").innerHTML = "Vert : Clic gauche, jaune : Clic droit" ;
    document.querySelectorAll("#s1, #m1, #b1, #s3").forEach(function(element){
        element.classList.remove("yellow", "red");
        element.classList.add("green") ;
    })
    document.querySelectorAll("#s2, #m2, #b2, #m3, #b3").forEach(function(element){
        element.classList.remove("green", "red");
        element.classList.add("yellow") ;
    })}
else if (niv == 4) {
    document.querySelector("h1").innerHTML = "Tout rouge" ;
    document.querySelector("h2").innerHTML = "Rouge : Double clic" ;
    document.querySelectorAll(".btn").forEach(function(element){
        element.classList.remove("yellow", "green") ;
        element.classList.add("red") ;
    })
}

else if  (level >= 5) {
    document.querySelector("h1").innerHTML = "Mix" ;
    document.querySelector("h2").innerHTML = "Vert : Clic gauche, jaune : Clic droit , rouge : Double clic" ;
    document.querySelectorAll(".btn").forEach(function(element){
        element.classList.remove("yellow", "green", "red") ;
    })
    document.querySelectorAll("#s1, #m1, #b1").forEach(function(element){
        element.classList.add("green") ;
    })
    document.querySelectorAll("#s2, #m2, #b2").forEach(function(element){
        element.classList.add("yellow") ;
    })
    document.querySelectorAll("#s3, #m3, #b3").forEach(function(element){
        element.classList.add("red") ;
    })
    document.querySelectorAll(".btn").forEach(function(element){
        element.classList.remove("hidden", "draggable1", "dropzone1") } ) 
             ;
        level = 5 ;
        }
    }; 

document.querySelector(".suiv").addEventListener("click", () => {level = level +1 ; fonctionNiveau(level)}) ;

document.querySelector(".prec").addEventListener("click", () => { level = level-1 ; fonctionNiveau(level)} ) ;
