//Declare variables to be accessed
//need the functions for the timer and game start button to activate

const startButton = document.getElementById('start');
const questionContainerEl = document.getElementById('question-container');



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





function startQuiz() {
    startButton.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    console.log('Started');
}

function nextQuestion() {

}





// Clicking the start button starts the game
startButton.addEventListener('click', startQuiz);