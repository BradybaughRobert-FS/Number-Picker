"use strict";
// IIFE
(function () {
  let userNumber;
  let randomNumber = getRandom();
  playGame();

  function playGame() {
    userNumber = prompt("Pick a number between 1 and 5");
    //   console.log(userNumber);
    // Conditional
    if (userNumber > randomNumber) {
      alert("Too high");
      // Call function inside itself
      playGame();
    } else if (userNumber < randomNumber) {
      alert("Too low");
      playGame();
    } else {
      alert("Correct!");
      gameOver();
    }
  }

  function gameOver() {
    alert("Game over");
  }

  function getRandom() {
    // Return random number between 1 and 5
    return Math.floor(Math.random() * 5 + 1);
  }
})();
