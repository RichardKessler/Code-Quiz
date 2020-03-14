//Declare variables to be accessed
//need the functions for the timer and game start button to activate

const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const questionContainerEl = document.getElementById('question-container');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer-buttons');
const resultEl = document.getElementById('result');

var shuffleQuest, currentQuest;

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
    shuffleQuest = questArr.sort(() => Math.random() - .5);
    currentQuest = 0;
    nextQuestion();
    console.log('Started');
}

function nextQuestion() {
    reset();
    showNext(shuffleQuest[currentQuest])
}

function showNext(question) {
    questionEl.innerHTML = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', getAnswer)
        answerEl.appendChild(button);
    });
}

function reset() {
    nextButton.classList.add('hide');
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }

}

function getAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatus(document.getElementById('result'), correct);
    Array.from(answerEl.children).forEach(button => {
        setStatus(button, button.dataset.correct);
    })
    if (shuffleQuest.length > currentQuest + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerHTML = 'Try Again';
        startButton.classList.remove('hide');
    }
}

function setStatus(element, correct) {
    clearStatus(element);
    if (correct) {

    } else {

    }
}

function clearStatus(element) {
    nextButton.classList.remove('hide');
    element.classList.remove('hide');
    element.classList.remove('hide');
}

// Clicking the start button starts the game
startButton.addEventListener('click', startQuiz);

nextButton.addEventListener('click', () => {
    currentQuest++;
    showNext();
})