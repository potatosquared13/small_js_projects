const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb")
    return userInput;
  else return console.log("Input Error!");
};

const getComputerChoice = () => {
  let number = Math.floor(Math.random() * 3);
  if (number === 0) return "rock";
  else if (number === 1) return "paper";
  else if (number === 2) return "scissors";
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return "Result is a tie!";
  else if (userChoice === "bomb") return "User Won!";
  else {
    if (userChoice === "rock") {
      if (computerChoice === "paper") return "User Lost!";
      else return "User Won!";
    } else if (userChoice === "paper") {
      if (computerChoice === "scissors") return "User Lost!";
      else return "User Won!";
    } else {
      if (computerChoice === "rock") return "User Lost!";
      else return "User Won!";
    }
  }
};

const playGame = () => {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();
  console.log(`User: ${userChoice}\nComputer: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
