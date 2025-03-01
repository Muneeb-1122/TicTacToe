document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const nextButton = document.querySelector("#nextButton");
  const gameContainer = document.querySelector(".game-container");

  // Function to handle the button click
  function startGame() {
    body.style.background =
      "linear-gradient(192deg, #FFF -0.24%, #F5F5F5 100%), linear-gradient(168deg, #F5F5F5 0%, #FFF 100%)";
    main.style.display = "none";
    header.style.display = "none";
    gameContainer.style.display = "flex"; // Fix display property
  }

  // Adding event listener
  nextButton.addEventListener("click", startGame);
});

var cells = document.querySelectorAll(".cell");
var turnX = true; // X starts first
var gameOver = false; // Game status tracker
var turn_x = document.querySelector(".turn-x");
var turn_o = document.querySelector(".turn-o");
var score_x = document.querySelector(".score-x");
var score_o = document.querySelector(".score-o");
var scoreboard = document.querySelector(".scoreboard");

let possibleWinners = [
  [0, 1, 2], // row 1
  [3, 4, 5], // row 2
  [6, 7, 8], // Row 3
  [0, 3, 6], // column 1
  [1, 4, 7], // column 2
  [2, 5, 8], // Column 3
  [0, 4, 8], // diagonal 1
  [2, 4, 6], // Diagonal 2
];

cells.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.querySelector(".cell h4").innerText !== "" || gameOver) return; // Stop if already filled or game over

    let h4 = box.querySelector("h4");
    h4.innerText = turnX ? "X" : "O";
    h4.style.color = turnX ? "#007bff" : "#800080";
    h4.style.textShadow = turnX
      ? "2px 4px 8px rgba(1, 111, 231, 0.47)"
      : "2px 4px 8px rgba(89, 13, 143, 0.32)";

    whichTurn();

    turnX = !turnX; // Toggle turn
    CheckWinner();
  });
});

const whichTurn = () => {
  if (turnX) {
    score_x.style.background = "#007bff";
    score_x.style.color = "#fff";
    score_o.style.background = "transparent";
    score_o.style.color = "#000";
  } else {
    score_x.style.background = "transparent";
    score_x.style.color = "#000";
    score_o.style.background = "#800080";
    score_o.style.color = "#fff";
  }
};

const CheckWinner = () => {
  for (let pattern of possibleWinners) {
    let [a, b, c] = pattern;
    let pos1 = cells[a].innerText;
    let pos2 = cells[b].innerText;
    let pos3 = cells[c].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      console.log("Winner: " + pos1);
      showWinner(pos1);
      gameOver = true; // Stop further moves
      scoreboard.style.display = "none";

      return;
    }
  }
  if ([...cells].every((cell) => cell.innerText !== "")) {
    gameDraw();
    gameOver = true;
  }
};

let gameDraw = () => {
  winnerDisplay.innerText = "Match Tie!";
  winnerDisplay.style.display = "flex";
}

var winnerDisplay = document.querySelector(".winner-display");
var scoreX = document.querySelector(".score-x");
var scoreO = document.querySelector(".score-o");

var scoreCount = { X: 0, O: 0 }; // Track scores

var showWinner = (winner) => {
  winnerDisplay.innerText = `Player ${winner} Wins!`;
  winnerDisplay.style.display = "flex";
  upgradeScore(winner); // Call score update function
};

let upgradeScore = (winner) => {
  if (winner === "X") {
    scoreCount.X++; //
    scoreX.innerText = scoreCount.X;
  } else {
    scoreCount.O++;
    scoreO.innerText = scoreCount.O;
  }
};

// Initialize background for first turn
whichTurn();

const enableBoxes = () => {
  for (let box of cells) {
    box.disabled = flase;
    box.innerText = "";
  }
};

let reset = document.querySelector(".restart");

reset.addEventListener("click", () => {
  turnX = true;
  gameOver = false;
  scoreboard.style.display = "flex";
  winnerDisplay.style.display = "none";

  // Reset all cells
  cells.forEach((box) => {
    let h4 = box.querySelector("h4");
    h4.innerText = "";
    h4.style.textShadow = "none";
  });

  whichTurn();
});

let newGame = document.querySelector(".new-game");

newGame.addEventListener("click", () => {
  turnX = true;
  gameOver = false;
  scoreboard.style.display = "flex";
  winnerDisplay.style.display = "none";

  cells.forEach((box) => {
    let h4 = box.querySelector("h4");
    h4.innerText = "";
    h4.style.textShadow = "none";
    scoreX.innerHTML = "0";
    scoreO.innerHTML = "0";
  });

  whichTurn();
});