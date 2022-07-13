//create constants
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const restart = document.querySelector("#restartBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "white";
const ballColor = "red";
const pinColor = "orange";
const unitSize = 25;

//declare varibles used in the game
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let ballX;
let ballY;
let score = 0;
//
restartBtn.addEventListener("click", resetStart);

gameStart();

function gameStart() {}

//setup game board with pins and lane layout with gutters?

//have button to start the bowling ball down the lane
//have pins explode
//show score add to existing score if not Zero
//reset pins for next bowl up to ten bowls per game
//start off game with no gutter balls

//make reset button restart game by resetting pins and reset the score to 0
