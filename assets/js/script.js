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


    // Function to check if there is a winner based on the current game state
    function checkWinner() {
        let winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        // Check each winning pattern for a match
        for (let pattern of winPatterns) {
            let [a, b, c] = pattern;
            if (
                gameBoard[a] !== "" &&
                gameBoard[a] === gameBoard[b] &&
                gameBoard[b] === gameBoard[c]
            ) {
                highlightWinningCells(pattern);
                return true;
            }
        }
        return false;
    }

    // Function to visually highlight the winning cells
    function highlightWinningCells(pattern) {
        let cells = document.querySelectorAll(".cell");
        pattern.forEach((index) => {
            cells[index].classList.add("winner");
            cells[index].classList.add(gameBoard[index]);
        });
    }

    // Reset the game state to start a new game
    window.resetGame = function () {
        gameBoard = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        status.textContent = `Player ${currentPlayer}'s turn`;
        const cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.classList.remove("winner", "X", "O");
            cell.textContent = "";
        });
        computerTurnEnabled = false;
        playerMoves = 0;
    };

    // Function to initiate the computer's turn
    window.playAgainstComputer = function () {
        status.textContent = "Playing against Computer";
        document.querySelectorAll(".cell").forEach(cell => cell.removeEventListener("click", handleCellClick));

        // Function for the computer's turn
        function computerTurn() {
            let emptyCells = gameBoard.reduce((acc, value, index) => {
                if (value === "") {
                    acc.push(index);
                }
                return acc;
            }, []);

            // Choose a random empty cell for the computer
            if (emptyCells.length > 0) {
                let randomIndex = Math.floor(Math.random() * emptyCells.length);
                let computerMove = emptyCells[randomIndex];

                // Update the game board and check for a winner or draw
                gameBoard[computerMove] = currentPlayer;
                updateBoard();

                if (checkWinner()) {
                    status.textContent = "Computer wins!";
                } else if (gameBoard.every(cell => cell !== "")) {
                    status.textContent = "It's a draw!";
                } else {
                    // Switch to the player's turn
                    currentPlayer = currentPlayer === "X" ? "O" : "X";
                    status.textContent = `Player ${currentPlayer}'s turn`;
                    // Enable player's turn after computer's turn
                    document.querySelectorAll(".cell").forEach(cell => cell.addEventListener("click", handleCellClick));
                }
            }
        }

        // Enable computer's turn only if the player has chosen to play against the computer
        if (computerTurnEnabled) {
            // Trigger computer's turn after the player's second move
            setTimeout(computerTurn, 1000);
        }
    };

    // Function to enable computer's turn when clicking the "Computer" button
    window.enableComputerTurn = function () {
        computerTurnEnabled = true;
    };





    });