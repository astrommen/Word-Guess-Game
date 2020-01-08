var games = ["Super Mario World", "Final Fantasy III", "Sonic the Hedgehog", "Road Rash", "Legend of Zelda", "Mortal Kombat", "Wolfstein", "Dune", "Doom", "Virtua Fighter", "Master of Orion", "Warcraft", "Star Wars Dark Forces", "Need for Speed", "Quake"];

var userText = document.getElementById("user-text");

//This code will listen for user keyboard inputs
document.onkeyup = function(event) {
    
    userText.textContent = event.key;
    
}
// var gamesBlank = games.map(myFunction); //This line creates a new array by performing a function on each array element

// var a = fruits.indexOf("Apple"); //This line searches for an element by index

// document.write(Math.floor((Math.random() * games.length) + 1));//This line randomly picks an element based on array length

// document.getElementById("demo").innerHTML = games[0]; //This line prints an element from the array

// document.write(games.length); //This line prints the length of the array

// The code below will join all array elements into a string, using * as a separator
// document.getElementById("demo").innerHTML = games.join(" * "); 

// function myRandom {
    
// }