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
    // Function to handle a player's move when a cell is clicked
    function handleCellClick(index) {
        // Check if the clicked cell is empty and the game is still ongoing
        if (gameBoard[index] === "" && !checkWinner()) {
            // Update the game board with the current player's move
            gameBoard[index] = currentPlayer;
            updateBoard();
            playerMoves++;

            // Check for a winner or a draw
            if (checkWinner()) {
                status.textContent = `${currentPlayer} wins!`;
            } else if (gameBoard.every((cell) => cell !== "")) {
                status.textContent = "It's a draw!";
            } else {
                // Switch to the other player's turn
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                status.textContent = `Player ${currentPlayer}'s turn`;

                // Enable computer's turn after player's second move
                if (computerTurnEnabled && currentPlayer === "O" && playerMoves >= 2) {
                    setTimeout(window.playAgainstComputer, 1000);
                }
            }
        }
    }
    // Function to update the visual representation of the game board
    function updateBoard() {
        let cells = document.querySelectorAll(".cell");
        cells.forEach((cell, index) => {
            cell.textContent = gameBoard[index];
        });
    }





    });