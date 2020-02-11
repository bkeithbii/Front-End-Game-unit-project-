//Create an array of colors
let colors = ["blue", "purple", "yellow", "silver"];

//Assign variables to different elements in game (tile, level, active, start/quit/instruction buttons)
let tiles = document.querySelectorAll(".tile");
let active = document.querySelectorAll(".active");
let level = document.querySelector(".scoreLog");
let startBtn = document.querySelector(".startButt");
let quitBtn = document.querySelector(".quitButt");
let instructions = document.querySelector(".instructions");

//Assign a color to each game tile with for loop
for (i = 0; i < colors.length; i++) {
  tiles[i].style.backgroundColor = colors[i];
}

//Assign active color to each game tile with for loop
