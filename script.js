const questions = [
  {
    question: "What does HTML stand for?",
    answers: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language"],
    correct: 0
  },
  {
    question: "Which language styles a web page?",
    answers: ["Python", "CSS", "SQL"],
    correct: 1
  },
  {
    question: "Which keyword creates a variable that can change?",
    answers: ["const", "let", "fixed"],
    correct: 1
  }
];

const progress = document.getElementById("progress");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;

function showQuestion() {
  const q = questions[currentIndex];

  progress.textContent = "Question " + (currentIndex + 1) + " of " + questions.length;
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  feedback.textContent = "";

  for (let i = 0; i < q.answers.length; i++) {
    const button = document.createElement("button");
    button.textContent = q.answers[i];

    button.addEventListener("click", function () {
      if (i === q.correct) {
        feedback.textContent = "Correct!";
      } else {
        feedback.textContent = "Not quite. The answer is: " + q.answers[q.correct];
      }
    });

    answersEl.appendChild(button);
  }
}

showQuestion();