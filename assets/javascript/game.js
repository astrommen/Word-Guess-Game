//Creates an array listing Iconic 90 video games
var games = ["Super Mario World", "Final Fantasy III", "Sonic the Hedgehog",
            "Road Rash", "Legend of Zelda", "Mortal Kombat", 
            "Wolfstein", "Dune", "Doom", 
            "Virtua Fighter", "Master of Orion", "Warcraft", 
            "Star Wars Dark Forces", "Need for Speed", "Quake"];
            console.log(games.length);
            console.log(games.length);

//empty array for comparison to user keys            
var arr = [];

// Creating variables to hold # of guesses & wins
var guessesLeft = 12;
var wins = 0;

// Create variables that hold refs to places in HTML where we want to display
var directionsText = document.getElementById("directions-text");
var userText = document.getElementById("user-text");
var winsText = document.getElementById("wins-text");
var guessesText = document.getElementById("guesses-text");
var blanksText = document.getElementById("blanks-text")


//Randomly chooses a choice from the games array. This is the comp guess.
var computerChoice = games[Math.floor(Math.random() * games.length)];

console.log(computerChoice);

//This code will listen for user keyboard inputs
document.onkeyup = function(event) {
    
    //Prints user key strokes
    userText.textContent = event.key;
}  
//For loop that writes "_ " for every character
for (var i = 0; i < computerChoice.length; i++) {
    
    blanksText = "_";
    console.log(i);

    //This line pushes each char into the arr array
    arr.push(computerChoice[i]);
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