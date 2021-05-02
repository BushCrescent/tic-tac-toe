var currentTurn = 1;

//add eventlistener to cells
var arrCells = document.querySelectorAll(".cell");
for (let i = 0; i < arrCells.length; i++) {
    arrCells[i].addEventListener("click", function () {
        console.log("******clicked");
        if(arrCells[i].textContent === "O" || arrCells[i].textContent === "X"){
            return;
        }
        //determine playter turn
        if (currentTurn === 1) {
            arrCells[i].textContent = "X";
        } else {
            arrCells[i].textContent = "O";
        }
        //toggle - switch player
        if (currentTurn === 1) {
            currentTurn = 2;
            //show upddate the text on the page
            document.querySelector(".declare-player").textContent = "Player 2 Goes";

        } else {
            currentTurn = 1;
            //show upddate the text on the page
            document.querySelector(".declare-player").textContent = "Player 1 Goes";
        }

        console.log("********current", currentTurn);

        checkForWinner();
    });
}

var winner = 0;
var checkForWinner = function () {
    //check for winner

    var cell0 = document.querySelector('[data-cell-index="0"]').textContent;
    var cell1 = document.querySelector('[data-cell-index="1"]').textContent;
    var cell2 = document.querySelector('[data-cell-index="2"]').textContent;
    var cell3 = document.querySelector('[data-cell-index="3"]').textContent;
    var cell4 = document.querySelector('[data-cell-index="4"]').textContent;
    var cell5 = document.querySelector('[data-cell-index="5"]').textContent;
    var cell6 = document.querySelector('[data-cell-index="6"]').textContent;
    var cell7 = document.querySelector('[data-cell-index="7"]').textContent;
    var cell8 = document.querySelector('[data-cell-index="8"]').textContent;

    //row wins
    if (cell0 !== "-" && cell1 !== "-" && cell2 !== "-") {
        if (cell0 === "X" && cell1 === "X" && cell2 === "X") {
            winner = "Player 1";
            console.log("winner:", winner);
        } else if (cell0 === "O" && cell1 === "O" && cell2 === "O"){
            winner = "Player 2";
            console.log("winner:", winner);
        }
    }
    if (cell3 !== "-" && cell4 !== "-" && cell5 !== "-") {
        if (cell3 === "X" && cell4 === "X" && cell5 === "X") {
            winner = "Player 1";
            console.log("winner:", winner);
        } else if (cell3 === "O" && cell4 === "O" && cell5 === "O"){
            winner = "Player 2";
            console.log("winner:", winner);
        }
    }
    if (cell6 !== "-" && cell7 !== "-" && cell8 !== "-") {
        if (cell6 === "X" && cell7 === "X" && cell8 === "X") {
            winner = "Player 1";
            console.log("winner:", winner);
        } else if (cell6 === "O" && cell7 === "O" && cell8 === "O"){
            winner = "Player 2";
            console.log("winner:", winner);
        }
    }
    //column
    if (cell0 !== "-" && cell3 !== "-" && cell6 !== "-") {
        if (cell0 === "X" && cell3 === "X" && cell6 === "X") {
            winner = "Player 1";
            console.log("winner:", winner);
        } else if (cell0 === "O" && cell3 === "O" && cell6 === "O"){
            winner = "Player 2";
            console.log("winner:", winner);
        }
    }
    if (cell1 !== "-" && cell4 !== "-" && cell7 !== "-") {
        if (cell1 === "X" && cell4 === "X" && cell7 === "X") {
            winner = "Player 1";
            console.log("winner:", winner);
        } else if (cell1 === "O" && cell4 === "O" && cell7 === "O"){
            winner = "Player 2";
            console.log("winner:", winner);
        }
    }
    if (cell2 !== "-" && cell5 !== "-" && cell8 !== "-") {
        if (cell2 === "X" && cell5 === "X" && cell8 === "X") {
            winner = "Player 1";
            console.log("winner:", winner);
        } else if (cell2 === "O" && cell5 === "O" && cell8 === "O"){
            winner = "Player 2";
            console.log("winner:", winner);
        }
    }
    //diagnol
    if (cell0 !== "-" && cell4 !== "-" && cell8 !== "-") {
        if (cell0 === "X" && cell4 === "X" && cell8 === "X") {
            winner = "Player 1";
            console.log("winner:", winner);
        } else if (cell0 === "O" && cell4 === "O" && cell8 === "O"){
            winner = "Player 2";
            console.log("winner:", winner);
        }
    }
    if (cell2 !== "-" && cell4 !== "-" && cell6 !== "-") {
        if (cell2 === "X" && cell4 === "X" && cell6 === "X") {
            winner = "Player 1";
            console.log("winner:", winner);
        } else if (cell2 === "O" && cell4 === "O" && cell6 === "O"){
            winner = "Player 2";
            console.log("winner:", winner);
        }
    }
};
