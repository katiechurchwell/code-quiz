var startBtn = document.getElementById("startBtn");
var time = 60;

//Start Quiz
var StartQuiz = function () {
  removeStart();
  presentQuestion();
  setTimer(time);
};

startBtn.addEventListener("click", StartQuiz);

//Timer
function setTimer(time) {
  var counter = setInterval(function () {
    document.getElementById("timer-container").innerHTML = "Timer: " + time;
    time-- || stopTimer(time);
  }, 1000);

  function stopTimer(time) {
    clearInterval(counter);
    alert("Out of time!"); //save highscore, end round needed
    window.location.replace("highscores.html"); //or endGame function?
  }
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
    options: ["Nearly-a-Number value", "Not-a-Neutral value", "Not-a-Number value", "Delicious piece of bread value"],
  },
  {
    question: "What does DOM stand for?",
    correct: "Document Object Model",
    options: ["Document Object Model", "Discourse Over Mapping", "Dynamic Oriented Modeling", "Dominatrix"],
  },
  {
    question: "What are the three types of scope in JS?",
    correct: "Global, Local and Block",
    options: ["Galactic, Local and Blockchain", "Gigantic, Little and Big", "Global, Local and Block", "Garbanzo, Lima and Baked Beans"],
  },
];

var questionCount = 0;
var totalPoints = 0;

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
  }
  else {
    alert("Incorrect!");
    time -= 5;
  }
  questionCount++;
  nextQuestion();
  };

// Next Question
  function nextQuestion () {
    if (questionCount < questions.length) {
    document.getElementById("megaContainer").remove();
    presentQuestion();
    }
    else {
      window.location.replace("highscores.html");
    }
  };


// WHEN all questions are answered or the timer reaches 0 THEN the game is over
// WHEN the game is over THEN I can save my initials and score
