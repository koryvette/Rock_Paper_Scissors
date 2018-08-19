var userscore = 0;
var computerscore = 0;
var audioWin = new Audio('wav/cheer_hooter.wav');
var audioLose = new Audio('wav/nap-ddang.mp3');
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector("scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];

}

function convertWord(letter) {
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}



function win(userChoice, computerChoice) {
	userscore++;
	userscore_span.innerHTML = userscore;
	computerscore_span.innerHTML = computerscore;
	result_p.innerHTML = convertWord(userChoice) + " beats " + convertWord(computerChoice) + ". You WIN!!!";
	audioWin.play();
}

function lose(userChoice, computerChoice){
	computerscore++;
	userscore_span.innerHTML = userscore;
	computerscore_span.innerHTML = computerscore;
	result_p.innerHTML = convertWord(userChoice) + " loses to " + convertWord(computerChoice) + ". You LOSE!!!";
	audioLose.play();
}

function draw(userChoice, computerChoice){
	userscore_span.innerHTML = userscore;
	computerscore_span.innerHTML = computerscore;
	result_p.innerHTML = convertWord(userChoice) + " ties with " + convertWord(computerChoice) + ". It's a DRAW!!!";
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
				win(userChoice, computerChoice)
				break;
			case "rp":
			case "ps":
			case "sr":
				lose(userChoice, computerChoice)
				break;
			case "rr":
			case "pp":
			case "ss":
				draw(userChoice, computerChoice)
				break;

	}
}

function main() {
rock_div.addEventListener('click', function() {
	game("r");
})
paper_div.addEventListener('click', function() {
	game("p");
})
scissors_div.addEventListener('click', function() {
	game("s");
})

}

main();
