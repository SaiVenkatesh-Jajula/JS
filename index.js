//keyboard event listner..............keypress event
document.addEventListener("keypress",function(event){
    // console.log(event.key); //array (key)
    makesound(event.key);
    makeanimate(event.key);
    });


var btnlength = document.getElementsByClassName("drum").length;
//dynamically setting the length;
//addEventListner...................click event
for(var i=0; i<=btnlength; i++){
document.querySelectorAll("button")[i].addEventListener("click" , function(){  //unanimous funcitons
    var clicked = this.textContent;  
    makesound(clicked);
    makeanimate(clicked);
});
}

//makesound function!
function makesound(clicked){
switch(clicked){
    case 'w':
        var sound = new Audio("sounds/crash.mp3");
        sound.play();
        break;
    case 'a':
         var sound = new Audio("sounds/kick-bass.mp3");
         sound.play();
         break;
    case 's':
        var sound = new Audio("sounds/snare.mp3");     
        sound.play();
        break;
    case 'd':
        var sound = new Audio("sounds/tom-1.mp3");
        sound.play();
        break;
    case 'j':
        var sound = new Audio("sounds/tom-2.mp3");
        sound.play();
        break;
    case 'k':
        var sound = new Audio("sounds/tom-3.mp3");
        sound.play();
        break;
    case 'l':
        var sound = new Audio("sounds/tom-4.mp3");
        sound.play();
        break;   
}
}

// animaton
function makeanimate(letter){
    document.querySelector("."+letter).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+letter).classList.remove("pressed");
    },100)
}


