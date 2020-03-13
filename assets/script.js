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



const questArr = [{
        question: 'Which of these is not a javascript data type?',
        answers: [{
                text: 'Sting',
                correct: false
            },
            { text: 'Boolean', correct: false },
            { text: 'HTML', correct: true },
            { text: 'Number', correct: false }
        ]
    },
    {
        question: 'Which of these is not a looping structure?',
        answers: [{ text: 'For', correct: false },
            { text: 'While', correct: false },
            { text: 'Do-while', correct: false },
            { text: 'Loop', correct: true }
        ]
    },
    {
        question: 'Which of these is not a type of pop-up box?',
        answers: [{ text: 'Card', correct: true },
            { text: 'Prompt', correct: false },
            { text: 'Alert', correct: false },
            { text: 'Confirm', correct: false }
        ]
    },
    {
        question: 'Which of these is not a boolean operator in Javascript?',
        answers: [{ text: '&&', correct: false },
            { text: '%%', correct: true },
            { text: '||', correct: false },
            { text: '!', correct: false }
        ]
    },
    {
        question: 'Which of these does not declare a variable?',
        answers: [{ text: 'Var', correct: false },
            { text: 'Let', correct: false },
            { text: 'Const', correct: false },
            { text: 'Add', correct: true }
        ]
    }
]




function gameTime(function, 1000) {
    var gt =
}




// Play button on click run the game logic
$("#start").click(function() {
    timeEl.textContent = "Time Left: " + gameTime();
})