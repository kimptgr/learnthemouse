var previousNumber = -1 ;
var level = 1 ;

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
   level >= 6 ? declencherAutomatiquement() : undefined ;
    document.querySelector(boutonRandom).classList.add("suivant");
    document.querySelector(boutonRandom).classList.remove("hidden");

};

function declencherAutomatiquement() {
{    setTimeout(function() {
        if (level >= 6) {document.querySelectorAll(".btn").forEach(function(element){
            element.classList.add("hidden") ;
            element.classList.remove("suivant");
        })}
        suivant();
    }, 3000);
    }
};

document.addEventListener("DOMContentLoaded", suivant());

function animatePress (currentcolor) { 
    document.getElementById(currentcolor).classList.add("pressed");
    setTimeout(()=>{document.getElementById(currentcolor).classList.remove("pressed")}, 100);
};

document.querySelectorAll(".btn").forEach( (btn)=> {
    btn.addEventListener("click", (event) => {
        var userChosenColor = event.target.id ;
        if (event.target.classList.contains("green") && event.target.classList.contains("suivant")) {
            animatePress(userChosenColor);
            event.target.classList.remove("suivant");
            if (level >= 6) {
                event.target.classList.add("hidden");
            } else {} ;
            suivant();
            
        }
    } )
} )

document.querySelectorAll(".btn").forEach( (btn)=> {
    btn.addEventListener("contextmenu", (event) => {
        var userChosenColor = event.target.id ;
        if (event.target.classList.contains("yellow") && event.target.classList.contains("suivant")) {
            animatePress(userChosenColor);
            event.target.classList.remove("suivant");
            if (level >= 6) {
                event.target.classList.add("hidden");
            } else {} ;
            suivant();
        }
        event.preventDefault();
    } )
} )

document.querySelectorAll(".btn").forEach( (btn)=> {
    btn.addEventListener("dblclick", (event) => {
        var userChosenColor = event.target.id ;
        if (event.target.classList.contains("red") && event.target.classList.contains("suivant")) {
            animatePress(userChosenColor);
            event.target.classList.remove("suivant");
            if (level >= 6) {
                event.target.classList.add("hidden");
            } else {} ;
            suivant();
        }
    } )
} )

function fonctionNiveau(niv) {
if (niv <= 1) {
    document.querySelectorAll(".btn").forEach(function(element){
        element.classList.remove("yellow", "red");
        element.classList.add("green") ;
    })
    document.querySelector("h1").innerHTML = "Tout vert" ;;
        document.querySelector("h2").innerHTML = "Vert : Clic gauche"
        level = 1 ;
}
else if (niv == 2) {
    document.querySelector("h1").innerHTML = "Tout jaune" ;
    document.querySelector("h2").innerHTML = "Jaune : Clic droit"
    document.querySelectorAll(".btn").forEach(function(element){
        element.classList.remove("green", "red");
        element.classList.add("yellow") ;
    })
}
else if (niv == 3) {
    document.querySelector("h1").innerHTML = "Mini mix" ;
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
    level = 5 ;
    document.querySelector("h1").innerHTML = "Mix" ;
    document.querySelector("h2").innerHTML = "Vert : Clic gauche, jaune : Clic droit, rouge : Double clic" ;
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
        element.classList.remove("hidden") } ) 
             ;
        } 
/* else if (level >= 6) {
            level = 6 ;
            document.querySelector("h1").innerHTML = "Test de rapidité vert " ;
            document.querySelectorAll(".btn").forEach(function(element){
                element.classList.add("green") ;
                element.classList.remove("yellow", "red")
                if (element.classList.contains("suivant") == false )
                {element.classList.add("hidden")}
            })} */

/* else if (level >= 6) {
    level = 6 ;
    document.querySelector("h1").innerHTML = "Glisse" ;
    document.querySelector("h2").innerHTML = "Glissez la petite boite dans la grosse boite" ;
    document.querySelectorAll(".btn").forEach(function(element){
        element.classList.add("hidden")
    })
    document.querySelectorAll("#b1, #m1").forEach(function(element){
        element.classList.remove("hidden") ;
    })
    document.querySelector("#b1").classList.add("dropzone1")
    document.querySelector("#m1").classList.add("draggable1")
}   */
    }; 

document.querySelector(".suiv").addEventListener("click", () => {level = level +1 ; fonctionNiveau(level)}) ;

document.querySelector(".prec").addEventListener("click", () => { level = level-1 ; fonctionNiveau(level)} ) ;

document.addEventListener("contextmenu", (event) => event.preventDefault());
/* 
const draggable = document.getElementById('m1');
const droppable = document.getElementById('b1');

draggable.addEventListener('dragstart', dragStart);
droppable.addEventListener('dragover', dragOver);
droppable.addEventListener('drop', drop);

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
} ;

function dragOver(event) {
    event.preventDefault();
} ;

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(data);
    droppable.appendChild(draggableElement);
} ;

function resetElements() {
    // Remettre l'élément draggable à sa position initiale
    draggable.style.top = '';
    draggable.style.left = ''; 
} ; */
