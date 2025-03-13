console.log("hello")

let message = document.querySelector(".message");


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
        message.innerHTML="Mabel"
        console.log("Mabel")
        
    }

    if (height==="short" && animal==="dog"){
        console.log("Gideon")
    }

    if(height==="tall" && animal==="pig"){
        console.log("Wendy")
    }

    if(height==="tall" && animal==="dog"){
        console.log("Dipper")
    }
};