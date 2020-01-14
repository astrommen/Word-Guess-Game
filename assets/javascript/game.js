//Creates an array listing Iconic 90 video games
var games = ["SUPER MARIO WORLD", "FINAL FANTASY III", "SONIC THE HEDGEHOG", "BANJO KAZOOIE",
            "ROAD RASH", "LEGEND OF ZELDA", "MORTAL KOMBAT", "HALF-LIFE", "POKEMON RED AND BLUE",
            "WOLFSTEIN", "DUNE", "DOOM", "TOMBRAIDER", "SPRYO", "CHRONO TRIGGER", "STARCRAFT",
            "VIRTUA FIGHTER", "MASTER OF ORION", "WARCRAFT", "GOLDENEYE 007", "METAL GEAR SOLID",
            "DIABLO", "SILENT HILL", "CIVILIZATION", "NEED FOR SPEED", "QUAKE", "DUKE NUKEM 3D"];

//empty array for comparison to user keys            
var arr;
var arrblanks = [];
var userText2;

// Creating variables to hold # of guesses & wins
var guessesLeft = 12;
var wins = 0;

// Create variables that hold refs to places in HTML where we want to display
var directionsText = document.getElementById("directions-text");
var userText = document.getElementById("user-text");
var winsText = document.getElementById("wins-text");
var guessesText = document.getElementById("guesses-text");
var blanksText = document.getElementById("blanks")

//Randomly chooses a choice from the games array. This is the comp guess.
var computerChoice = games[Math.floor(Math.random() * games.length)];

console.log(computerChoice);//For testing purposes

//For loop that writes "_ " for every character
for (i = 0; i < computerChoice.length; i++) {
    
    //If/ElseIf to check for spaces and add them
    //This works
    if (computerChoice[i] !== " "){
        
        // blanksText.textContent += "_ ";
        arrblanks.push("_");
        
    } else {
        
        // blanksText.textContent += "\xa0\xa0";
        arrblanks.push("\xa0\xa0");
    }   
}

//Prints the blanks to html
blanksText.textContent += arrblanks.join(" ");

if (guessesLeft > 0){
    //This code will listen for user keyboard inputs
    document.onkeyup = function(event) {
        
        //Prints user key strokes
        userKey = event.key;//used for win/guesses leftcheck
        
        var userGuess = userKey.toUpperCase();//changes userKey to upper case
        
        if (computerChoice.includes(userGuess)){ 

            for (j = 0; j < computerChoice.length; j++) {

                if (userGuess == computerChoice[j]){  

                //Changes blanks in position to userGuess
                arrblanks[j] = userGuess;

                //Prints new arrblanks to html
                blanksText.textContent = arrblanks.join(" ");
                
                arr++;
                }
            }
        }  else {

                guessesLeft--; console.log(userKey);
                userText.textContent += event.key + " ";
        }
        
        guessesText.textContent = guessesLeft;
    }

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