// WHEN I click the start button
var startBtn = document.getElementById("startBtn");

var StartQuiz = function () {
  removeStart();
  presentQuestion();
  setTimer(60);
};

startBtn.addEventListener("click", StartQuiz);

// THEN a timer starts and I am presented with a question
function setTimer(time) {
  //start the interval
  var counter = setInterval(function () {
    document.getElementById("timer-container").innerHTML = "Timer: " + time; //write to div
    time-- || stopTimer(time);
  }, 1000);

  function stopTimer(time) {
    clearInterval(counter); //clear (stop) if its 0
    alert("Out of time!"); //save highscore, end round needed
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
    question: "Q1",
    answer: "Correct1",
    options: ["1", "2", "3"],
  },
  {
    question: "Q2",
    answer: "Correct2",
    options: ["5", "6", "7"],
  }
];

var questionCount = 0;

// //correct answers
//   var correct = document.getElementById("3");
//   correct.addEventListener("click", correctAnswer);

//Object.keys(questions).length; // perfect for number of QUESTIONS

function presentQuestion() {
  //create div
  var megaContainer = document.createElement("div");
  megaContainer.setAttribute("class", "megaContainer");
  document.body.appendChild(megaContainer);

  //DISPLAYING QUESTIONS
  //create container
  var questionContainer = document.createElement("div");
  questionContainer.setAttribute("id", "question");
  megaContainer.appendChild(questionContainer);
  questionContainer.textContent = questions[questionCount].question;

  //create answer buttons
  questions[questionCount].options.forEach(function (answers) {
    var button = document.createElement("button");
    megaContainer.appendChild(button);
    button.setAttribute("class", "answers");
    button.textContent = answers;
  });

   //include correct answer
   var correctButton = document.createElement("button");
   megaContainer.appendChild(correctButton);
   correctButton.setAttribute("class", "answers");
   correctButton.setAttribute("id", (questions[questionCount].answer.selectedIndex));
   button.textContent = questions[questionCount].answer
};

//determine selection, add to localStorage
var correctAnswer = function () {
  alert("Correct!");
  localStorage.setItem("Correct", +1); //will this update value?

  //clear contents
  document.getElementById("question").innerHTML = "";
  document.getElementsByClassName("answers").innerHTML = ""; //not working
};
// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over

// THEN I can save my initials and score
