const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('input');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
	let index = Math.floor(Math.random() * 3);
	return choices[index];
}

function disableButtons() {
	buttons.forEach((elem) => {
		elem.disabled = true;
	});
}

function playRound(playerSelection) {
	playerSelection = playerSelection.toLowerCase();
	computerSelection = getComputerChoice().toLowerCase();

	let result = '';
	if (playerSelection === computerSelection) {
		result = `Tie!<br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`;
	} else if (playerSelection === 'rock') {
		if (computerSelection === 'paper') {
			computerScore++;
			result = `You Lose! Paper beats Rock.<br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`;
		} else {
			playerScore++;
			result = `You Win! Rock beats Scissors.<br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`;
		}
	} else if (playerSelection === 'paper') {
		if (computerSelection === 'scissors') {
			computerScore++;
			result = `You Lose! Scissors beats Paper.<br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`;
		} else {
			playerScore++;
			result = `You Win! Paper beats Rock.<br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`;
		}
	} else if (playerSelection === 'scissors') {
		if (computerSelection === 'rock') {
			computerScore++;
			result = `You Lose! Rock beats Scissors.<br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`;
		} else {
			playerScore++;
			result = `You Win! Scissors beats Paper.<br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`;
		}
	}
	document.getElementById('result').innerHTML = result;

	if (playerScore == 5) {
		document.getElementById('result').innerHTML =
			'You won the game! Reload the page to play again.';
		disableButtons();
	}

	if (computerScore == 5) {
		document.getElementById('result').innerHTML =
			'Computer won the game! Reload the page to play again.';
		disableButtons();
	}
}

buttons.forEach((button) => {
	button.addEventListener('click', function () {
		playRound(button.value);
	});
});
