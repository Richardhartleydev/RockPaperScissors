function getComputerChoice() {
  let randomNum = Math.random();

  if (randomNum <= 0.3333) {
    return "rock";
  } else if (randomNum >= 0.6666) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "This was a draw";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You won!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You won!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You won!";
  } else return "You lost!";
}

function game() {
  let totalRounds = 5;
  let currentRound = 0;
  let playerScore = 0;
  let computerScore = 0;
  let drawScore = 0;

  function playNextRound() {
    if (currentRound < totalRounds) {
      let computerSelection = getComputerChoice();
      let playerSelection = prompt("Please enter rock, paper or scissors");

      if (playerSelection === null) {
        console.log("An error has occurred");
      } else {
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result === "You won!") {
          playerScore++;
        } else if (result === "You lost!") {
          computerScore++;
        } else {
          drawScore++;
        }

        console.log(
          "Your score : " + playerScore + "  Computer Score : " + computerScore
        );

        currentRound++;
        setTimeout(playNextRound, 0);
      }
    } else {
      if (playerScore === computerScore) {
        console.log("This was a draw oh no!");
      } else if (playerScore > computerScore) {
        console.log("You won! Congratulations!");
      } else {
        console.log("You lost! Better luck next time :(");
      }
    }
  }

  playNextRound();
}

game();
