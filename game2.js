function computerPlay() {
    const computerSelection = ["Rock", "Paper", "Scissors"];
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.trim().toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    const choices = ["rock", "paper", "scissors"];

    if (!choices.includes(playerChoice)) {
        return "Invalid choice! Please select Rock, Paper, or Scissors.";
    }

    if (playerChoice === computerChoice) {
        return `🤝 It's a tie! You both chose ${playerChoice}.`;
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return `🎉 You Win 👏 ! ${playerChoice} beats ${computerChoice}.`;
    } else {
        return `💀 You Lose 👎 ! ${computerChoice} beats ${playerChoice}.`;
    }
}

function game() {
    alert("🔥 Welcome to the Ultimate Rock, Paper, Scissors Battle! 🔥​");
    confirm("Do you want to play??😊​");
    alert("To enter the game, you have to open the console in your browser. 🎮​");
   
    console.log("😈 Defeat the evil AI in a best-of-5 battle!");
    console.log(`ROCK 🪨 PAPER 🧻 SCISSORS ✂️`);

    let score = {
        draw: 0,
        you: 0,
        ai: 0
    };

    for (let i = 1; i <= 5; i++) {
        console.log(`🌀 Round ${i} of 5 🌀`); 
        alert(`🌀 Round ${i} of 5 🌀`); 

        let playerSelection;
        let validInput = false;

        while (!validInput) {
            playerSelection = prompt(`Round ${i}: Enter Rock, Paper, or Scissors`);

            if (playerSelection === null) {
                alert("Game canceled ❌");
                return;
            }

            playerSelection = playerSelection.trim().toLowerCase();

            if (["rock", "paper", "scissors"].includes(playerSelection)) {
                validInput = true;
            } else {
                alert("⚠️ Invalid choice! Please select Rock, Paper, or Scissors.");
            }
        }

        const computerSelection = computerPlay();
        console.log(`🤖 The AI chose: ${computerSelection.toUpperCase()}`);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("You Win 👏")) {
            score["you"]++;

        } else if (result.includes("You Lose 👎 ")) {
           score["ai"]++;

        } else {
            score["draw"]++;
        }

        console.log(`🏆 Score: You - ${score["you"]} | Evil AI - ${score["ai"]}`);
        console.log("---------------------------------");
    }

    console.log("\n🔔 FINAL RESULTS 🔔");
    if (score["you"] > score["ai"]) {
        console.log("🎉 Congratulations! You defeated the evil AI! 🎉");

    } else if (score["you"] < score["ai"]) {
        console.log("💀 Game Over! The AI has taken over the world! 💀");

    } else {
        console.log("🤝 It's a draw! Humanity lives to fight another day.");
    }
}

game();