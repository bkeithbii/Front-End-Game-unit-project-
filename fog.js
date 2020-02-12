//Create all variables for elements in game
let cpuSeq = [];
let userSeq = [];
let press;
let turn;
let correct;
let cpuTurn;
let myInterval;
let strict = false;
let on = false;
let win;

//Reference elements in HTML for use in JS
const turnCounter = document.querySelector("#turn");
const boxTop = document.querySelector("#boxTop");
const boxRight = document.querySelector("#boxRight");
const boxLeft = document.querySelector("#boxLeft");
const boxBottom = document.querySelector("#boxBottom");
const startBtn = document.querySelector("#start");
const onBtn = document.querySelector("#on");
const strictBtn = document.querySelector("#strict");

//Begin adding event listeners for buttons
strictBtn.addEventListener("change", event => {
  if (strictBtn.checked == true) {
    strict = true;
  } else {
    strict = false;
  }
});

onBtn.addEventListener("change", event => {
  if (onBtn.checked == true) {
    on = true;
    turnCounter.innerHTML = "-";
  } else {
    on = false;
    turnCounter.innerHTML = "";
    removeColor();
    clearInterval(myInterval);
  }
});

startBtn.addEventListener("click", event => {
  if (on || win) {
    playGame();
  }
});

//Define play game function details
function playGame() {
  win = false;
  cpuSeq = [];
  userSeq = [];
  press = 0;
  myInterval = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  correct = true;
  for (let i = 0; i < 20; i++) {
    cpuSeq.push(Math.floor(Math.random() * 4) + 1);
  }
  console.log(cpuSeq);
}
