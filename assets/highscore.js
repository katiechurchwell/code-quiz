//Global Variables
var userScore = localStorage.getItem("Score");
var scoreOrderedList = document.getElementById("scores");

//Score Array
var scores = [
  {
    name: "BOB",
    score: 2,
  },
  {
    name: "LOL",
    score: 1,
  },
];

//make object with userInitials as name and userScore as score
function recordScore(userInitials) {
let user = { name: userInitials, score: userScore };
scores.push(user);

//sort array by score
scores.sort(function (a, b) {
  return b.score - a.score;
});

//display scores
scores.forEach(function (scores) {
  var li = document.createElement("li");
  scoreOrderedList.appendChild(li);
  li.textContent = scores.name + " with a score of " + scores.score;
});
};

//Ask for initials
window.onload = function initials() {
    var userInput = prompt("Enter your intials (3 character max)");
    
    if (userInput.length === 3) {
    var userInitials = userInput.toUpperCase();
    recordScore(userInitials);
    } else {
        alert("Invalid Input");
    }
}