document.addEventListener("DOMContentLoaded", () => {
    // Initialize variables to manage game state
    let board = document.getElementById("board");
    let status = document.getElementById("status");
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
    let computerTurnEnabled = false;
    let playerMoves = 0;