"use strict";

let score = 20;
let highscore = 0;
let secretnumber = Math.trunc(Math.random() * 20 + 1);
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
    displaymessage("🎉 Correct Number..!");
    document.querySelector(".main-section").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "20rem";
    document.querySelector(".number").textContent = guess;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //not corrent number
  else if (guess !== secretnumber) {
    //score not equal to 0
    if (score > 1) {
      console.log(guess - secretnumber);
      if (guess - secretnumber === 1) {
        displaymessage("😃 Almost near...!");
        document.querySelector(".main-section").style.backgroundColor =
          "#adb5bd";
      } else if (guess - secretnumber === 2 || guess - secretnumber === 3) {
        displaymessage(
          guess > secretnumber ? "🤏 Little high..." : "🤏 Little low..."
        );
        document.querySelector(".main-section").style.backgroundColor =
          "#868e96";
      } else {
        document.querySelector(".main-section").style.backgroundColor =
          "#343a40";
        displaymessage(
          guess > secretnumber ? "📈 Too high..." : "📉 Too low..."
        );
      }
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displaymessage("💥 You lost the game..!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".score").textContent = score;
  displaymessage("Start guessing...");
  document.querySelector(".main-section").style.backgroundColor = "#343a40";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
});

const numberField = document.querySelector(".guess");

numberField.addEventListener("input", function () {
  const enteredValue = parseFloat(this.value);
  if (enteredValue < this.min) {
    this.value = this.min;
  }
  if (enteredValue > this.max) {
    this.value = this.max;
  }
});
