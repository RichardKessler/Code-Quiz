//Declare variables to be accessed
//need the functions for the timer and game start button to activate

const timeEl = document.querySelector("#timer");
const quizEl = document.querySelector("#quiz-container");
const btn1El = document.querySelector("#btn1");
const btn2El = document.querySelector("#btn2");
const btn3El = document.querySelector("#btn3");
const btn4El = document.querySelector("#btn4");
const startEl = document.querySelector("#start");


const lostTime = 10;



var highScore = 0;
var playerScore = 0;



const questArr1 = ["Question 1 ", ];
const questArr2 = ["Question 2 ", ];
const questArr3 = ["Question 3 ", ];
const questArr4 = ["Question 4 ", ];
const questArr5 = ["Question 5 ", ];







// Play button on click run the game logic
$("#start").click(function() {
    timeEl.textContent = "Timer Left: " +
})