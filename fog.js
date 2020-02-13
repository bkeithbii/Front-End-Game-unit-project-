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

//Define remove color function (returns colors to original state)
function removeColor() {
  boxTop.style.backgroundImage = "url('/redbutton2.gif')";
  boxRight.style.backgroundImage = "url('/greenbutton1.gif')";
  boxLeft.style.backgroundImage = "url('/pinkbutton1.gif')";
  boxBottom.style.backgroundImage = "url('/Blue button.gif')";
}

//Define press color fucntion
function pressColor() {
  boxTop.style.backgroundImage = "url('/redcircle1.png')";
  boxRight.style.backgroundImage = "url('/greencircle1.png')";
  boxLeft.style.backgroundImage = "url('/pinkcircle3.png')";
  boxBottom.style.backgroundImage = "url('/bluecircle3.png')";
}

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
  cpuTurn = true;

  myInterval = setInterval(simonTurn, 800);
}

//Define simon turn function
function simonTurn() {
  on = false;
  if (press == turn) {
    clearInterval(myInterval);
    cpuTurn = false;
    removeColor();
    on = true;
  }
  if (cpuTurn) {
    removeColor();
    setTimeout(() => {
      if (cpuSeq[press] == 1) one();
      if (cpuSeq[press] == 2) two();
      if (cpuSeq[press] == 3) three();
      if (cpuSeq[press] == 4) four();
      press++;
    }, 250);
  }
}

//Define functions 1-4
function one() {
  boxTop.style.backgroundImage = "url('/redcircle1.png')";
}

function two() {
  boxRight.style.backgroundImage = "url('/greencircle1.png')";
}

function three() {
  boxLeft.style.backgroundImage = "url('/pinkcircle3.png')";
}

function four() {
  boxBottom.style.backgroundImage = "url('/bluecircle3.png')";
}

//Add event listeners to buttons for player interaction
boxTop.addEventListener("click", event => {
  if (on) {
    userSeq.push(1);
    verify();
    one();
  }
  if (!win) {
    setTimeout(() => {
      removeColor();
    }, 350);
  }
});

boxRight.addEventListener("click", event => {
  if (on) {
    userSeq.push(2);
    verify();
    two();
  }
  if (!win) {
    setTimeout(() => {
      removeColor();
    }, 350);
  }
});

boxLeft.addEventListener("click", event => {
  if (on) {
    userSeq.push(3);
    verify();
    three();
  }
  if (!win) {
    setTimeout(() => {
      removeColor();
    }, 350);
  }
});

boxBottom.addEventListener("click", event => {
  if (on) {
    userSeq.push(4);
    verify();
    four();
  }
  if (!win) {
    setTimeout(() => {
      removeColor();
    }, 350);
  }
});

//Define verify function to check for correct pattern by user
function verify() {
  if (userSeq[userSeq.length - 1] !== cpuSeq[userSeq.length - 1]) {
    correct = false;
  }

  if (userSeq.length == 20 && correct == true) {
    beatGame();
  }

  if (correct == false) {
    pressColor();
    turnCounter.innerHTML = "WRONG!";
    setTimeout(() => {
      turnCounter.innerHTML = turn;
      removeColor();

      if (strict) {
        playGame();
      } else {
        cpuTurn = true;
        press = 0;
        userSeq = [];
        correct = true;
        myInterval = setInterval(simonTurn, 800);
      }
    }, 800);
  }
  if (turn == userSeq.length && correct && !win) {
    turn++;
    userSeq = [];
    cpuTurn = true;
    press = 0;
    turnCounter.innerHTML = turn;
    myInterval = setInterval(simonTurn, 800);
  }
}

function beatGame() {
  pressColor();
  turnCounter.innerHTML = "YOU WIN!";
  on = false;
  win = true;
}

//Create a button for homepage
let instructions = document.querySelector("#instructions");
let info = document.querySelector(".info");
let playbutton = document.querySelector("#playgame");
let gamepage = document.querySelector("#GAME");
let homepage = document.querySelector("#HOMEPAGE");

instructions.addEventListener("click", showInfo);

function showInfo() {
  info.style.display = "flex";
  playhome.style.display = "none";
}

playbutton.addEventListener("click", showGame);

function showGame() {
  instructions.style.display = "none";
  gamepage.style.display = "contents";
  homepage.style.display = "none";
}
