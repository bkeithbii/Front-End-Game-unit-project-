//Create an array of colors
let colors = ["blue", "silver", "white", "red"];

//Assign a variable to the game tiles
let tiles = document.querySelectorAll(".tile");

//Assign a color to each game tile with for loop
for (i = 0; i < colors.length; i++) {
  tiles[i].style.backgroundColor = colors[i];
}
