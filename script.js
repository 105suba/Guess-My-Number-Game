"use strict";

let score = 20;
let highscore = 0;
const secretnumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector(".number").textContent = secretnumber;

const displaymessage = function (message) {
  document.querySelector(".content").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //no number
  if (!guess) displaymessage("No Number");
  //correct number
  else if (guess === secretnumber) {
    displaymessage("Correct Number..!");
    document.querySelector(".main-section").style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //not corrent number
  else if (guess !== secretnumber) {
    if (score > 1) {
      displaymessage(guess > secretnumber ? "Too high..." : "Too low...");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displaymessage("You lost the game..!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector("header button").addEventListener("click", function () {
  let score = 20;
  const secretnumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score')=score;
  displaymessage("Start guessing...");
  document.querySelector('main-section').style.backgroundColor="#443a3a";
});
