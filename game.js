"use strict";

function digitSeprator(test, testSize, arr) {
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

  let input; //User provided // 3245
  let inputArr = [];
  const randomArr = [];
  let turn = 1;
  let gameOver = false;

  const randomNum = prompt("Enter a number to be guessed!");
  digitSeprator(randomNum, inputSize, randomArr);

  while (gameOver === false) {
    input = prompt(`Turn: ${turn}. Please enter your number`);
    turn++;
    inputArr = [];
    inputArr = digitSeprator(input, inputSize, inputArr);
    console.log(inputArr);
    let dispBull = bullCalc(bulls, inputArr, randomArr, inputSize);
    let dispCow = cowCalc(cows, inputArr, randomArr, inputSize);
    alert(`You entered ${input}. Bulls: ${dispBull}, Cows: ${dispCow}`);
    if (dispBull === inputSize) {
      alert(`GAME OVER! You finished in ${turn} turns`);
      gameOver = true;
    }
  }
}

playGame();
