// define global variables
let currentTurn = 1;
let winner = "";
const handleDisplay = () => {
  const player1Name = prompt("Enter Player 1 Name: ");
  const player2Name = prompt("Enter Player 2 Name: ");
  
  document.querySelector(".player-1-name").textContent = player1Name + ": ";
  document.querySelector(".player-2-name").textContent = player2Name + ": ";
  document.querySelector(".declare-player").textContent = player1Name + " Goes";
}


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

const handleCellClick = (index) => {
  setUpCells(index);
  checkForWinner();
  displayWinner(playerArray[0].winCount, playerArray[1].winCount);
};

//add event listener to cells
const assignElementEventListeners = () => {
  document.querySelector("#reset-btn").addEventListener("click", handleReset);
  const arrCells = document.querySelectorAll(".cell");
  for (let i = 0; i < arrCells.length; i++) {
    arrCells[i].addEventListener("click", () => handleCellClick(i));
  }
}

const setUpCells = (index) => {
  if (
    arrCells[index].textContent === "O" ||
    arrCells[index].textContent === "X"
  ) {
    return;
  }
  //determine playter turn
  if (currentTurn === 1) {
    arrCells[index].textContent = "X";
  } else {
    arrCells[index].textContent = "O";
  }
  //toggle - switch player
  if (currentTurn === 1) {
    currentTurn = 2;
    //show upddate the text on the page
    document.querySelector(
      ".declare-player"
    ).textContent = `${playerArray[1].name} Goes`;
  } else {
    currentTurn = 1;
    //show upddate the text on the page
    document.querySelector(
      ".declare-player"
    ).textContent = `${playerArray[0].name} Goes`;
  }
};

const handleReset = () => {
  if (currentTurn === 1) {
    document.querySelector(
      ".declare-player"
    ).textContent = `${playerArray[0].name} Goes`;
  } else {
    document.querySelector(
      ".declare-player"
    ).textContent = `${playerArray[1].name} Goes`;
  }
  document.querySelector('[data-cell-index="0"]').textContent = "-";
  document.querySelector('[data-cell-index="1"]').textContent = "-";
  document.querySelector('[data-cell-index="2"]').textContent = "-";
  document.querySelector('[data-cell-index="3"]').textContent = "-";
  document.querySelector('[data-cell-index="4"]').textContent = "-";
  document.querySelector('[data-cell-index="5"]').textContent = "-";
  document.querySelector('[data-cell-index="6"]').textContent = "-";
  document.querySelector('[data-cell-index="7"]').textContent = "-";
  document.querySelector('[data-cell-index="8"]').textContent = "-";
};

//row 4
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

