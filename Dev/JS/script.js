"use strict";

(function () {
  let userName;
  let userNumber;
  let attempts;
  let currentLevel;
  let score;
  let highScore;

  // Initial setup
  init();

  function init() {
    // Prompt the user for their name
    userName = prompt("Please enter your name:");
    if (!userName) {
      alert("Invalid name. Please try again.");
      return;
    }

    // Initialize game variables
    attempts = 4;
    currentLevel = 1;
    score = 0;
    highScore = 0;

    // Display initial game information
    alert(`Hello, ${userName}! Welcome to the Guessing Game.\nHigh Score: ${highScore}\nLevel: ${currentLevel}\nAttempts Left: ${attempts}`);

    playGame();
  }

  function playGame() {
    let randomNumber = getRandomForLevel();

    for (let i = 0; i < attempts; i++) {
      userNumber = parseInt(prompt(`Level ${currentLevel}: Guess a number between 1 and ${getMaxNumberForLevel()}\nHigh Score: ${highScore}\nCurrent Score: ${score}\nAttempts Left: ${attempts - i}`));

      if (isNaN(userNumber) || userNumber < 1 || userNumber > getMaxNumberForLevel()) {
        alert(`Invalid input. Please enter a number between 1 and ${getMaxNumberForLevel()}.`);
        i--;
        continue;
      }

      if (userNumber === randomNumber) {
        alert(`Correct! You guessed the right number.`);
        updateScore();
        levelUp();
        playGame(); // Play the next level
        return;
      } else if (userNumber > randomNumber) {
        alert("Too high");
      } else {
        alert("Too low");
      }
    }

    // Display game over message
    const playAgain = confirm(`Sorry, ${userName}! You've run out of attempts. Game over.\nYour final score: ${score}\nDo you want to play again?`);

    if (playAgain) {
      // Update high score if the current score is higher
      highScore = Math.max(highScore, score);
      // Reset game variables for a new game
      resetGame();
      playGame(); // Start a new game
    } else {
      // Display thank-you message
      alert(`Thanks for playing, ${userName}!\nFinal High Score: ${highScore}`);
    }
  }

  function resetGame() {
    currentLevel = 1;
    attempts = 4;
    score = 0;
  }

  function updateScore() {
    score += currentLevel * 10; // Increase score based on the current level
  }

  function levelUp() {
    currentLevel++;
    attempts = 4; // Reset attempts for the next level
  }

  function getRandomForLevel() {
    return Math.floor(Math.random() * getMaxNumberForLevel() + 1);
  }

  function getMaxNumberForLevel() {
    return currentLevel * 5;
  }
})();
