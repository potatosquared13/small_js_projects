let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (num1, num2) => {
  difference = Math.abs(num1 - num2);
  return difference;
};

function compareGuesses(humanGuess, computerGuess, secretNumber) {
  differenceHuman = getAbsoluteDistance(secretNumber, humanGuess);
  differenceComp = getAbsoluteDistance(secretNumber, computerGuess);

  if (differenceComp < differenceHuman) return false;
  else if (differenceHuman <= differenceComp) return true;
}

function updateScore(winner) {
  if (winner === "human") humanScore++;
  else if (winner === "computer") computerScore++;
}

function advanceRound() {
  currentRoundNumber++;
}
