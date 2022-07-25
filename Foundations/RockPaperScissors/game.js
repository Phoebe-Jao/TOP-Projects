let playerPts = 0,
  computerPts = 0;

game();

function game() {
  for (let i = 0; i < 5; i++) {
    let answer = prompt(
      "Let's play Rock, Paper, Scissors! \nReady? 1, 2, 3... Go!!"
    );
    console.log(playRound(answer, getComputerChoice()));
  }
  console.log(computeScores(playerPts, computerPts));
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length - 1)];
}

function playRound(playSelection, computerSelection) {
  let value = compareSelection(playSelection, computerSelection);

  if (value == true) {
    playerPts++;
    return `You win! Your ${playSelection} beats ${computerSelection}`;
  } else {
    computerPts++;
    return `You lose! ${computerSelection} beats ${playSelection}`;
  }
}

function compareSelection(playSelection, computerSelection) {
  playSelection.toLowerCase();

  if (
    (playSelection == "paper" && computerSelection == "rock") ||
    (playSelection == "scissors" && computerSelection == "paper") ||
    (playSelection == "rock" && computerSelection == "scissors")
  ) {
    return true;
  } else {
    return false;
  }
}

function computeScores(playerPts, computerPts) {
  return playerPts > computerPts
    ? "Congratulations! You won against the computer!"
    : "You lost, better luck next time!";
}
