function suivant(){ 
    var randomNumber = Math.floor(Math.random()*9) +1  ;
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

let points = 10 ;
let level = 1 ;

$(".btn").click(function(event){ 
    var userChosenColor = $(this).attr("id");
        
    if ($(this).hasClass("green") && $(this).hasClass("suivant") == true) {
        points = points -1 ; 
        $("h2").text((points) + " points avant exercice suivant") ;
        animatePress(userChosenColor);
        $(this).removeClass("suivant");
        suivant();

        if (points <= 0 ) {
            $("h1").html("Clique <span>ici</span> pour accéder à l'exercice suivant")
        }
    }
}); 

$(".btn").on("contextmenu", function(event) {
    var userChosenColor = $(this).attr("id");
        
    if ($(this).hasClass("yellow") && $(this).hasClass("suivant") == true) {
        points = points -2 ; 
        $("h2").text((points) + " points avant l'exercice suivant") ;
        animatePress(userChosenColor);
        $(this).removeClass("suivant");
        suivant();

        if (points <= 0 ) {
            $("h1").html("Clique <span>ici</span> pour accéder à l'exercice suivant")
        }
    }
    event.preventDefault();
}) ;

$(".btn").on("dblclick", function(event) {
    var userChosenColor = $(this).attr("id");
        
    if ($(this).hasClass("red") && $(this).hasClass("suivant") == true == true) {
        points = points -3 ; 
        $("h2").text((points) + " points avant exercice suivant") ;
        animatePress(userChosenColor);
        $(this).removeClass("suivant");
        suivant();

        if (points <= 0 ) {
            $("h1").html("Clique <span>ici</span> pour accéder à l'exercice suivant")
        }
    }});

function fonctionNiveau(niv) {
    level = level +1 ;

    if (niv >= 2) {
        $("#s2, #m2, #b2").removeClass("green").addClass("yellow");
        $("h1").text("Exercice " + (level)) ;
        $("h3").html("1 point : clic gauche sur bouton vert <br> 2 points : clic droit sur bouton jaune") ;
        points = 20 ;
        $("h2").text((points) + " points avant exercice suivant") ;

        if (level >= 3) {
            $("#s3, #m3, #b3").removeClass("green").addClass("red");
            $("h3").html("1 point : clic gauche sur bouton vert <br> 2 points : clic droit sur bouton jaune <br> 3 points : double clic sur bouton rouge") ;
        };
    }; 

};

$("h1").click(function(event){
    (points <= 0) ? fonctionNiveau(level + 1) : undefined
});
