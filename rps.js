function computerPlay() {
	let options = ['rock', 'paper', 'scissors'];
	return options[Math.random() * 3];	
}

for(let i = 0; i < 100; i++) {
	console.log(computerPlay());
}
