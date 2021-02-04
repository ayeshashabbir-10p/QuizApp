const quizData = [
    {
        question: "Who is the Prime Minister of Pakistan?",
        a: "Nawaz Sharif",
        b: "Imran Khan",
        c: "Arif Alvi",
        d: "Zardari",
        correct: "b",
    },
    {
        question: "What is the capital of Pakistan?",
        a: "Islamabad",
        b: "Karachi",
        c: "Hyderabad",
        d: "Lahore",
        correct: "a",
    },
    {
        question: "How many continents are there?",
        a: "1",
        b: "5",
        c: "6",
        d: "7",
        correct: "d",
    },
    {
        question: "What is the largest country in the world?",
        a: "Russia",
        b: "China",
        c: "Brazil",
        d: "none of the above",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});