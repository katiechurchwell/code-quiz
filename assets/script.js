// WHEN I click the start button
var startBtn = document.getElementById("startBtn");

var StartQuiz = function () {
  presentQuestion();
  countdown();
};

startBtn.addEventListener("click", StartQuiz);

// THEN a timer starts and I am presented with a question
var counter = 10;

var countdown = function () {
  document.getElementById("timer-container").innerHTML = "Timer: " + counter;
  counter--;
  if (counter === -1) {
    clearInterval(startCountdown); //add function to alert, save highscore, and end round.
  }
};

var startCountdown = setInterval(countdown, 1000); //milliseconds

//Questions
const question1 = {
  question: "Question",
  options: ["no1", "no2", "no3", "Correct"]
};

// WHEN I answer a question
var presentQuestion = function () {
  //remove start button
  var startBtnContainer = document.getElementById("start-button-container");
  startBtnContainer.remove();
  startBtn.remove();

  //create div
  var megaContainer = document.createElement("div");
  megaContainer.setAttribute("class", "megaContainer");
  document.body.appendChild(megaContainer);

  //display question
  var questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "question");
  megaContainer.appendChild(questionContainer);
  questionContainer.innerHTML = question1.question;

  //loop through options to create buttons
  for (var i=0; i < question1.options.length; i++) {
    var button = document.createElement("button");
    megaContainer.appendChild(button);
    button.setAttribute("id", question1.options.selectedIndex = [i]);
    button.innerHTML = question1.options[i];
    ;
  }

 //determine selection 
  var correct = document.querySelectorAll("button['question1.options[5]']")
  console.log(correct);
    // target.onclick = alert("you did it! yay~")
  };

 
  

// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over

// THEN I can save my initials and score
