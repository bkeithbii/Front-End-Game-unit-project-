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

//Create an array for computer sequence (simon) and user sequence
let cpuSeq = [];
let userSeq = [];

//Assign level variable a starting value
level.innerHTML = "Level:" + " " + 0;

//Assign id a starting value
id = 0;

//Begin creating functionality for start button
startBtn.addEventListener("click", startGame);

//Define start game function
function startGame() {
  level.innerHTML++;
  startSeq();
}

//Define start sequence function (computer sequence)
function startSeq() {
  console.log(level.innerHTML);
  randomColor();
  let i = 0;
  let myInt = setInterval(interval, 1000);
}

//Define function to generate random color selection
function randomColor() {
  let random = Math.floor(Math.random() * 4);
  cpuSeq.push(random);
}

//Define a set interval function for showing the tile color being pressed
function interval() {
  id = cpuSeq[i];
  color = tiles[i];
  console.log(id + " " + color);
}