const checkForWinner = () => {
  //check for winner

  const cell0 = document.querySelector('[data-cell-index="0"]').textContent;
  const cell1 = document.querySelector('[data-cell-index="1"]').textContent;
  const cell2 = document.querySelector('[data-cell-index="2"]').textContent;
  const cell3 = document.querySelector('[data-cell-index="3"]').textContent;
  const cell4 = document.querySelector('[data-cell-index="4"]').textContent;
  const cell5 = document.querySelector('[data-cell-index="5"]').textContent;
  const cell6 = document.querySelector('[data-cell-index="6"]').textContent;
  const cell7 = document.querySelector('[data-cell-index="7"]').textContent;
  const cell8 = document.querySelector('[data-cell-index="8"]').textContent;

  //row wins
  if (cell0 !== "-" && cell1 !== "-" && cell2 !== "-") {
    if (cell0 === "X" && cell1 === "X" && cell2 === "X") {
      winner = playerArray[0].name;
      document.querySelector(
        ".declare-player"
      ).textContent = `Winner is ${winner}!`;
      playerArray[0].winCount++;
    } else if (cell0 === "O" && cell1 === "O" && cell2 === "O") {
      winner = playerArray[1].name;
      document.querySelector(
        ".declare-player"
      ).textContent = `Winner is ${winner}!`;
      playerArray[1].winCount++;
    }
  }
  if (cell3 !== "-" && cell4 !== "-" && cell5 !== "-") {
    if (cell3 === "X" && cell4 === "X" && cell5 === "X") {
      winner = playerArray[0].name;
      document.querySelector(
        ".declare-player"
      ).textContent = `Winner is ${winner}!`;
      playerArray[0].winCount++;
    } else if (cell3 === "O" && cell4 === "O" && cell5 === "O") {
      winner = playerArray[1].name;
      document.querySelector(
        ".declare-player"
      ).textContent = `Winner is ${winner}!`;
      playerArray[1].winCount++;
    }
  }
  if (cell6 !== "-" && cell7 !== "-" && cell8 !== "-") {
    if (cell6 === "X" && cell7 === "X" && cell8 === "X") {
      winner = playerArray[0].name;
      document.querySelector(
        ".declare-player"
      ).textContent = `Winner is ${winner}!`;
      playerArray[0].winCount++;
    } else if (cell6 === "O" && cell7 === "O" && cell8 === "O") {
      winner = playerArray[1].name;
      document.querySelector(
        ".declare-player"
      ).textContent = `Winner is ${winner}!`;
      playerArray[1].winCount++;
    }
  }
  //column
  if (cell0 !== "-" && cell3 !== "-" && cell6 !== "-") {
    if (cell0 === "X" && cell3 === "X" && cell6 === "X") {
      winner = playerArray[0].name;
      document.querySelector(
        ".declare-player"
      ).textContent = `Winner is ${winner}!`;
      playerArray[0].winCount++;
    } else if (cell0 === "O" && cell3 === "O" && cell6 === "O") {
      winner = playerArray[1].name;
      document.querySelector(
        ".declare-player"
      ).textContent = `Winner is ${winner}!`;
      playerArray[1].winCount++;
    }
  }
  if (cell1 !== "-" && cell4 !== "-" && cell7 !== "-") {
    if (cell1 === "X" && cell4 === "X" && cell7 === "X") {
      winner = playerArray[0].name;
      document.querySelector(
        ".declare-player"
      ).textContent = `Winner is ${winner}!`;
      playerArray[0].winCount++;
    } else if (cell1 === "O" && cell4 === "O" && cell7 === "O") {
      winner = playerArray[1].name;
      document.querySelector(
        ".declare-player"
      ).textContent = `Winner is ${winner}!`;
      playerArray[1].winCount++;
    }
  }
  if (cell2 !== "-" && cell5 !== "-" && cell8 !== "-") {
    if (cell2 === "X" && cell5 === "X" && cell8 === "X") {
      winner = playerArray[0].name;
      document.querySelector(
        ".declare-player"
      ).textContent = `Winner is ${winner}!`;
      playerArray[0].winCount++;
    } else if (cell2 === "O" && cell5 === "O" && cell8 === "O") {
      winner = playerArray[1].name;
      document.querySelector(
        ".declare-player"
      ).textContent = `Winner is ${winner}!`;
      playerArray[1].winCount++;
    }
  }
  //diagnol
  if (cell0 !== "-" && cell4 !== "-" && cell8 !== "-") {
    if (cell0 === "X" && cell4 === "X" && cell8 === "X") {
      winner = playerArray[0].name;
      document.querySelector(
        ".declare-player"
      ).textContent = `Winner is ${winner}!`;
      playerArray[0].winCount++;
    } else if (cell0 === "O" && cell4 === "O" && cell8 === "O") {
      winner = playerArray[1].name;
      document.querySelector(
        ".declare-player"
      ).textContent = `Winner is ${winner}!`;
      playerArray[1].winCount++;
    }
  }
  if (cell2 !== "-" && cell4 !== "-" && cell6 !== "-") {
    if (cell2 === "X" && cell4 === "X" && cell6 === "X") {
      winner = playerArray[0].name;
      document.querySelector(
        ".declare-player"
      ).textContent = `Winner is ${winner}!`;
      playerArray[0].winCount++;
    } else if (cell2 === "O" && cell4 === "O" && cell6 === "O") {
      winner = playerArray[1].name;
      document.querySelector(
        ".declare-player"
      ).textContent = `Winner is ${winner}!`;
      playerArray[1].winCount++;
    }
  }

  document.querySelector(".player-1-score").textContent = ":" + 
    playerArray[0].winCount;
  document.querySelector(".player-2-score").textContent = ":" + 
    playerArray[1].winCount;
};
//have a tie function
/*
first for loop checks if the squares have been filled and result in no win
(this is where it can have the nested if statements)
second for loop resets the boxes
parameter?

*/
handleDisplay();
assignElementEventListeners();