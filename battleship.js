
// DECLARE AND INITIALIZE VARIABLES
var width = 11;
var height = 11;
var gridSize = 11;
var collisions = true;
var tempShip;
var shipLen;
var s = 'S';
var row;
var col;

// DECLARE AND INITIALIZE ARRAYS
var array = [width * height];
var tempArray = [width * height];
var setSArray = [width * height];
var alphabet = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

// CALLING ALL FUNCTIONS!
//userInput(); // Get user input AB..F5..
loadArray(width); // Setup board components
placeShip(); // Create and add ships to board
setArray(3, 4, 'X'); // Adding test value to board array
//setArray(2, 4, ' '); // Adding test value to board array
printArray(); // Print board to table in HTML
tdColor(); // Adds color styles to table (no .CSS file needed)