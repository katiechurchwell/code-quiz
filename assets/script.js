//Global Variables
var startBtn = document.getElementById("startBtn");
var time = 60;
var counter;
var questionCount = 0;
var totalPoints = 0;

//Timer
function setTimer() {
  counter = setInterval(function () {
    document.getElementById("timer-container").innerHTML = "Timer: " + time;
    time--;

    if (time <= 0) {
      alert("Out of time!");
      endQuiz();
    }
  }, 1000);
}

//remove start button
function removeStart() {
  document.getElementById("start-button-container").remove();
  startBtn.remove();
}

//Questions
var questions = [
  {
    question: "What is NaN property in JavaScript?",
    correct: "Not-a-Number value",
    options: [
      "Nearly-a-Number value",
      "Not-a-Neutral value",
      "Not-a-Number value",
      "Delicious piece of bread value",
    ],
  },
  {
    question: "What does DOM stand for?",
    correct: "Document Object Model",
    options: [
      "Document Object Model",
      "Discourse Over Mapping",
      "Dynamic Oriented Modeling",
      "Dominos Oreos Macarons",
    ],
  },
  {
    question: "What are the three types of scope in JS?",
    correct: "Global, Local and Block",
    options: [
      "Galactic, Local and Blockchain",
      "Gigantic, Little and Big",
      "Global, Local and Block",
      "Garbanzo, Lima and Baked Beans",
    ],
  },
];

function presentQuestion() {
  var megaContainer = document.createElement("div");
  megaContainer.setAttribute("id", "megaContainer");
  document.body.appendChild(megaContainer);

  //displaying questions
  var questionContainer = document.createElement("div");
  questionContainer.setAttribute("id", "question");
  megaContainer.appendChild(questionContainer);
  questionContainer.textContent = questions[questionCount].question;

  //displaying answers
  questions[questionCount].options.forEach(function (answers) {
    var button = document.createElement("button");
    megaContainer.appendChild(button);
    button.setAttribute("class", "answers");
    button.textContent = answers;
    button.addEventListener("click", correctAnswer);
  });
}

//checking if correct answer was selected
function correctAnswer(event) {
  if (event.target.textContent === questions[questionCount].correct) {
    alert("Correct!");
    totalPoints++;
  } else {
    alert("Incorrect!");
    time -= 20;
  }
  questionCount++;
  nextQuestion();
}

// Next Question
function nextQuestion() {
  if (questionCount < questions.length) {
    document.getElementById("megaContainer").remove();
    presentQuestion();
  } else {
    endQuiz();
  }
}

//Start Quiz
function StartQuiz() {
  removeStart();
  presentQuestion();
  setTimer();
}

startBtn.addEventListener("click", StartQuiz);

//End Quiz
function endQuiz() {
  clearInterval(counter);
  localStorage.setItem("Score", totalPoints);
  window.location.replace("highscores.html");
}