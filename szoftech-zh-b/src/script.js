console.log("Ready");

/*
Game function: the user can choose between rock, paper, and scissors. 
After the user makes a choice, the program switches to the result view: 
what the computer chose and who won the round 
(rock beats scissors, paper beats rock, scissors beats paper, in case of a tie, no one gets a point);
and the total score since the game started. 
By clicking on the "Tovább" link, we can start a new round: the results disappear, and we see the input view again.
*/

var userChoice = -1;
var computerChoice = -1;

var userScore = 0;
var computerScore = 0;

var winner = "";


function showResult(compu) {
	const result = document.querySelector(".result");
	result.style.display = "block";
	const items = document.querySelectorAll(".item");
	items[0].innerHTML = `
		<h3>Ellenfeled: ${compu}</h3>
		<p>Ezt a kört <strong>${winner}</strong> nyerte!</p>
		<div>
			<a href="">Tovább</a>
		</div>
	`;
	items[1].innerHTML = `
		<h3>Pontszámok</h3>
		<p><strong>Te:</strong> ${userScore} pont</p>
		<p><strong>CPU:</strong> ${computerScore} pont</p>
	`;
	const next = document.querySelector("a");
	next.addEventListener("click", function() {
		result.style.display = "none";
	});

}

function removeResult() {
	const result = document.querySelector(".result");
	result.style.display = "none";
}

const buttons = document.querySelectorAll("button");
	buttons.forEach(button => {
		button.addEventListener("click", function() {
			userChoice = this.textContent;
			if (userChoice === "Kő") {
				userChoice = "rock";
			} else if (userChoice === "Papír") {
				userChoice = "paper";
			} else if (userChoice === "Olló") {
				userChoice = "scissors";
			}
			console.log(userChoice);
			let comp = computerPlay();
			playRound(userChoice, computer);
			console.log(`User: ${userChoice}, Computer: ${computer}`);
			console.log(`User: ${userScore}, Computer: ${computerScore}`);
			showResult(comp);
		});
	});


function computerPlay() {
	const options = {
		rock: 0,
		paper: 1,
		scissors: 2
	};
	let computerChoice = Math.floor(Math.random() * 3);
	computer = Object.keys(options).find(key => options[key] === computerChoice);
	return computer;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		winner = "Senki";
	} else if (
		(playerSelection == "rock" && computerSelection == "scissors") ||
		(playerSelection == "scissors" && computerSelection == "paper") ||
		(playerSelection == "paper" && computerSelection == "rock")
	) {
		winner = "Te";
		userScore++;
	} else {
		winner = "CPU";
		computerScore++;
	}
}

removeResult();



/*
<body>
	<div id="title-bar">
		<h1>Kő-Papír-Olló</h1>
	</div>
	<div id="main">
		<div class="inside">
			<section class="input">
				<h2>Mit mutatsz most?</h2>
				<form action="">
					<div>
						<label for="">Válassz "fegyvert" ellenfeled ellen!</label>
					</div>
					<button>Kő</button>
					<button>Papír</button>
					<button>Olló</button>
				</form>
			</section>
			<section class="result">
				<h2>Eredmény</h2>
				<div class="info">
					<div class="item">
						<h3>Ellenfeled: Kő</h3>
						<p>Ezt a kört <strong>Te</strong> nyerted!</p>
						<div>
							<a href="">Tovább</a>
						</div>
					</div>
					<div class="item">
						<h3>Pontszámok</h3>
						<p><strong>Te:</strong> 3 pont</p>
						<p><strong>CPU:</strong> 1 pont</p>
					</div>
				</div>
			</section>
		</div>
	</div>
	<script src="src/script.js"></script>
</body>
*/