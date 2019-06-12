let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
	return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
	let hg = Math.abs(targetNumber - humanGuess);
	let cg = Math.abs(targetNumber - computerGuess);

	if(hg <= cg) {
		return true;
	} else {
		return false;
	}
};

function updateScore(winner) {
	if (winner === 'human') {
		humanScore ++;
	} else if (winner === 'computer') {
		computerScore ++;
	}
};

function advanceRound() {
	currentRoundNumber++;
}