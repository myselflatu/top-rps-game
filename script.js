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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      'Enter your selection (rock, paper, or scissors):'
    );
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes('Win')) {
      playerScore++;
    } else if (result.includes('Lose')) {
      computerScore++;
    }
  }

  console.log(
    `Final Score - Player: ${playerScore}, Computer: ${computerScore}`
  );

  if (playerScore > computerScore) {
    console.log('Congratulations! You won the game.');
  } else if (playerScore < computerScore) {
    console.log('Sorry, you lost the game.');
  } else {
    console.log('The game ended in a tie.');
  }
}

game();