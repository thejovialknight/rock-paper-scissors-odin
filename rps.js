function computerPlay() {
	const options = ['rock', 'paper', 'scissors'];
	return options[Math.floor(Math.random() * options.length)];	
}

function playRound(playerSelection) {
	const dominanceMap = new Map([
		["rock", "scissors"],
		["scissors", "paper"],
		["paper", "rock"]
	]);

	const computerSelection = computerPlay();

	const info = document.querySelector("#status");
	const playerScore = document.querySelector("#player-score");
	const computerScore = document.querySelector("#computer-score");
	console.log("p: " + playerScore.innerHTML);
	console.log("c: " + computerScore.innerHTML);

	if(playerScore.innerHTML >= 5 || computerScore.innerHTML >= 5) {
		playerScore.innerHTML = 0;
		computerScore.innerHTML = 0;
	}

	if(dominanceMap.get(playerSelection) === computerSelection) {
		playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
		info.innerHTML = `You win! ${playerSelection} beats ${computerSelection}!`;
	}
	else if(dominanceMap.get(computerSelection) === playerSelection) {
		computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
		info.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}!`;
	}
	else {
		info.innerHTML = `You tie! Player chose ${playerSelection} and computer chose ${computerSelection}!`;
	}

	if(Number(playerScore.innerHTML) >= 5) {
		info.innerHTML += " You've won the game! Thanks for playing!"
	}
	else if(Number(computerScore.innerHTML) >= 5) {
		info.innerHTML += " You've lost the game! Thanks for playing!"
	}
}

function toggleDarkMode() {
	const body = document.querySelector("body");
	if(body.classList.contains("dark")) {
		body.classList.replace("dark", "light");
	}
	else {
		body.classList.replace("light", "dark");
	}
}

function game() {
	const info = document.querySelector("#status");
	info.innerHTML = "Hello, welcome to Rock, Paper, Scissors! Make a selection!"

	document.getElementById("rock").addEventListener("click", () => { playRound("rock"); });
	document.getElementById("paper").addEventListener("click", () => { playRound("paper"); });
	document.getElementById("scissors").addEventListener("click", () => { playRound("scissors"); });
	document.querySelector("#dark-mode").addEventListener("click", () => { toggleDarkMode(); });
}

game();
