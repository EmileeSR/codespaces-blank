console.log("hello")

let message = document.querySelector(".message");
let x = document.querySelector(".x");

let height = document.querySelector(".height")
console.log(height);
let animal = document.querySelector(".animal")
console.log(animal);
let quiz = document.querySelector(".quiz")
console.log(quiz);

quiz.onclick = function(){
    console.log("clicked")
    height=height.value;
    console.log(height)
    animal=animal.value;
    console.log(animal);

    if(height==="short" && animal==="pig"){
        message.innerHTML="Mabel";
        console.log("Mabel");
          x.src="mabel.jpg"
        
    }

    if (height==="short" && animal==="dog"){
        message.innerHTML="Gideon";
        console.log("Gideon");
           x.src="gideon.jpg"
    }

    if(height==="tall" && animal==="pig"){
        message.innerHTML="Wendy";
        console.log("Wendy");
        x.src="wendy.jpg"
    }

    if(height==="tall" && animal==="dog"){
        message.innerHTML="Dipper";
        console.log("Dipper");
        x.src="dipper.jpg"

    }
};