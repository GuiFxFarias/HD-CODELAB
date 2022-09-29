const nomes = ["guilarme", "pedro", "manuela", "claudio", "erica"];

//nomes.sort(); //change structure, does not return a new array

nomes.sort().reverse(); // reverse structure

//console.log(nomes);

//--------------------new exercise--------------------------

let message = "Welcome back home";


message = message.split("").reverse(); //change a string for a array

console.log(message.join("")); //change a array for a string
