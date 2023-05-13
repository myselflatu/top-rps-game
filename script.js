 const choices = ['rock','paper','scissors'];

function getComputerChoice() {
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return 'Tie!';
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'paper') {
      return 'You Lose! Paper beats Rock';
    } else {
      return 'You Win! Rock beats Scissors';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'scissors') {
      return 'You Lose! Scissors beats Paper';
    } else {
      return 'You Win! Paper beats Rock';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      return 'You Lose! Rock beats Scissors';
    } else {
      return 'You Win! Scissors beats Paper';
    }
  }
}

const playerSelection = 'Rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));