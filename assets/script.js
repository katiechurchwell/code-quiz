// WHEN I click the start button
var startBtn = document.getElementById("startBtn");

var StartQuiz = function () {
  console.log("hey");
};

startBtn.addEventListener("click", StartQuiz);

// THEN a timer starts and I am presented with a question
var counter = 10;

var countdown = function () {
  document.getElementById("timer-container").innerHTML = "Timer: " + counter;
  counter--;
  if (counter === -1) {
    clearInterval(startCountdown);
  }
};

var startCountdown = setInterval(countdown, 1000); //milliseconds

//Questions
const question1 = {
  q: "Question",
  a: "Answer",
};

// WHEN I answer a question
var presentQuestion = function () {
  //remove start button
  var startBtnContainer = document.getElementById("start-button-container");
  startBtnContainer.remove();
  startBtn.remove();

  //create div
  var questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "question");
  document.body.appendChild(questionContainer);
  //display question
  questionContainer.innerHTML = question1.q;
//create buttons for multiple choice
var answerContainer = document.createElement("button");
answerContainer.setAttribute("class", "answer");
document.body.appendChild(answerContainer);
answerContainer.innerHTML = question1.a;
//if else code for correct button
};
presentQuestion();

// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over

// THEN I can save my initials and score
