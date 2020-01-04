var games = ["Super Mario World", "Final Fantasy III", "Sonic the Hedgehog", "Road Rash", "Legend of Zelda", "Mortal Kombat", "Wolfstein", "Dune", "Doom", "Virtua Fighter", "Master of Orion", "Warcraft", "Star Wars Dark Forces", "Need for Speed", "Quake"];

var gamesBlank = games.map(myFunction); //This line creates a new array by performing a function on each array element

document.getElementById("demo").innerHTML = games[0]; //This line prints an element from the array

document.write(games.length); //This line prints the length of the array

// The code below will join all array elements into a string, using * as a separator
// document.getElementById("demo").innerHTML = games.join(" * "); 