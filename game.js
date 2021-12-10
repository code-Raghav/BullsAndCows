"use strict";

function inputValidator(input, inputSize) {
  for (let i = 0; i < inputSize; i++) {
    for (let j = 0; j <= inputSize; j++) {
      if (input[i] === input[j] && j !== i) {
        alert("WRONG INPUT! Repeated numbers are not allowed");
        return true;
      }
    }
  }
  return false;
}

function digitSeparator(test, testSize, arr) {
  for (let i = testSize - 1; i >= 0; i--) {
    // 3245/10^(inputsize-1) = 3.245 = 3
    // 3245 - 3^10(inputsize-1)
    let digit = Math.trunc(test / Math.pow(10, i));
    let number = test - digit * Math.pow(10, i);
    test = number;

    arr.push(digit);
  }
  return arr;
}

function bullCalc(bulls, inputArr, randomArr, inputSize) {
  for (let i = 0; i < inputSize; i++) {
    if (inputArr[i] === randomArr[i]) {
      console.log(i);
      bulls++;
    }
  }
  return bulls;
}

function cowCalc(cows, inputArr, randomArr, inputSize) {
  for (let i = 0; i < inputSize; i++) {
    for (let j = 0; j < inputSize; j++) {
      if (i !== j && inputArr[i] === randomArr[j]) {
        cows++;
      }
    }
  }
  return cows;
}

function playGame() {
  //Variables Define
  let bulls = 0;
  let cows = 0;
  const inputSize = 4; //User provided

  let input;

  let inputArr = [];
  const randomArr = [];

  alert("Welcome to Bulls and Cows, Player 1!");

  let randomNum = prompt("Enter a number to be guessed!");
  while (inputValidator(randomNum, inputSize)) {
    randomNum = prompt("Enter a number to be guessed!");
  }
  digitSeparator(randomNum, inputSize, randomArr);

  alert("Number recorded! You can now handover the system to Player 2!");
  const maximumTurns = prompt(
    "Welcome to Bulls and Cows! Please enter the amount of turns you would like."
  );

  let turn = 0;
  let gameOver = false;
  while (gameOver === false) {
    turn++;

    input = prompt(`Turn: ${turn}. Please enter your number`);
    while (inputValidator(input, inputSize)) {
      input = prompt(`Turn: ${turn}. Please enter your number`);
    }
    console.log(inputValidator(input, inputSize));

    inputArr = [];
    inputArr = digitSeparator(input, inputSize, inputArr);
    console.log(inputArr);
    let dispBull = bullCalc(bulls, inputArr, randomArr, inputSize);
    let dispCow = cowCalc(cows, inputArr, randomArr, inputSize);
    alert(`You entered ${input}. Bulls: ${dispBull}, Cows: ${dispCow}`);
    if (dispBull === inputSize) {
      alert(`GAME OVER! You finished in ${turn} turns`);
      gameOver = true;
    } else if (turn >= maximumTurns) {
      alert(
        `GAME OVER! You were unable to finish the game in ${turn} turns. BETTER LUCK NEXT TIME!`
      );
      gameOver = true;
    }
  }
}

playGame();
