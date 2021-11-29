// WHEN I click the start button
var startBtn = document.getElementById("startBtn");

var StartQuiz = function () {
  console.log("hey");
};

startBtn.addEventListener("click", StartQuiz);

// THEN a timer starts and I am presented with a question
var counter = 60;

var countdown = function () {
  document.getElementById("timer-container").innerHTML = counter;
  counter--;
  if (counter === 0) {
    console.log("blastoff");
    clearInterval(startCountdown); //stops when 0
  }
};

var startCountdown = setInterval(countdown, 1000); //milliseconds

// WHEN I answer a question
var presentQuestion = function () {
  //create div
  //add text content from array?
  //create buttons for multiple choice
  //if else code for correct button
};

// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over

// THEN I can save my initials and score
