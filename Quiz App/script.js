const quizData = [
  {
    question: "Question 1: What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false }
    ]
  },
  {
    question: "Question 2: Who painted the Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: false },
      { text: "Michelangelo", correct: false }
    ]
  },
  {
    question: "Question 3: What is the largest planet in our solar system?",
    answers: [
      { text: "Jupiter", correct: true },
      { text: "Saturn", correct: false },
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: false }
    ]
  },
  {
    question: "Question 4: Who wrote the play 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "George Bernard Shaw", correct: false },
      { text: "Arthur Miller", correct: false },
      { text: "Anton Chekhov", correct: false }
    ]
  },
  {
    question: "Question 5: Which country won the FIFA World Cup in 2018?",
    answers: [
      { text: "France", correct: true },
      { text: "Brazil", correct: false },
      { text: "Germany", correct: false },
      { text: "Spain", correct: false }
    ]
  },
  {
    question: "Question 6: Who is known as the 'Father of Computer Science'?",
    answers: [
      { text: "Alan Turing", correct: true },
      { text: "Bill Gates", correct: false },
      { text: "Steve Jobs", correct: false },
      { text: "Mark Zuckerberg", correct: false }
    ]
  },
  {
    question: "Question 7: What is the chemical symbol for gold?",
    answers: [
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
      { text: "Cu", correct: false },
      { text: "Fe", correct: false }
    ]
  },
  {
    question: "Question 8: Who painted the 'The Starry Night'?",
    answers: [
      { text: "Vincent van Gogh", correct: true },
      { text: "Salvador Dali", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Claude Monet", correct: false }
    ]
  },
  {
    question: "Question 9: Which planet is known as the 'Red Planet'?",
    answers: [
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Mercury", correct: false },
      { text: "Jupiter", correct: false }
    ]
  },
  {
    question: "Question 10: Who wrote the novel 'To Kill a Mockingbird'?",
    answers: [
      { text: "Harper Lee", correct: true },
      { text:"F. Scott Fitzgerald", correct: false },
{ text: "J.D. Salinger", correct: false },
{ text: "Mark Twain", correct: false }
]
},
{
question: "Question 11: Which artist painted the famous artwork 'The Persistence of Memory'?",
answers: [
{ text: "Salvador Dali", correct: true },
{ text: "Pablo Picasso", correct: false },
{ text: "Vincent van Gogh", correct: false },
{ text: "Leonardo da Vinci", correct: false }
]
},
{
question: "Question 12: What is the largest ocean on Earth?",
answers: [
{ text: "Pacific Ocean", correct: true },
{ text: "Atlantic Ocean", correct: false },
{ text: "Indian Ocean", correct: false },
{ text: "Arctic Ocean", correct: false }
]
},
{
question: "Question 13: Who invented the telephone?",
answers: [
{ text: "Alexander Graham Bell", correct: true },
{ text: "Thomas Edison", correct: false },
{ text: "Nikola Tesla", correct: false },
{ text: "Albert Einstein", correct: false }
]
},
{
question: "Question 14: Which famous scientist developed the theory of relativity?",
answers: [
{ text: "Albert Einstein", correct: true },
{ text: "Isaac Newton", correct: false },
{ text: "Stephen Hawking", correct: false },
{ text: "Marie Curie", correct: false }
]
},
{
question: "Question 15: What is the national animal of India?",
answers: [
{ text: "Bengal Tiger", correct: true },
{ text: "Lion", correct: false },
{ text: "Elephant", correct: false },
{ text: "Peacock", correct: false }
]
},
// Add more questions here...
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const submitButton = document.getElementById("submit-button");
const scoreContainer = document.getElementById("score-container");

function showQuestion() {
  const questionData = quizData[currentQuestion];
  questionContainer.textContent = questionData.question;

  answerButtons.innerHTML = "";
  questionData.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.addEventListener("click", () => selectAnswer(answer.correct));
    answerButtons.appendChild(button);
  });
}

function selectAnswer(correct) {
  if (correct) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionContainer.style.display = "none";
  answerButtons.style.display = "none";
  submitButton.style.display = "none";

  scoreContainer.textContent = `Your Score: ${score} out of ${quizData.length}`;
  scoreContainer.style.display = "block";
}

submitButton.addEventListener("click", showScore);

showQuestion();
