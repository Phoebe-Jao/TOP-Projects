let playerPts = 0,
  computerPts = 0;

let modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modal-content");

let headerPlayer = document.querySelector(".playerPts");
let headerComp = document.querySelector(".computerPts");

let playerScore = document.createElement("p");
let computerScore = document.createElement("p");

playerScore.textContent = playerPts;
computerScore.textContent = computerPts;

headerPlayer.appendChild(playerScore);
headerComp.appendChild(computerScore);

function game() {
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let playerSelection = button.id;
      playRound(playerSelection, getComputerChoice());
    });
  });
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 2)];
}

function playRound(playSelection, computerSelection) {
  let value = compareSelection(playSelection, computerSelection);
  let summaryContainer = document.querySelector(".summaryContainer");
  let roundSummary = document.createElement("p");

  if (value == true) {
    playerPts++;
    displayScore();
    roundSummary.textContent = `You win! Your ${playSelection} beats ${computerSelection}`;
    summaryContainer.appendChild(roundSummary);
  } else if (value == "tie") {
    roundSummary.textContent = `A tie!`;
    summaryContainer.appendChild(roundSummary);
  } else {
    computerPts++;
    displayScore();
    roundSummary.textContent = `You lose! ${computerSelection} beats ${playSelection}`;
    summaryContainer.appendChild(roundSummary);
  }

  if (playerPts >= 5 || computerPts >= 5) {
    let winner = document.createElement("h3");
    winner.textContent = computeScores(playerPts, computerPts);
    winner.classList.add("winnerText");
    summaryContainer.appendChild(winner);

    handleModal();
  }

  displayScore();
  textFade(roundSummary);
  setInterval(() => {
    summaryContainer.removeChild(roundSummary);
  }, 5000);
}

function handleModal() {
  modal.style.display = "block";
  modalContent.addEventListener("click", () => {
    window.location.reload();
  });
}

function displayScore() {
  playerScore.textContent = playerPts;
  computerScore.textContent = computerPts;
}

function textFade(content) {
  content.classList.toggle("fade-out");
}

function compareSelection(playSelection, computerSelection) {
  if (
    (playSelection == "paper" && computerSelection == "rock") ||
    (playSelection == "scissors" && computerSelection == "paper") ||
    (playSelection == "rock" && computerSelection == "scissors")
  ) {
    return true;
  } else if (playSelection == computerSelection) {
    return "tie";
  } else {
    return false;
  }
}

function computeScores(playerPts, computerPts) {
  return playerPts > computerPts
    ? "Congratulations! You won against the computer!"
    : "You lost, better luck next time!";
}

game();
