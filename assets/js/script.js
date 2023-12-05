document.addEventListener("DOMContentLoaded", () => {
    // Initialize variables to manage game state
    let board = document.getElementById("board");
    let status = document.getElementById("status");
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let computerTurnEnabled = false;
    let playerMoves = 0;

    // Create the game board by adding click event listeners to each cell
    for (let i = 0; i < 9; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("click", () => handleCellClick(i));
        board.appendChild(cell);
    }
    });