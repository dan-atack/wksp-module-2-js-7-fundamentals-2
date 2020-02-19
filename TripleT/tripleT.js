// Current Player Definition:

let currentPlayer = 1;
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const board = document.getElementById("board");
const indicator = document.querySelector("span");
const bod = document.querySelector("body");
const player1Marker = "X";
const player2Marker = "O";
const reset = document.querySelector("button");
let filled = [0,0,0,0,0,0,0,0,0];
let gameOn = true;
let victory = false;

indicator.innerText = `Player Turn: ${currentPlayer}`;

// Define Click handler function (does more or less everything):

function handleClick() {
    if (gameOn) {
        const cell = event.target.id;
    const currentCell = document.getElementById(cell);
    if (currentCell.innerText == "") {                                                      // if the square is empty
        currentCell.innerText = (currentPlayer === 1) ? player1Marker : player2Marker;      // fill it with the current player's mark
        filled.splice((cell[5]), 1, currentCell.innerText)                           // then, use the last index position of the cell id's name (its number) to find the spot in the array that has been taken, and put the symbol in there.
        console.log(filled);
    }
        if ((filled[0] === filled[1] && filled[1] === filled[2]) && (typeof filled[0] != "number")) {
            gameOn = false;
            victory = true;
            console.log(`Player ${currentPlayer} wins!`)
        } else if ((filled[3] === filled[4] && filled[4] === filled[5]) && (typeof filled[3] != "number")) {
            gameOn = false;
            victory = true;
            console.log(`Player ${currentPlayer} wins!`)
        } else if ((filled[6] === filled[7] && filled[7] === filled[8]) && (typeof filled[6] != "number")) {
            gameOn = false;
            victory = true;
            console.log(`Player ${currentPlayer} wins!`)
        } else if ((filled[0] === filled[3] && filled[3] === filled[6]) && (typeof filled[0] != "number")) {
            gameOn = false;
            victory = true;
            console.log(`Player ${currentPlayer} wins!`)
        } else if ((filled[1] === filled[4] && filled[4] === filled[7]) && (typeof filled[1] != "number")) {
            gameOn = false;
            victory = true;
            console.log(`Player ${currentPlayer} wins!`)
        } else if ((filled[2] === filled[5] && filled[5] === filled[8]) && (typeof filled[2] != "number")) {
            gameOn = false;
            victory = true;
            console.log(`Player ${currentPlayer} wins!`)
        } else if ((filled[0] === filled[4] && filled[4] === filled[8]) && (typeof filled[0] != "number")) {
            gameOn = false;
            victory = true;
            console.log(`Player ${currentPlayer} wins!`)
        } else if ((filled[2] === filled[4] && filled[4] === filled[6]) && (typeof filled[2] != "number")) {
            gameOn = false;
            victory = true;
            console.log(`Player ${currentPlayer} wins!`)
        }
    playerToggle();                                                                         // then toggle the turn
    indicator.innerText = `Player Turn: ${currentPlayer}`;                                  // and update the player turn indicator span
    }
    if ((!filled.includes(0)) && victory == false) {
        indicator.innerText = "DRAW!"
        gameOn = false;
    }
};

// Define Player Toggle Function:

function playerToggle() {
    currentPlayer = (currentPlayer === 1) ? 2 : 1;  // BOLD NEW NOTATION: condensed if statement for brevity: let variable be (condition) ? "output if yes" : "output if no"
    player1.classList.toggle('active');
    player2.classList.toggle('active');
};

function restart() {
    filled = [0,0,0,0,0,0,0,0,0];
    for (let i = 0; i <= 8; i++) {
        document.getElementById(`cell-${i}`).innerText = "";
    }
    gameOn = true;
    victory = false;
    currentPlayer = 1; 
}

// Victory conditions:
 /*
switch(arr) {
    case ((arr[0] == "X") && (arr[1] == "X") && (arr[2] == "X")):
        console.log("Player X won with the top row");
        break;
    case ("B"):
        console.log("B");
        break;
};
*/
// Hook up board to script:

board.addEventListener("click", handleClick);
reset.addEventListener("click", restart);