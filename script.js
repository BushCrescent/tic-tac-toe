let currentTurn = 1;
let winner = "";
let symbol = "";
const player1Name = prompt("Enter Player 1 Name: ");
const player2Name = prompt("Enter Player 2 Name: ");

document.querySelector(".player-1-name").textContent = player1Name + ": ";
document.querySelector(".player-2-name").textContent = player2Name + ": ";
document.querySelector(".declare-player").textContent = player1Name + " Goes";

const playerArray = [
  {
    name: player1Name,
    winCount: 0,
  },
  {
    name: player2Name,
    winCount: 0,
  },
];

const allCellsElements = document.querySelectorAll(".cell");

const gameData = [...allCellsElements].map((element) => {
  return element.textContent;
});

const firstArray = gameData.splice(0, 3);
const secondArray = gameData.splice(0, 3);
const thirdArray = gameData.splice(0, 3);

const gameMatrix = [firstArray, secondArray, thirdArray];

allCellsElements.forEach((element) => {
    if (currentTurn === 1) {
      symbol = "X";
    } else if (currentTurn === 2) {
      symbol = "O";
    }
  element.addEventListener("click", (element) => handleCellClick(element, symbol));
});

const handleCellClick = (element, symbol) => {
  const targetElementDataCellId = element.target.getAttribute("data-cell-index");
  if (
    document.querySelector(`[data-cell-index="${targetElementDataCellId}"]`).textContent === "O" ||
    document.querySelector(`[data-cell-index="${targetElementDataCellId}"]`).textContent === "X"
  ) {
    return;
  }

  if (currentTurn === 1) {
    symbol = "X";
  } else if (currentTurn === 2) {
    symbol = "O";
  }

  switch (targetElementDataCellId) {
    case "0":gameMatrix[0][0] = symbol; break;
    case "1":gameMatrix[0][1] = symbol; break;
    case "2":gameMatrix[0][2] = symbol; break;
    case "3":gameMatrix[1][0] = symbol; break;
    case "4":gameMatrix[1][1] = symbol; break;
    case "5":gameMatrix[1][2] = symbol; break;
    case "6":gameMatrix[2][0] = symbol; break;
    case "7":gameMatrix[2][1] = symbol; break;
    case "8":gameMatrix[2][2] = symbol; break;
    default: break;
  }

  let count = 0;
  for (let i = 0; i < gameMatrix.length; i++) {
     for (let k = 0; k < gameMatrix[i].length; k++) {
       document.querySelector(`[data-cell-index="${count}"]`).textContent = gameMatrix[i][k]
       count++;
      }
  }

  if (currentTurn === 1) {
    currentTurn = 2;
    document.querySelector(
      ".declare-player"
    ).textContent = `${playerArray[1].name} Goes`;
  } else if (currentTurn === 2) {
    currentTurn = 1;
    document.querySelector(
      ".declare-player"
    ).textContent = `${playerArray[0].name} Goes`;
  }

  if (gameMatrix[0][0] !== "" && gameMatrix[0][1] !== "" && gameMatrix[0][2] !== "") {
    if (gameMatrix[0][0] === symbol && gameMatrix[0][1] === symbol && gameMatrix[0][2] === symbol) {
      var temp = document.getElementById(0);
      temp.classList.add("red");
      var temp1 = document.getElementById(1);
      temp1.classList.add("red");
      var temp2 = document.getElementById(2);
      temp2.classList.add("red");
      if(symbol === "X"){
        winner = playerArray[0].name;
        document.querySelector(".declare-player").textContent = `Winner is ${winner}!`;
        playerArray[0].winCount++;
      }else{
        winner = playerArray[1].name;
        document.querySelector(".declare-player").textContent = `Winner is ${winner}!`;
        playerArray[1].winCount++;
      }
    }
  }
  if (gameMatrix[1][0] !== "" && gameMatrix[1][1] !== "" && gameMatrix[1][2] !== "") {
    if (gameMatrix[1][0] === symbol && gameMatrix[1][1] === symbol && gameMatrix[1][2] === symbol) {
      var temp = document.getElementById(3);
      temp.classList.add("red");
      var temp1 = document.getElementById(4);
      temp1.classList.add("red");
      var temp2 = document.getElementById(5);
      temp2.classList.add("red");
      if(symbol === "X"){
        winner = playerArray[0].name;
        document.querySelector(".declare-player").textContent = `Winner is ${winner}!`;
        playerArray[0].winCount++;
      }else{
        winner = playerArray[1].name;
        document.querySelector(".declare-player").textContent = `Winner is ${winner}!`;
        playerArray[1].winCount++;
      }
    }
  }
  if (gameMatrix[2][0] !== "" && gameMatrix[2][1] !== "" && gameMatrix[2][2] !== "") {
    if (gameMatrix[2][0] === symbol && gameMatrix[2][1] === symbol && gameMatrix[2][2] === symbol) {
      var temp = document.getElementById(6);
      temp.classList.add("red");
      var temp1 = document.getElementById(7);
      temp1.classList.add("red");
      var temp2 = document.getElementById(8);
      temp2.classList.add("red");
      if(symbol === "X"){
        winner = playerArray[0].name;
        document.querySelector(".declare-player").textContent = `Winner is ${winner}!`;
        playerArray[0].winCount++;
      }else{
        winner = playerArray[1].name;
        document.querySelector(".declare-player").textContent = `Winner is ${winner}!`;
        playerArray[1].winCount++;
      }
    }
  }
  if (gameMatrix[0][0] !== "" && gameMatrix[1][0] !== "" && gameMatrix[2][0] !== "") {
    if (gameMatrix[0][0] === symbol && gameMatrix[1][0] === symbol && gameMatrix[2][0] === symbol) {
      var temp = document.getElementById(0);
      temp.classList.add("red");
      var temp1 = document.getElementById(3);
      temp1.classList.add("red");
      var temp2 = document.getElementById(6);
      temp2.classList.add("red");
      if(symbol === "X"){
        winner = playerArray[0].name;
        document.querySelector(".declare-player").textContent = `Winner is ${winner}!`;
        playerArray[0].winCount++;
      }else{
        winner = playerArray[1].name;
        document.querySelector(".declare-player").textContent = `Winner is ${winner}!`;
        playerArray[1].winCount++;
      }
    }
  }
  if (gameMatrix[0][1] !== "" && gameMatrix[1][1] !== "" && gameMatrix[2][1] !== "") {
    if (gameMatrix[0][1] === symbol && gameMatrix[1][1] === symbol && gameMatrix[2][1] === symbol) {
      var temp = document.getElementById(1);
      temp.classList.add("red");
      var temp1 = document.getElementById(4);
      temp1.classList.add("red");
      var temp2 = document.getElementById(7);
      temp2.classList.add("red");
      if(symbol === "X"){
        winner = playerArray[0].name;
        document.querySelector(".declare-player").textContent = `Winner is ${winner}!`;
        playerArray[0].winCount++;
      }else{
        winner = playerArray[1].name;
        document.querySelector(".declare-player").textContent = `Winner is ${winner}!`;
        playerArray[1].winCount++;
      }
  }
}
  if (gameMatrix[0][2] !== "" && gameMatrix[1][2] !== "" && gameMatrix[2][2] !== "") {
    if (gameMatrix[0][2] === symbol && gameMatrix[1][2] === symbol && gameMatrix[2][2] === symbol) {
      var temp = document.getElementById(2);
      temp.classList.add("red");
      var temp1 = document.getElementById(5);
      temp1.classList.add("red");
      var temp2 = document.getElementById(8);
      temp2.classList.add("red");
      if(symbol === "X"){
        winner = playerArray[0].name;
        document.querySelector(".declare-player").textContent = `Winner is ${winner}!`;
        playerArray[0].winCount++;
      }else{
        winner = playerArray[1].name;
        document.querySelector(".declare-player").textContent = `Winner is ${winner}!`;
        playerArray[1].winCount++;
      }
  }
}
  if (gameMatrix[0][0] !== "" && gameMatrix[1][1] !== "" && gameMatrix[2][2] !== "") {
    if (gameMatrix[0][0] === symbol && gameMatrix[1][1] === symbol && gameMatrix[2][2] === symbol) {
      var temp = document.getElementById(0);
      temp.classList.add("red");
      var temp1 = document.getElementById(4);
      temp1.classList.add("red");
      var temp2 = document.getElementById(8);
      temp2.classList.add("red");
      if(symbol === "X"){
        winner = playerArray[0].name;
        document.querySelector(".declare-player").textContent = `Winner is ${winner}!`;
        playerArray[0].winCount++;
      }else{
        winner = playerArray[1].name;
        document.querySelector(".declare-player").textContent = `Winner is ${winner}!`;
        playerArray[1].winCount++;
      }
    }
  }
  if (gameMatrix[0][2] !== "" && gameMatrix[1][1] !== "" && gameMatrix[2][0] !== "") {
    if (gameMatrix[0][2] === symbol && gameMatrix[1][1] === symbol && gameMatrix[2][0] === symbol) {
      var temp = document.getElementById(2);
      temp.classList.add("red");
      var temp1 = document.getElementById(4);
      temp1.classList.add("red");
      var temp2 = document.getElementById(6);
      temp2.classList.add("red");
      if(symbol === "X"){
        winner = playerArray[0].name;
        document.querySelector(".declare-player").textContent = `Winner is ${winner}!`;
        playerArray[0].winCount++;
      }else{
        winner = playerArray[1].name;
        document.querySelector(".declare-player").textContent = `Winner is ${winner}!`;
        playerArray[1].winCount++;
      }
  }
  }
  displayWinner(playerArray[0].winCount,playerArray[1].winCount)
  document.querySelector(".player-1-score").textContent = "" + 
    playerArray[0].winCount;
  document.querySelector(".player-2-score").textContent = "" + 
    playerArray[1].winCount;
};
const handleReset = () => {
  if (currentTurn === 1) {
    document.querySelector(".declare-player").textContent = `${playerArray[0].name} Goes`;
  } else {
    document.querySelector(".declare-player").textContent = `${playerArray[1].name} Goes`;
  }

  let count = 0;
  for (let i = 0; i < gameMatrix.length; i++) {
    for (let k = 0; k < gameMatrix[i].length; k++) {
      document.querySelector(`[data-cell-index="${count}"]`).textContent = ""
      gameMatrix[i][k] = "";
      count++;
     }
 }
for (let i = 0; i < 9; i++){
  var temp = document.getElementById(i);
  temp.classList.remove("red");
}
};

document.querySelector("#reset-btn").addEventListener("click", handleReset);

const displayWinner = (score1, score2) => {
  if (score1 === score2) {
    document.querySelector(".winner").textContent = "Game is a tie thus far";
  } else if (score1 > score2) {
    document.querySelector(".winner").textContent =
      player1Name + " has the highest score thus far";
  } else {
    document.querySelector(".winner").textContent =
      player2Name + " has the highest score thus far";
  }
};